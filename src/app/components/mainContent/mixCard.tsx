import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  pictureSize: string | number | undefined;
  textSize: string | number | undefined;
}

export default function MixCard({ pictureSize, textSize }: Props) {
  return (
    <button>
      <div className="w-auto">
        <div className="flex p-2 items-center">
          <div className="mr-2">
            <Skeleton width={pictureSize} height={pictureSize} />
          </div>
          <div className="flex-1">
            <Skeleton width={textSize} />
          </div>
        </div>
      </div>
    </button>
  );
}
