"use client";
import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "../ui/use-toast";

export default function MeetingTypeList() {
  const router = useRouter();
  const { toast } = useToast();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const [meetingState, setMeetingState] = useState<
    "isSchedule" | "isJoining" | "isInstant" | undefined
  >();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and a time",
        });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create call");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Meeting created",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        color="bg-orange-1"
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstant")}
      />
      <HomeCard
        color="bg-blue-1"
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plane your meeting"
        handleClick={() => setMeetingState("isSchedule")}
      />
      <HomeCard
        color="bg-purple-1"
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        color="bg-yellow-1"
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitaion link"
        handleClick={() => setMeetingState("isJoining")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstant"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </div>
  );
}
