interface Props {
  track: {
    trackName: string;
    artistName: string;
  };
  w: string | number;
  h: string | number;
  onClick?: () => void;
}

export default function MainRows({ track, w, h, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-[#1F1F1F] rounded-lg flex flex-col text-start gap-y-2"
    >
      <div className={`bg-white w-[${w}px] h-[${h}px]`}></div>
      <div className="flex flex-col items-start">
        <h3 className="text-[#AEAEAE]">{track.trackName}</h3>
        <p className="text-[#AEAEAE]">{track.artistName}</p>
      </div>
    </button>
  );
}
