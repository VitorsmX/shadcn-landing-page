"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RadioPlayerProps {
  streamUrl: string;
  className?: string;
}

export const RadioPlayer = ({ streamUrl, className }: RadioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 1;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao reproduzir a rádio:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={cn(
        "w-full max-w-md p-4 rounded-lg shadow-lg bg-background/70 backdrop-blur flex items-center justify-between gap-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Button onClick={togglePlay} size="icon" variant="outline">
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <div className="text-sm">
          <span className="block font-semibold text-primary">{isPlaying ? "Ouvindo" : "Ouça"} a Rádio Super Cristal</span>
          <span className="text-muted-foreground text-xs">
            {isPlaying ? "Tocando agora" : "Pausado"}
          </span>
        </div>
      </div>
      <audio
        ref={audioRef}
        preload="none"
        controls={false}
        src={streamUrl}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
};
