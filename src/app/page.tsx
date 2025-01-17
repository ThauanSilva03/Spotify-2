"use client";

import Image from "next/image";
import CardMusic from "./components/library/cardMusic";
import {
  AppWindow,
  ArrowRight,
  Bell,
  Computer,
  GalleryVerticalEnd,
  Library,
  ListMusic,
  LucideHouse,
  Maximize2,
  MicVocal,
  Plus,
  Search,
  SkipBack,
  SkipForward,
  SquarePlay,
  X,
} from "lucide-react";
import Button from "./components/library/button";
import React, { useState, useRef, useEffect } from "react";
import MainCard from "./components/mainContent/mainCard";
import MediumCard from "./components/mainContent/mediumCard";
import PlayingNowCard from "./components/mainContent/playingNowCard";
import MusicDetails from "./components/musicDetails/musicDetails";
import Topics from "./components/mainContent/topics";
import MixCard from "./components/mainContent/mixCard";
import MainRows from "./components/mainContent/mainRows";
import Volume from "./components/mainContent/volume";
import { useRouter } from "next/navigation";

interface Track {
  trackName: string;
  artistName: string;
  duration: string;
}

export default function Home() {
  const [showLeft, setShowLeft] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingNow, setPlayingNow] = useState<Track>();
  const [libraryOpen, setLibraryOpen] = useState(true);
  const [playPause, setPlayPause] = useState("/mainIcons/playBlack.png");

  useEffect(() => {
    const fetchTracksData = async () => {
      setIsLoading(true);

      const endpoint = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=50&api_key=d94d36ddf23800c1453b9a06a0c75315&format=json`;
      const totalPages = 5;

      const allTracks = await fetchAllTracks(endpoint, totalPages);

      setTracks(allTracks);
      setIsLoading(false);
    };

    fetchTracksData();
  }, []);

  const fetchAllTracks = async (endpoint: string, totalPages: number) => {
    const allTracks: {
      trackName: string;
      artistName: string;
      duration: string;
    }[] = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(`${endpoint}&page=${page}`);
      const data = await response.json();

      const tracks = data.tracks.track.map((track: any) => ({
        trackName: track.name,
        artistName: track.artist.name,
        duration: track.duration,
      }));

      allTracks.push(...tracks);
    }

    return allTracks;
  };

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

  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  const pressPlayButton = () => {
    if (playPause == "/mainIcons/playBlack.png")
      setPlayPause("/mainIcons/pause.png");
    else setPlayPause("/mainIcons/playBlack.png");
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-hidden">
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
            <button
              className="text-black font-bold text-center"
              onClick={() => {
                login();
              }}
            >
              W
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-row w-full gap-2 px-3 pb-20">
        <div
          className={`group relative w-[22%] max-h-[800px] ${
            !libraryOpen && "max-w-[110px]"
          } overflow-hidden rounded-lg bg-[#121212] pb-0`}
        >
          <div
            className={`sticky top-0 z-10 w-full max-h-[120px] bg-[#121212] text-[#B3B3B3] px-6 pt-6 pb-3 transition-shadow duration-300 ${
              hasShadow ? "shadow-[0_10px_15px_rgba(0,0,0,0.7)]" : ""
            }`}
          >
            <div className="flex justify-between">
              <button
                className="flex hover:text-white"
                onClick={() => {
                  setLibraryOpen(!libraryOpen);
                }}
              >
                <Library className="mr-2" />
                {libraryOpen && <h2 className="font-bold">Sua biblioteca</h2>}
              </button>
              {libraryOpen && (
                <div className="flex gap-3 text-[#B3B3B3]">
                  <button className="hover:bg-[#1F1F1F] rounded-full p-1 hover:text-white">
                    <Plus />
                  </button>
                  <button className="hover:bg-[#1F1F1F] rounded-full p-1 hover:text-white">
                    <ArrowRight />
                  </button>
                </div>
              )}
            </div>
            {libraryOpen && (
              <div className="pt-4 gap-x-2 flex">
                <Button>Playlists</Button>
                <Button>Artistas</Button>
                <Button>Álbuns</Button>
              </div>
            )}
          </div>
          <div
            ref={scrollRef}
            className="overflow-y-auto pr-0 scrollbar scrollbar-thumb-transparent group-hover:scrollbar-thumb-[#898989] max-h-full"
          >
            {Array.from({ length: 50 }, (_, i) => (
              <CardMusic open={libraryOpen} key={i} />
            ))}
          </div>
        </div>
        <div className="group max-h-[800px] w-[53%] overflow-hidden rounded-lg bg-[#121212] flex-1">
          <div className="overflow-y-auto scrollbar scrollbar-thumb-white/0 group-hover:scrollbar-thumb-white/70 h-full py-4 pl-8">
            <div className="pr-8">
              <div className="flex gap-2 py-2 ">
                <Button>Tudo</Button>
                <Button>Música</Button>
                <Button>Podcasts</Button>
              </div>
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                {isLoading
                  ? Array.from({ length: 8 }, (_, i) => (
                      <MixCard
                        pictureSize={showLeft ? 60 : 90}
                        textSize={showLeft ? 120 : 150}
                        key={i}
                      />
                    ))
                  : tracks.slice(0, 8).map((track, index) => (
                      <button
                        key={index}
                        className="bg-[#1F1F1F] flex  items-center gap-2 rounded-md text-start hover:bg-[#3a3a3a]"
                      >
                        <div
                          className={`min-h-[50px] bg-slate-100 min-w-[50px] rounded-s-md ${
                            showLeft ? "" : "min-w-[70px] min-h-[70px]"
                          }`}
                        >
                          {/* foto da musica */}
                        </div>
                        <div>
                          <p
                            className={`text-white ${
                              showLeft ? "text-xs" : "text-base"
                            } break-words leading-tight`}
                          >
                            {track.trackName}
                          </p>
                        </div>
                      </button>
                    ))}
              </div>
            </div>
            <div>
              <Topics>Feitos para William</Topics>
              <div className="flex gap-3 overflow-auto scrollbar-none py-2">
                {isLoading
                  ? Array.from({ length: 10 }, (_, i) => <MainCard key={i} />)
                  : tracks.slice(9, 19).map((track, index) => (
                      <MainRows
                        track={track}
                        key={index}
                        w={200}
                        h={200}
                        onClick={() => {
                          setPlayingNow(track);
                        }}
                      />
                    ))}
              </div>
              <Topics>Suas músicas estão com saudades</Topics>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {isLoading
                  ? Array.from({ length: 10 }, (_, i) => <MainCard key={i} />)
                  : tracks.slice(20, 30).map((track, index) => (
                      <MainRows
                        track={track}
                        key={index}
                        w={170}
                        h={170}
                        onClick={() => {
                          setPlayingNow(track);
                        }}
                      />
                    ))}
              </div>
              <Topics>Tocados recentemente</Topics>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {isLoading
                  ? Array.from({ length: 20 }, (_, i) => <MediumCard key={i} />)
                  : tracks.slice(31, 51).map((track, index) => (
                      <MainRows
                        track={track}
                        key={index}
                        w={120}
                        h={120}
                        onClick={() => {
                          setPlayingNow(track);
                        }}
                      />
                    ))}
              </div>
              <Topics>O melhor de cada artista</Topics>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {isLoading
                  ? Array.from({ length: 10 }, (_, i) => <MainCard key={i} />)
                  : tracks.slice(52, 62).map((track, index) => (
                      <MainRows
                        track={track}
                        key={index}
                        w={170}
                        h={170}
                        onClick={() => {
                          setPlayingNow(track);
                        }}
                      />
                    ))}
              </div>
              <Topics>Os maiores hits do momento</Topics>
              <div className="flex gap-3 overflow-auto scrollbar-none py-3">
                {isLoading
                  ? Array.from({ length: 10 }, (_, i) => <MediumCard key={i} />)
                  : tracks.slice(63, 73).map((track, index) => (
                      <MainRows
                        track={track}
                        key={index}
                        w={170}
                        h={170}
                        onClick={() => {
                          setPlayingNow(track);
                        }}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`group relative flex flex-col max-h-[800px] w-[25%] overflow-hidden rounded-lg bg-[#121212] p-5 pb-0 gap-y-2 ${
            showLeft ? "" : "hidden"
          }`}
        >
          <div className="overflow-y-auto scrollbar scrollbar-thumb-white/0 group-hover:scrollbar-thumb-white/70 h-full">
            {playingNow ? (
              <div>
                <div className="flex justify-between">
                  <h2 className="font-bold">{playingNow.trackName}</h2>
                  <button
                    onClick={() => {
                      setShowLeft(!showLeft);
                    }}
                  >
                    <X />
                  </button>
                </div>
                <div className="bg-slate-50 min-w-[400px] min-h-[400px] mt-5 mb-3 rounded-lg">
                  {/* foto da musica */}
                </div>
                <div className="mb-4">
                  <h1 className="text-lg font-bold">{playingNow.trackName}</h1>
                  <p>{playingNow.artistName}</p>
                </div>
              </div>
            ) : (
              <MusicDetails />
            )}
            <div className="flex flex-col gap-y-4">
              <div className="h-52 w-full bg-[#1F1F1F] text-black rounded-lg"></div>
              <div className="h-80 w-full bg-[#1F1F1F] text-black rounded-lg"></div>
              <div className="h-72 w-full bg-[#1F1F1F] text-black rounded-lg"></div>
              <div className="h-64 w-full bg-[#1F1F1F] text-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-[#0A0A0A] left-0 right-0 py-2 px-4 h-20 flex justify-between items-center z-50">
        <div className="w-[15%] h-full flex items-center">
          {playingNow ? (
            <div className="flex items-center gap-y-3">
              <div className="bg-white min-w-[60px] min-h-[60px] mr-2"></div>
              <div className="flex flex-col ">
                <p className="text-white text-[0.70rem] hover:underline hover:cursor-pointer">
                  {playingNow.trackName}
                </p>
                <p className="text-[#AEAEAE] text-[0.65rem] hover:underline hover:text-white hover:cursor-pointer">
                  {playingNow.artistName}
                </p>
              </div>
            </div>
          ) : (
            <PlayingNowCard />
          )}
        </div>
        <div className="w-[40%] h-full flex flex-col justify-center items-center gap-y-2">
          <div className="flex items-center gap-x-4">
            <button>
              <SkipBack />
            </button>
            <button
              className="bg-slate-50 p-2 rounded-full text-black flex items-center justify-center"
              onClick={() => {
                pressPlayButton();
              }}
            >
              <Image src={playPause} alt="" width={14} height={14} />
            </button>
            <button>
              <SkipForward />
            </button>
          </div>
          <div className="w-full flex flex-row items-center gap-x-2">
            <div className="text-xs">0:00</div>
            <div className="bg-slate-50 h-1 rounded-full w-full"></div>
            <div className="text-xs">
              {playingNow?.duration
                ? Math.floor(parseInt(playingNow.duration, 10) / 60) +
                  ":" +
                  (parseInt(playingNow.duration, 10) % 60)
                    .toString()
                    .padStart(2, "0")
                : "0:00"}
            </div>
          </div>
        </div>
        <div className="w-[15%] h-full flex items-center gap-2">
          <button onClick={() => setShowLeft(!showLeft)}>
            <SquarePlay
              className={`h-5 w-5 text-[#B3B3B3] hover:text-white hover:scale-105 ${
                showLeft ? "text-green-500 hover:text-green-500" : ""
              }`}
            />
          </button>
          <button className="group">
            <MicVocal className="h-4 w-4 text-[#B3B3B3] hover:text-white hover:scale-105" />
          </button>
          <button>
            <ListMusic className="h-4 w-4 text-[#B3B3B3] hover:text-white hover:scale-105" />
          </button>
          <button>
            <Computer className="h-4 w-4 text-[#B3B3B3] hover:text-white hover:scale-105" />
          </button>
          <Volume />
          <button>
            <AppWindow className="h-4 w-4 text-[#B3B3B3] hover:text-white hover:scale-105" />
          </button>
          <button>
            <Maximize2 className="h-4 w-4 text-[#B3B3B3] hover:text-white hover:scale-105" />
          </button>
        </div>
      </div>
    </div>
  );
}
