import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MediumCard() {
  return (
    <SkeletonTheme baseColor="#474648" highlightColor="#5c5c5c">
      <button>
        <div className="flex flex-col gap-y-1">
          <div>
            <Skeleton width={120} height={120} />
          </div>
          <div className="flex">
            <Skeleton width={90} />
          </div>
        </div>
      </button>
    </SkeletonTheme>
  );
}
