import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MusicDetails() {
  return (
    <div className="flex flex-col w-full mb-8">
      <SkeletonTheme baseColor="#474648" highlightColor="#5c5c5c">
        <Skeleton />
        <Skeleton height={400} className="my-4" />
        <Skeleton width={300} />
        <Skeleton width={200} />
      </SkeletonTheme>
    </div>
  );
}
