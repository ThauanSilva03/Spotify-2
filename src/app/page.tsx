"use client";

import Image from "next/image";
import CardMusic from "./components/library/cardMusic";
import {
  ArrowRight,
  Bell,
  GalleryVerticalEnd,
  Library,
  LucideHouse,
  Plus,
  Search,
} from "lucide-react";
import Button from "./components/library/button";
import React, { useState, useRef, useEffect } from "react";
import MainCard from "./components/mainContent/mainCard";
import MediumCard from "./components/mainContent/mediumCard";

export default function Home() {
  const [hasShadow, setHasShadow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setHasShadow(scrollRef.current.scrollTop > 0);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
            <button>
              <LucideHouse className="text-[#AEAEAE]" />
            </button>
          </div>
          <div className="relative flex items-center px-2 rounded-full w-[480px] bg-[#2A2A2A] py-1">
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
          <button>
            <Bell className="scale-75 text-[#AEAEAE] hover:text-white hover:scale-[.80]" />
          </button>
          <div className="bg-[#19E68C] flex rounded-full w-9 h-9 items-center justify-center">
            <button className="text-black font-bold text-center">W</button>
          </div>
        </div>
      </header>
      <div className="flex flex-row w-full gap-2 px-3">
        <div className="group relative w-[22%] overflow-hidden rounded-lg bg-[#121212]">
          <div
            className={`sticky top-0 z-10 w-full max-h-[120px] bg-[#121212] text-[#B3B3B3] px-6 pt-6 pb-3 transition-shadow duration-300 ${
              hasShadow ? "shadow-[0_10px_15px_rgba(0,0,0,0.7)]" : ""
            }`}
          >
            <div className="flex justify-between">
              <button className="flex hover:text-white">
                <Library className="mr-2" />
                <h2 className="font-bold">Sua biblioteca</h2>
              </button>
              <div className="flex gap-3 text-[#B3B3B3]">
                <button className="hover:bg-[#1F1F1F] rounded-full p-1 hover:text-white">
                  <Plus />
                </button>
                <button className="hover:bg-[#1F1F1F] rounded-full p-1 hover:text-white">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="pt-4 gap-x-2 flex">
              <Button>Playlists</Button>
              <Button>Artistas</Button>
              <Button>Álbuns</Button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="overflow-y-auto h-full p-4 scrollbar scrollbar-thumb-transparent group-hover:scrollbar-thumb-[#898989] max-h-[680px]"
          >
            {Array.from({ length: 50 }, (_, i) => (
              <CardMusic key={i} />
            ))}
          </div>
        </div>
        <div className="group max-h-[800px] w-[53%] overflow-hidden rounded-lg bg-[#121212]">
          <div className=" overflow-y-auto scrollbar scrollbar-thumb-white/0 group-hover:scrollbar-thumb-white/70 h-full py-4 pl-8">
            <div className="pr-8">
              <div className="flex gap-2 py-2 ">
                <Button>Tudo</Button>
                <Button>Música</Button>
                <Button>Podcasts</Button>
              </div>
              <div className="grid grid-cols-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <CardMusic key={i} />
                ))}
              </div>
            </div>
            <div>
              <div className="pt-4 font-bold flex justify-between pr-8">
                <h2 className="text-xl">Feitos para William</h2>
                <h4 className="text-sm">Mostrar tudo</h4>
              </div>
              <div className="flex gap-3 overflow-auto scrollbar-none py-2">
                {Array.from({ length: 10 }, (_, i) => (
                  <MainCard key={i} />
                ))}
              </div>
              <div className="pt-4 font-bold flex justify-between pr-8">
                <h2 className="text-xl">Suas músicas estão com saudades</h2>
                <h4 className="text-sm">Mostrar tudo</h4>
              </div>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {Array.from({ length: 10 }, (_, i) => (
                  <MainCard key={i} />
                ))}
              </div>
              <div className="pt-4 font-bold flex justify-between pr-8">
                <h2 className="text-xl">Tocados recentemente</h2>
                <h4 className="text-sm">Mostrar tudo</h4>
              </div>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {Array.from({ length: 10 }, (_, i) => (
                  <MediumCard key={i} />
                ))}
              </div>
              <div className="pt-4 font-bold flex justify-between pr-8">
                <h2 className="text-xl">O melhor de cada artista</h2>
                <h4 className="text-sm">Mostrar tudo</h4>
              </div>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {Array.from({ length: 10 }, (_, i) => (
                  <MainCard key={i} />
                ))}
              </div>
              <div className="pt-4 font-bold flex justify-between pr-8">
                <h2 className="text-xl">Os maiores hits do momento</h2>
                <h4 className="text-sm">Mostrar tudo</h4>
              </div>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {Array.from({ length: 10 }, (_, i) => (
                  <MainCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="group relative max-h-[800px] w-[25%] overflow-hidden rounded-lg bg-[#121212]"></div>
      </div>
    </div>
  );
}
