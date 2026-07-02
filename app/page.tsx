"use client";

import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import EventCards from "@/components/EventCards";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!opened) {
    return <CoverPage onOpen={() => setOpened(true)} />;
  }

  return (
    <EventCards activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
  );
}
