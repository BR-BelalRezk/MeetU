"use client";
import { cn } from "@/lib/utils";
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { useState } from "react";
type callLayout = "grid" | "speaker-left" | "speaker-right";
export default function MeetingRoom() {
  const [layout, setLayout] = useState<callLayout>("speaker-left");
  const [showParicipants, setShowParicipants] = useState(false)
  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition={"left"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"left"} />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className=" relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div className={cn("h-[calc(100vh-86px)] ml-2" , {'show-block' : showParicipants})}>
            <CallParticipantsList onClose={() => setShowParicipants(false)}/>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        <CallControls />
      </div>
    </section>
  );
}
