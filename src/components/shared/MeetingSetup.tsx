"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  setIsSetupComplete: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MeetingSetup({ setIsSetupComplete }: Props) {
  const [isMicCamToggeledOn, setIsMicCamToggeledOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }
  useEffect(() => {
    if (isMicCamToggeledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggeledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          htmlFor=""
          className="flex items-center justify-center gap-2 font-medium"
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={isMicCamToggeledOn}
            onChange={(e) => {
              setIsMicCamToggeledOn(e.target.checked);
              setIsSetupComplete(true);
            }}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => call.join()}
      >
        Join meeting
      </Button>
    </div>
  );
}
