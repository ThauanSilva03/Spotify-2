import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MainCard() {
  return (
    <SkeletonTheme baseColor="#474648" highlightColor="#5c5c5c">
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
    </SkeletonTheme>
  );
}
