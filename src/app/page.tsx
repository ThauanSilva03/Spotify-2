"use client";

import CardMusic from "./components/library/cardMusic";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center flex-col p-3">
      <div className="flex flex-row w-full gap-2">
        <div className="group relative max-h-[750px] w-[25%] overflow-hidden rounded-lg bg-[#121212]">
          <div className="overflow-y-auto h-full p-4 scrollbar scrollbar-thumb-transparent group-hover:scrollbar-thumb-[#898989] ">
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
            <div>
              <CardMusic />
            </div>
          </div>
        </div>
        <div className="group relative max-h-[750px] w-[50%] overflow-hidden rounded-lg bg-[#121212]"></div>
        <div className="group relative max-h-[750px] w-[25%] overflow-hidden rounded-lg bg-[#121212]"></div>
      </div>
    </div>
  );
}
