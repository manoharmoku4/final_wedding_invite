"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { events } from "@/lib/events";

export default function EventCards({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const [direction, setDirection] = useState<"left" | "right">("right");
  const touchStartX = useRef<number | null>(null);

  const event = events[activeIndex];

  function goTo(i: number) {
    if (i < 0 || i >= events.length || i === activeIndex) return;
    setDirection(i > activeIndex ? "right" : "left");
    setActiveIndex(i);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (deltaX > threshold) {
      goTo(activeIndex - 1);
    } else if (deltaX < -threshold) {
      goTo(activeIndex + 1);
    }
    touchStartX.current = null;
  }

  const mapHref = event.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`
    : null;

  return (
    <div className="event-cards-page bg-ivory">
      <header className="ec-header flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display font-900 text-maroon leading-tight text-[clamp(1.1rem,5vw,1.6rem)]">
          Manisha &amp; Akshay
        </h1>
        <p className="font-script text-gold text-[clamp(0.85rem,3.5vw,1.1rem)] -mt-1">
          #AkManifested
        </p>
      </header>

      <nav className="ec-tabs flex items-center gap-2 overflow-x-auto px-3 no-scrollbar">
        {events.map((ev, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={ev.id}
              onClick={() => goTo(i)}
              className="shrink-0 rounded-full px-3.5 py-1.5 font-body font-600 text-[11px] sm:text-xs transition-colors"
              style={{
                backgroundColor: active ? ev.accent : "#FFF8F0",
                color: active ? "#FFF8F0" : "#3D2817",
                border: `1px solid ${ev.accent}`,
              }}
            >
              {ev.name}
            </button>
          );
        })}
      </nav>

      <div
        className="ec-main flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={`img-${event.id}`}
          className={`ec-image-wrap relative w-full bg-cream ${
            direction === "right" ? "slide-in-right" : "slide-in-left"
          }`}
        >
          <Image
            src={event.image}
            alt={event.name}
            fill
            sizes="100vw"
            className="object-contain object-top"
          />
        </div>

        <div
          key={`details-${event.id}`}
          className={`ec-details px-5 py-3 flex flex-col gap-1.5 ${
            direction === "right" ? "slide-in-right" : "slide-in-left"
          }`}
          style={{ backgroundColor: event.bg }}
        >
          <h2
            className="ec-title font-display font-700"
            style={{ color: event.accent }}
          >
            {event.name}
          </h2>
          <p className="ec-body font-body font-600 text-darktext">
            {event.date} &middot; {event.time}
          </p>
          <p className="ec-body font-body text-darktext">{event.venue}</p>
          {event.dresscodeNote && (
            <p className="ec-body font-body font-700 text-darktext">
              {event.dresscodeNote}
            </p>
          )}
          <p className="ec-body font-body text-darktext">
            <span className="font-700">Her:</span> {event.dresscodeHer}
          </p>
          <p className="ec-body font-body text-darktext">
            <span className="font-700">Him:</span> {event.dresscodeHim}
          </p>
          {mapHref && (
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block w-fit rounded-full px-4 py-1.5 ec-body font-body font-700 text-lighttext transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: event.accent }}
            >
              View on Map
            </a>
          )}
        </div>
      </div>

      <div className="ec-nav flex items-center justify-between px-4">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="font-body font-600 text-xs text-darktext disabled:opacity-30"
        >
          &larr; Prev
        </button>
        <div className="flex gap-1.5">
          {events.map((ev, i) => (
            <span
              key={ev.id}
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: i === activeIndex ? event.accent : "#D9CBBE",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === events.length - 1}
          className="font-body font-600 text-xs text-darktext disabled:opacity-30"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
