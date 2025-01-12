"use client";

import Image from "next/image";
import CardMusic from "./components/library/cardMusic";
import {
  Bell,
  GalleryVerticalEnd,
  LucideHouse,
  RatIcon,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="px-4 flex justify-between py-2 items-center">
        <button className="pl-3">
          <Image
            src="/icons/icon-spotify.svg"
            width={35}
            height={35}
            alt="iconSpotify"
          />
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-[#282828] flex rounded-full w-12 h-12 items-center justify-center hover:scale-105">
            {/* House button */}
            <button>
              <LucideHouse className="text-[#AEAEAE]" />
            </button>
          </div>
          <div className="relative flex items-center px-2 rounded-full w-[480px] bg-[#2A2A2A] py-1">
            {/* Search input */}
            <button>
              <Search className="text-[#AEAEAE]" />
            </button>
            <input
              type="text"
              className="bg-transparent p-2 outline-none w-[85%] text-base placeholder-[#AEAEAE]"
              placeholder="O que você quer ouvir?"
            />
            <span className="mr-9">|</span>
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <GalleryVerticalEnd className="text-[#AEAEAE]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Profile */}
          <button>
            <Bell className="scale-75 text-[#AEAEAE] hover:text-white hover:scale-[.80]" />
          </button>
          <div className="bg-[#19E68C] flex rounded-full w-9 h-9 items-center justify-center">
            <button className="text-black font-bold text-center">W</button>
          </div>
        </div>
      </header>
      <div className="flex flex-row w-full gap-2 px-3">
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
