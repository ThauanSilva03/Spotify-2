import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import Image from "next/image";

export default function CardMusic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SkeletonTheme baseColor="#474648" highlightColor="#5c5c5c">
      <button
        className="w-full px-2 pr-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full hover:bg-slate-50 hover:bg-opacity-10 rounded-xl p-1">
          <div className="flex p-2 items-center">
            <div className="relative mr-2 w-[60px]">
              <Skeleton width={60} height={60} />
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/mainIcons/play.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              )}
            </div>
            <div>
              <Skeleton width={120} count={2} />
            </div>
          </div>
        </div>
      </button>
    </SkeletonTheme>
  );
}
