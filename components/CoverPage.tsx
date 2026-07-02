"use client";

import Image from "next/image";
import Petals from "./Petals";

export default function CoverPage({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <Image
        src="/images/cover.jpg"
        alt="Manisha & Akshay"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <Petals />

      <div className="absolute inset-x-0 top-8 flex justify-center z-10">
        <p className="text-lighttext font-body tracking-[0.2em] text-xs sm:text-sm drop-shadow-lg">
          AUGUST 16&ndash;23, 2026 &middot; HYDERABAD
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-5 z-10 px-6">
        <button
          onClick={onOpen}
          className="rounded-full px-8 py-3 font-body font-700 tracking-wide text-darktext shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #E9CD8F 0%, #C9A961 50%, #B8944D 100%)",
          }}
        >
          OPEN INVITATION ✨
        </button>
      </div>
    </div>
  );
}
