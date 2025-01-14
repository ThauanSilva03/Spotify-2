import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function PlayingNowCard() {
  return (
    <SkeletonTheme baseColor="#474648" highlightColor="#5c5c5c">
      <button className="">
        <div className="w">
          <div className="flex p-2 items-center">
            <div className="relative mr-2 w-[60]">
              <Skeleton width={60} height={60} />
            </div>
            <div>
              <Skeleton width={100} count={2} />
            </div>
          </div>
        </div>
      </button>
    </SkeletonTheme>
  );
}
