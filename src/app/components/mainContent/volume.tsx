import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function Volume() {
  const [volume, setVolume] = useState(50);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    setPreviousVolume(volume);
  };
  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          if (volume === 0) {
            setVolume(previousVolume);
          } else {
            setVolume(0);
          }
        }}
      >
        {volume != 0 ? (
          volume > 50 ? (
            <Volume2 className="h-5 w-5 text-[#B3B3B3] hover:text-white hover:scale-105" />
          ) : (
            <Volume1 className="h-5 w-5 text-[#B3B3B3] hover:text-white hover:scale-105" />
          )
        ) : (
          <VolumeX className="h-5 w-5 text-[#B3B3B3] hover:text-white hover:scale-105" />
        )}
      </button>
      <input
        type="range"
        min={0}
        max={100}
        className="accent-white hover:accent-green-500 max-h-1 w-24 focus:outline-none"
        onChange={handleVolumeChange}
        value={volume}
      />
    </div>
  );
}
