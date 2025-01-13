import Skeleton from "react-loading-skeleton";

export default function MediumCard() {
  return (
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
  );
}
