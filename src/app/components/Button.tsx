import Image from "next/image";
import React from "react";

interface Props {
  text: string;
  path?: string;
}

export default function Button({ text, path }: Props) {
  return (
    <button className="border border-[#7C7C7C] hover:border-[#FFFF] rounded-full py-[10px] px-7 font-semibold text-[15px] flex items-center justify-center w-full">
      {path && (
        <span className="flex items-center justify-center">
          <Image src={path} alt="icon" width={28} height={28} />
        </span>
      )}
      <span className="text-center w-full">{text}</span>
    </button>
  );
}
