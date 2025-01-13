import Skeleton from "react-loading-skeleton";

export default function MainCard() {
  return (
    <button>
      <div className="flex flex-col gap-y-1">
        <div>
          <Skeleton width={170} height={170} />
        </div>
        <div className="flex">
          <Skeleton width={140} count={2} />
        </div>
      </div>
    </button>
  );
}
