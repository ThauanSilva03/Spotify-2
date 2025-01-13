import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CardMusic() {
  return (
    <button>
      <div className="w-auto">
        <div className="flex p-2 items-center">
          <div className="mr-2">
            <Skeleton width={60} height={60} />
          </div>
          <div className="flex-1">
            <Skeleton width={120} count={2} />
          </div>
        </div>
      </div>
    </button>
  );
}
