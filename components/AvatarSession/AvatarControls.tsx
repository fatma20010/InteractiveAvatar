import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import React from "react";

import { useVoiceChat } from "../logic/useVoiceChat";
import { Button } from "../Button";
import { useInterrupt } from "../logic/useInterrupt";

import { AudioInput } from "./AudioInput";
import { TextInput } from "./TextInput";

export const AvatarControls: React.FC = () => {
  const {
    isVoiceChatLoading,
    isVoiceChatActive,
    startVoiceChat,
    stopVoiceChat,
  } = useVoiceChat();
  const { interrupt } = useInterrupt();

  return (
    <div className="flex flex-col gap-3 relative w-full items-center">
      <ToggleGroup
        className={`bg-secondary rounded-lg p-1 ${isVoiceChatLoading ? "opacity-50" : ""}`}
        disabled={isVoiceChatLoading}
        type="single"
        value={isVoiceChatActive || isVoiceChatLoading ? "voice" : "text"}
        onValueChange={(value) => {
          if (value === "voice" && !isVoiceChatActive && !isVoiceChatLoading) {
            startVoiceChat();
          } else if (
            value === "text" &&
            isVoiceChatActive &&
            !isVoiceChatLoading
          ) {
            stopVoiceChat();
          }
        }}
      >
        <ToggleGroupItem
          className="data-[state=on]:bg-secondary-dark rounded-lg p-2 text-sm w-[90px] text-center transition-colors"
          value="voice"
        >
          Voice Chat
        </ToggleGroupItem>
        <ToggleGroupItem
          className="data-[state=on]:bg-secondary-dark rounded-lg p-2 text-sm w-[90px] text-center transition-colors"
          value="text"
        >
          Text Chat
        </ToggleGroupItem>
      </ToggleGroup>
      {isVoiceChatActive || isVoiceChatLoading ? <AudioInput /> : <TextInput />}
      <div className="absolute top-[-70px] right-3">
        <Button variant="secondary" onClick={interrupt}>
          Interrupt
        </Button>
      </div>
    </div>
  );
};
