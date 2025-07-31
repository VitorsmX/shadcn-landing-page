"use client";

import { useEffect, useRef, useState } from "react";
import {
  Pause,
  Play,
  Loader2,
  Volume2,
  Volume1,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RadioPlayerProps {
  streamUrl: string;
  className?: string;
}

export const RadioPlayer = ({ streamUrl, className }: RadioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(1);
  const lastPlaybackTime = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Monitoramento de atraso ou travamento
  useEffect(() => {
    if (!isPlaying) return;

    timeoutRef.current = setInterval(() => {
      const current = audioRef.current;
      if (!current) return;

      if (!current.paused) {
        const currentTime = current.currentTime;
        const timeDiff = Math.abs(currentTime - lastPlaybackTime.current);

        if (timeDiff < 0.01) {
          console.warn("Possível travamento detectado. Reiniciando stream...");
          current.pause();
          current.load(); // Força o reload do stream
          current.play().catch(console.error);
        }

        lastPlaybackTime.current = currentTime;
      }
    }, 10000); // checa a cada 10s

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      setIsLoading(true);
      audioRef.current.play().catch((err) => {
        console.error("Erro ao reproduzir a rádio:", err);
        setIsLoading(false);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX />;
    if (volume < 0.5) return <Volume1 />;
    return <Volume2 />;
  };

  return (
    <div
      className={cn(
        "w-full max-w-md p-4 rounded-lg shadow-lg bg-background/70 backdrop-blur flex flex-col gap-4",
        className
      )}
    >
      {/* Controles principais */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button onClick={togglePlay} size="icon" variant="outline" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : isPlaying ? (
              <Pause />
            ) : (
              <Play />
            )}
          </Button>
          <div className="text-sm">
            <span className="block font-semibold text-primary">
              {isLoading
                ? "Carregando transmissão..."
                : isPlaying
                ? "Ouvindo a Rádio Super Cristal"
                : "Ouça a Rádio Super Cristal"}
            </span>
            <span className="text-muted-foreground text-xs">
              {isLoading ? "Conectando ao stream" : isPlaying ? "Tocando agora" : "Pausado"}
            </span>
          </div>
        </div>
      </div>

      {/* Controle de volume */}
      <div className="flex items-center gap-3 px-2">
        <div className="text-muted-foreground">{getVolumeIcon()}</div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      <audio
        ref={audioRef}
        preload="none"
        controls={false}
        src={streamUrl}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onStalled={() => setIsLoading(true)}
        onError={(e) => {
          console.error("Erro de streaming:", e);
          setIsLoading(false);
          setIsPlaying(false);
        }}
      />
    </div>
  );
};
