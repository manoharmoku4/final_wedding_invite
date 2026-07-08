"use client";

import { useEffect, useRef, useState } from "react";

const PALETTE = {
  ivory: "#F5EBE0",
  cream: "#FFF8F0",
  rose: "#D4A5A5",
  gold: "#C9A961",
  maroon: "#7A2E2E",
  textDark: "#3D2817",
  textLight: "#FFF8F0",
};

type EventItem = {
  id: string;
  cardImage: string;
  cardStyle: "option1" | "option2" | "option3";
  lightBg: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string | null;
  venueText?: string;
  venueAddress?: string;
  hasVenue: boolean;
  mapsQuery?: string;
  mapsUrl?: string;
  dresscode: string;
  accentColor: string;
  accentColor2: string;
  bgColor: string;
  imageGradient: string;
  icon: string;
};

const events: EventItem[] = [
  {
    id: "engagement",
    cardImage: "/images/engagement.jpg",
    cardStyle: "option2",
    lightBg: "#F5E8F0",
    title: "Engagement",
    subtitle: "Ring it in",
    date: "Sunday, August 16, 2026",
    time: "10:30 AM",
    venue: null,
    venueText: "Venue to be announced",
    hasVenue: false,
    dresscode: "Her: Pastel dreams, floral flair\nHim: Sharp formals / Soft kurta charm",
    accentColor: "#D4A5A5",
    accentColor2: "#C9A961",
    bgColor: "#3D2020",
    imageGradient: "linear-gradient(160deg, #4a2828 0%, #6b3838 50%, #8a5050 100%)",
    icon: "💍",
  },
  {
    id: "mehndi",
    cardImage: "/images/mehndi.jpg",
    cardStyle: "option2",
    lightBg: "#EBF2E8",
    title: "Mehndi",
    subtitle: "Pastels & Petals",
    date: "Wednesday, August 19, 2026",
    time: "4:00 PM",
    venue: "Moku Home",
    mapsQuery: "Moku Home Hyderabad",
    hasVenue: true,
    dresscode: "Her: Indo-western, henna-ready\nHim: Kurta cool, henna crew",
    accentColor: "#9CAF88",
    accentColor2: "#C9A961",
    bgColor: "#2A2F1E",
    imageGradient: "linear-gradient(160deg, #2f3a24 0%, #4a5a38 50%, #7a8f5e 100%)",
    icon: "🌿",
  },
  {
    id: "haldi",
    cardImage: "/images/haldi.jpg",
    cardStyle: "option2",
    lightBg: "#FDF5DC",
    title: "Haldi",
    subtitle: "Hello, Sunshine!",
    date: "Thursday, August 20, 2026",
    time: "10:00 AM",
    venue: "Moku Home",
    mapsQuery: "Moku Home Hyderabad",
    hasVenue: true,
    dresscode: "Her: Yellow indo-western / Kurtas - smile bright\nHim: Yellow kurtas — shine bright",
    accentColor: "#E8B84B",
    accentColor2: "#C9A961",
    bgColor: "#3D2F0F",
    imageGradient: "linear-gradient(160deg, #4a3a12 0%, #7a5e1e 50%, #c79a2e 100%)",
    icon: "🌻",
  },
  {
    id: "pellikuthuru",
    cardImage: "/images/pellikuthuru.jpg",
    cardStyle: "option2",
    lightBg: "#FAE8DC",
    title: "Pellikuthuru",
    subtitle: "Tradition with a Twist",
    date: "Thursday, August 20, 2026",
    time: "4:00 PM",
    venue: "Moku Home",
    mapsQuery: "Moku Home Hyderabad",
    hasVenue: true,
    dresscode: "Her: Lehengas or half sarees — twirl-ready!\nHim: Classic kurtas — dapper mode on",
    accentColor: "#C76B4A",
    accentColor2: "#E8975C",
    bgColor: "#3D1F12",
    imageGradient: "linear-gradient(160deg, #4a2414 0%, #7a3f24 50%, #c2733e 100%)",
    icon: "🔔",
  },
  {
    id: "shaadi",
    cardImage: "/images/shaadi.jpg",
    cardStyle: "option2",
    lightBg: "#F5E0E0",
    title: "Pelli",
    subtitle: "The Big Day",
    date: "Friday, August 21, 2026",
    time: "11:30 AM",
    venue: "Rock Enclave Convention",
    venueAddress: "6-78, Aushapur, Telangana 501301, India",
    mapsQuery: "Rock Enclave Convention, 6-78, Aushapur, Telangana 501301, India",
    hasVenue: true,
    dresscode: "Her: Gorgeous South Indian sarees — bring the elegance\nHim: Sherwani — look like royalty",
    accentColor: "#7A2E2E",
    accentColor2: "#C9A961",
    bgColor: "#2A1010",
    imageGradient: "linear-gradient(160deg, #2e1212 0%, #5c1e1e 50%, #8f2e2e 100%)",
    icon: "🎊",
  },
  {
    id: "reception",
    cardImage: "/images/reception.jpg",
    cardStyle: "option2",
    lightBg: "#E5E7F2",
    title: "Reception",
    subtitle: "Party All Night!",
    date: "Sunday, August 23, 2026",
    time: "7:00 PM",
    venue: "Police Convention Center",
    mapsUrl: "https://maps.app.goo.gl/43xvox1XoqkCdhyj8?g_st=iw",
    hasVenue: true,
    dresscode: "Her: Lehengas for tradition, Gowns for Glam — steal the spotlight\nHim: Suits or Indo-western — turn heads",
    accentColor: "#2C3567",
    accentColor2: "#C9A961",
    bgColor: "#1B1F3D",
    imageGradient: "linear-gradient(160deg, #1B1F3D 0%, #2C3567 50%, #4A5591 100%)",
    icon: "🥂",
  },
];

function MusicToggle({
  playing,
  onToggle,
  accent,
}: {
  playing: boolean;
  onToggle: () => void;
  accent: string;
}) {
  return (
    <button
      onClick={onToggle}
      className="header-btn"
      style={{
        flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%",
        background: "rgba(255,255,255,0.5)",
        border: `1.5px solid ${accent}55`, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px",
      }}
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}

function RSVPButton({ accent, onPress }: { accent: string; onPress: () => void }) {
  return (
    <button
      onClick={onPress}
      className="header-btn"
      style={{
        flexShrink: 0, height: "32px", borderRadius: "16px", padding: "0 14px",
        background: "rgba(255,255,255,0.5)",
        border: `1.5px solid ${accent}55`, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "10px", fontWeight: 800, letterSpacing: "1px",
        color: accent, fontFamily: "var(--font-montserrat)",
      }}
    >
      RSVP
    </button>
  );
}

function CountdownTimer({ targetDate, accent }: { targetDate: string; accent: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {(
        [
          ["d", "DAYS"],
          ["h", "HRS"],
          ["m", "MIN"],
          ["s", "SEC"],
        ] as const
      ).map(([k, l]) => (
        <div
          key={k}
          style={{
            background: "rgba(61,40,23,0.4)", border: `1px solid ${accent}88`,
            borderRadius: "10px", padding: "10px 8px", minWidth: "58px", textAlign: "center",
          }}
        >
          <div style={{ fontSize: "26px", fontWeight: 800, color: accent, fontFamily: "var(--font-montserrat)", lineHeight: 1 }}>
            {String(time[k]).padStart(2, "0")}
          </div>
          <div style={{ fontSize: "8px", color: PALETTE.textDark, opacity: 0.6, letterSpacing: "2px", marginTop: "3px" }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

type RSVPStatus = "yes" | "tentative";

function RSVPForm({ accent }: { accent: string }) {
  const [form, setForm] = useState({
    first: "",
    last: "",
    arrivalDate: "",
    arrivalTime: "",
    notSure: false,
    events: {} as Record<string, RSVPStatus>,
    note: "",
  });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = form.first.trim().length > 0 && form.last.trim().length > 0;

  const submit = async () => {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submit failed");
      setDone(true);
    } catch {
      setError("Couldn't submit right now — please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  // Three-state toggle: undefined -> "yes" -> "tentative" -> undefined
  const cycleEvent = (title: string) => {
    setForm((f) => {
      const current = f.events[title];
      const next: RSVPStatus | undefined = !current ? "yes" : current === "yes" ? "tentative" : undefined;
      const updated = { ...f.events };
      if (next) updated[title] = next;
      else delete updated[title];
      return { ...f, events: updated };
    });
  };

  const chipColor = (state: RSVPStatus | undefined) => {
    if (state === "yes") return { bg: accent, color: "#fff", border: accent };
    if (state === "tentative") return { bg: `${accent}33`, color: accent, border: accent };
    return { bg: "rgba(255,255,255,0.4)", color: PALETTE.textDark, border: `${accent}66` };
  };

  const chipLabel = (title: string, state: RSVPStatus | undefined) => {
    if (state === "yes") return `✓ ${title}`;
    if (state === "tentative") return `? ${title}`;
    return title;
  };

  if (done)
    return (
      <div style={{ textAlign: "center", padding: "32px 16px" }}>
        <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
        <div style={{ fontSize: "20px", fontWeight: 800, color: accent, fontFamily: "var(--font-playfair)" }}>
          You&apos;re on the list!
        </div>
        <div style={{ color: PALETTE.textDark, opacity: 0.7, fontSize: "13px", marginTop: "8px" }}>
          See you at #AkManifested 💫
        </div>
      </div>
    );

  const inp: React.CSSProperties = {
    background: "rgba(255,255,255,0.6)", border: `1px solid ${accent}66`,
    borderRadius: "8px", padding: "10px 8px", color: PALETTE.textDark,
    fontSize: "14px", fontFamily: "var(--font-montserrat)", outline: "none", width: "100%", minWidth: 0, boxSizing: "border-box",
  };

  const dateTimeInp: React.CSSProperties = { ...inp, padding: "7px 6px", fontSize: "13px" };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "8px" }}>
        <input
          style={inp}
          placeholder="First Name *"
          value={form.first}
          onChange={(e) => setForm((f) => ({ ...f, first: e.target.value }))}
        />
        <input
          style={inp}
          placeholder="Last Name *"
          value={form.last}
          onChange={(e) => setForm((f) => ({ ...f, last: e.target.value }))}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.85, marginBottom: "6px" }}>
          ARRIVING IN HYDERABAD
        </div>
        {!form.notSure && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", minWidth: 0, marginBottom: "8px" }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: "9px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.85, marginBottom: "5px", fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>
                📅 ARRIVAL DATE
              </div>
              <input
                style={dateTimeInp}
                type="date"
                value={form.arrivalDate}
                min="2026-08-14"
                max="2026-08-23"
                onChange={(e) => setForm((f) => ({ ...f, arrivalDate: e.target.value }))}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: "9px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.85, marginBottom: "5px", fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>
                ⏰ ARRIVAL TIME
              </div>
              <input
                style={dateTimeInp}
                type="time"
                value={form.arrivalTime}
                onChange={(e) => setForm((f) => ({ ...f, arrivalTime: e.target.value }))}
              />
            </div>
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            id="notSure"
            checked={form.notSure}
            onChange={(e) => setForm((f) => ({ ...f, notSure: e.target.checked, arrivalDate: "", arrivalTime: "" }))}
            style={{ accentColor: accent, width: "16px", height: "16px" }}
          />
          <label htmlFor="notSure" style={{ fontSize: "12px", fontFamily: "var(--font-montserrat)", color: PALETTE.textDark, cursor: "pointer" }}>
            Not sure yet
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.85, marginBottom: "6px" }}>
          WHICH EVENTS?
        </div>
        <div style={{ fontSize: "9px", color: PALETTE.textDark, opacity: 0.5, marginBottom: "6px", fontFamily: "var(--font-montserrat)" }}>
          Tap once = Attending ✓ · Tap twice = Tentative ? · Tap again to remove
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {events.map((ev) => {
            const state = form.events[ev.title];
            const c = chipColor(state);
            return (
              <button
                key={ev.id}
                onClick={() => cycleEvent(ev.title)}
                style={{
                  padding: "5px 12px", borderRadius: "16px", border: `1px solid ${c.border}`,
                  background: c.bg, color: c.color,
                  fontSize: "11px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {chipLabel(ev.title, state)}
              </button>
            );
          })}
        </div>
      </div>

      <textarea
        style={{ ...inp, resize: "none", marginBottom: "10px" }}
        rows={1}
        placeholder="A message for the couple... (optional)"
        value={form.note}
        onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
      />

      {error && (
        <div style={{ color: accent, fontSize: "11px", marginBottom: "10px", fontFamily: "var(--font-montserrat)" }}>
          {error}
        </div>
      )}

      <button
        onClick={submit}
        disabled={submitting || !canSubmit}
        style={{
          width: "100%", padding: "14px", borderRadius: "10px",
          background: `linear-gradient(135deg, ${accent}, ${PALETTE.gold})`,
          border: "none", color: "#fff", fontSize: "13px", fontWeight: 800,
          letterSpacing: "2px", fontFamily: "var(--font-montserrat)",
          cursor: submitting || !canSubmit ? "not-allowed" : "pointer", opacity: submitting || !canSubmit ? 0.6 : 1,
        }}
      >
        {submitting ? "SUBMITTING…" : "SUBMIT RSVP ✨"}
      </button>
    </div>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const dresscodeLines = event.dresscode.split("\n");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [swipeStartY, setSwipeStartY] = useState<number | null>(null);

  const handleSwipeStart = (e: React.TouchEvent) => {
    setSwipeStartY(e.touches ? e.touches[0].clientY : null);
  };
  const handleSwipeEnd = (e: React.TouchEvent) => {
    if (swipeStartY === null) return;
    const endY = e.changedTouches ? e.changedTouches[0].clientY : null;
    if (endY && swipeStartY - endY > 40) setDetailsOpen(true);
    if (endY && endY - swipeStartY > 40) setDetailsOpen(false);
    setSwipeStartY(null);
  };

  const detailsContent = (textColor?: string) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ fontFamily: "var(--font-playfair)", fontSize: "18px", fontWeight: 900, color: textColor || event.accentColor, lineHeight: 1.1 }}>
        {event.title} <span style={{ fontFamily: "var(--font-dancing)", fontSize: "13px", fontWeight: 600 }}>· {event.subtitle}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
        <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "11px" }}>📅 {event.date}</span>
        <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "11px" }}>⏰ {event.time}</span>
      </div>
      <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "11px" }}>
        📍 {event.hasVenue ? event.venue : event.venueText}
      </span>
      <div style={{ fontSize: "10px", fontFamily: "var(--font-montserrat)", lineHeight: 1.5, opacity: 0.85 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {dresscodeLines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
              <span style={{ minWidth: "16px", flexShrink: 0 }}>{i === 0 ? "👗" : "👔"}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
      {event.hasVenue && (
        <a
          href={event.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(event.mapsQuery || "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "5px",
            padding: "5px 14px", borderRadius: "16px", textDecoration: "none",
            background: `${event.accentColor}22`, border: `1px solid ${event.accentColor}66`,
            color: event.accentColor, fontFamily: "var(--font-montserrat)", fontSize: "10px", fontWeight: 700,
          }}
        >
          📍 MAP
        </a>
      )}
    </div>
  );

  // OPTION 1: Full image hero, tap to slide panel up over image (Engagement, Reception)
  if (event.cardStyle === "option1") {
    return (
      <div
        style={{
          borderRadius: "24px", overflow: "hidden", position: "relative",
          boxShadow: `0 12px 40px ${event.accentColor}44`, border: `1px solid ${event.accentColor}33`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={event.cardImage} alt={event.title} style={{ width: "100%", height: "auto", display: "block" }} />
        {!detailsOpen && (
          <div
            onClick={() => setDetailsOpen(true)}
            style={{
              position: "absolute", bottom: "16px", left: 0, right: 0,
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
              cursor: "pointer", animation: "pulse 2s ease-in-out infinite",
            }}
          >
            <div
              style={{
                fontSize: "9px", letterSpacing: "2px", color: "#fff",
                fontFamily: "var(--font-montserrat)", fontWeight: 700,
                background: "rgba(0,0,0,0.45)", padding: "4px 12px", borderRadius: "12px",
                backdropFilter: "blur(4px)",
              }}
            >
              SWIPE UP
            </div>
            <div style={{ color: "#fff", fontSize: "16px" }}>▲</div>
          </div>
        )}
        <div
          onClick={() => setDetailsOpen(false)}
          style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            background: `${event.lightBg || PALETTE.cream}f0`,
            backdropFilter: "blur(8px)",
            borderRadius: "20px 20px 0 0",
            padding: "16px",
            transform: detailsOpen ? "translateY(0)" : "translateY(105%)",
            transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
            borderTop: `2px solid ${event.accentColor}44`,
          }}
        >
          <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: event.accentColor, margin: "0 auto 12px", opacity: 0.5 }} />
          {detailsContent(event.accentColor)}
        </div>
      </div>
    );
  }

  // OPTION 2: Strip below image, whole panel slides UP over image on tap (Mehndi)
  if (event.cardStyle === "option2") {
    return (
      <div
        style={{
          borderRadius: "24px", overflow: "hidden",
          boxShadow: `0 12px 40px ${event.accentColor}44`,
          border: `1px solid ${event.accentColor}33`,
          position: "relative",
          display: "flex", flexDirection: "column", height: "100%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={event.cardImage} alt={event.title} style={{ width: "100%", flex: "1 1 auto", minHeight: 0, objectFit: "cover", display: "block" }} />

        <div
          onClick={() => setDetailsOpen(!detailsOpen)}
          style={{
            background: event.lightBg || PALETTE.cream,
            borderTop: `2px solid ${event.accentColor}44`,
            padding: "12px 16px", cursor: "pointer",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flex: "0 0 auto",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "16px", fontWeight: 900, color: event.accentColor }}>
              {event.title} <span style={{ fontFamily: "var(--font-dancing)", fontSize: "13px", fontWeight: 600 }}>· {event.subtitle}</span>
            </div>
            <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "10px", color: PALETTE.textDark, opacity: 0.7, marginTop: "2px" }}>
              📅 {event.date} · ⏰ {event.time}
            </div>
          </div>
          <div
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
              animation: detailsOpen ? "none" : "blink 1.8s ease-in-out infinite",
            }}
          >
            <div style={{ color: event.accentColor, fontSize: "18px" }}>▲</div>
            <div style={{ fontSize: "8px", letterSpacing: "2px", color: event.accentColor, fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>
              TAP
            </div>
          </div>
        </div>

        <div
          onClick={() => setDetailsOpen(false)}
          style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            background: `${event.lightBg || PALETTE.cream}f5`,
            backdropFilter: "blur(12px)",
            borderRadius: "20px 20px 0 0",
            borderTop: `2px solid ${event.accentColor}44`,
            transform: detailsOpen ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
            padding: "16px",
            cursor: "pointer",
          }}
        >
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: event.accentColor, opacity: 0.5 }} />
            <div style={{ position: "absolute", right: 0, color: event.accentColor, fontSize: "16px", opacity: 0.7 }}>▼</div>
          </div>
          {detailsContent(event.accentColor)}
        </div>
      </div>
    );
  }

  // OPTION 3: Swipe up to reveal details (Haldi, Pelli)
  if (event.cardStyle === "option3") {
    return (
      <div
        style={{
          borderRadius: "24px", overflow: "hidden", position: "relative",
          boxShadow: `0 12px 40px ${event.accentColor}44`, border: `1px solid ${event.accentColor}33`,
        }}
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={event.cardImage} alt={event.title} style={{ width: "100%", height: "auto", display: "block" }} />
        {!detailsOpen && (
          <div
            style={{
              position: "absolute", bottom: "16px", left: 0, right: 0,
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
              animation: "pulse 2s ease-in-out infinite", pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontSize: "9px", letterSpacing: "2px", color: "#fff",
                fontFamily: "var(--font-montserrat)", fontWeight: 700,
                background: "rgba(0,0,0,0.45)", padding: "4px 12px", borderRadius: "12px",
                backdropFilter: "blur(4px)",
              }}
            >
              SWIPE UP FOR DETAILS
            </div>
            <div style={{ color: "#fff", fontSize: "16px" }}>▲</div>
          </div>
        )}
        <div
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            background: `${event.lightBg || PALETTE.cream}f0`,
            backdropFilter: "blur(8px)", borderRadius: "20px 20px 0 0",
            padding: "16px",
            transform: detailsOpen ? "translateY(0)" : "translateY(105%)",
            transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
            borderTop: `2px solid ${event.accentColor}44`,
          }}
        >
          <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: event.accentColor, margin: "0 auto 12px", opacity: 0.5 }} />
          {detailsContent(event.accentColor)}
        </div>
      </div>
    );
  }

  // PELLIKUTHURU: capped image height so details + prev/next always visible
  return (
    <div
      style={{
        borderRadius: "24px", overflow: "hidden",
        boxShadow: `0 12px 40px ${event.accentColor}44`, border: `1px solid ${event.accentColor}33`,
        background: event.lightBg || PALETTE.cream,
      }}
    >
      <div style={{ height: "380px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.cardImage}
          alt={event.title}
          style={{ width: "90%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", margin: "0 auto" }}
        />
      </div>
      <div style={{ padding: "12px 16px" }}>{detailsContent(event.accentColor)}</div>
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showRSVP, setShowRSVP] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [tabBatch, setTabBatch] = useState(0); // 0 = first 3 tabs, 1 = last 3 tabs
  const touchStart = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const current = events[activeIdx];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50 && activeIdx < events.length - 1) {
      const next = activeIdx + 1;
      setActiveIdx(next);
      setTabBatch(next >= 3 ? 1 : 0);
    }
    if (diff < -50 && activeIdx > 0) {
      const prev = activeIdx - 1;
      setActiveIdx(prev);
      setTabBatch(prev < 3 ? 0 : 1);
    }
    touchStart.current = null;
  };

  const handleOpen = () => {
    setOpened(true);
    setMusicPlaying(true);
    audioRef.current?.play().catch(() => {});
  };

  const toggleMusic = () => {
    setMusicPlaying((p) => {
      const next = !p;
      if (next) audioRef.current?.play().catch(() => {});
      else audioRef.current?.pause();
      return next;
    });
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current?.pause();
      } else if (musicPlaying) {
        audioRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [musicPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop preload="auto" />
      {!opened ? (
        <>
        <style>{`
          *{margin:0;padding:0;box-sizing:border-box;}
          @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
          @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
          @keyframes petalFall{0%{transform:translateY(-10px) rotate(0deg);opacity:0}10%{opacity:.7}100%{transform:translateY(700px) rotate(360deg);opacity:0}}
          @supports not (height: 100dvh) { .cover-screen { min-height: 100vh !important; } }
          @media (max-width: 360px) {
            .cover-open-btn { padding: 14px 36px !important; font-size: 11px !important; }
          }
        `}</style>
        <div
          className="cover-screen"
          style={{
            minHeight: "100dvh", position: "relative",
            background: PALETTE.ivory,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            padding: "28px 20px calc(28px + env(safe-area-inset-bottom))",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "fixed", top: "-20px", left: `${5 + i * 8}%`, fontSize: `${12 + (i % 3) * 6}px`,
                animation: `petalFall ${6 + (i % 4)}s linear infinite`, animationDelay: `${i * 0.7}s`,
                zIndex: 3, pointerEvents: "none",
              }}
            >
              🌸
            </div>
          ))}

          <div
            style={{
              width: "100%", maxWidth: "440px", borderRadius: "24px", overflow: "hidden",
              boxShadow: "0 12px 40px rgba(122,46,46,0.25)", border: `1px solid ${PALETTE.gold}33`,
              zIndex: 2, animation: "fadeUp 1s ease forwards",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cover.jpg"
              alt="Manisha & Akshay"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{ zIndex: 2, textAlign: "center", marginTop: "22px", animation: "fadeUp 1s ease forwards" }}>
            <div
              style={{
                fontSize: "11px", letterSpacing: "3px", color: PALETTE.maroon, fontFamily: "var(--font-montserrat)", fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              AUGUST 16 – 23, 2026 · HYDERABAD
            </div>
            <button
              onClick={handleOpen}
              className="cover-open-btn"
              style={{
                background: `linear-gradient(135deg, ${PALETTE.gold}, #E8D5B5)`,
                border: "none", borderRadius: "50px", padding: "16px 48px",
                color: PALETTE.textDark, fontSize: "12px", fontWeight: 800, letterSpacing: "4px",
                fontFamily: "var(--font-montserrat)", cursor: "pointer",
                boxShadow: `0 4px 20px ${PALETTE.gold}66`, animation: "pulse 2.5s ease-in-out infinite",
              }}
            >
              OPEN INVITATION ✨
            </button>
          </div>
        </div>
        </>
      ) : (
        <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}
        input::placeholder,textarea::placeholder{color:rgba(61,40,23,.4);}
        input:focus,textarea:focus{border-color:rgba(61,40,23,.5)!important;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:#c9a961;border-radius:4px;}
      `}</style>
      <div style={{ minHeight: "100dvh", background: PALETTE.ivory, fontFamily: "var(--font-montserrat)" }}>
        <div style={{ height: "100svh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px",
              padding: "calc(10px + env(safe-area-inset-top)) 14px 10px", flex: "0 0 auto",
              background: `linear-gradient(180deg, ${PALETTE.cream} 0%, ${PALETTE.ivory} 100%)`,
              borderBottom: `1px solid ${PALETTE.gold}33`,
            }}
          >
            <div style={{ flex: "0 0 70px", display: "flex", justifyContent: "flex-start" }}>
              <MusicToggle playing={musicPlaying} onToggle={toggleMusic} accent={PALETTE.maroon} />
            </div>
            <div style={{ textAlign: "center", flex: "1 1 auto", minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-dancing)", fontSize: "20px", color: PALETTE.maroon }}>Manisha & Akshay</div>
              <div style={{ fontSize: "8px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.5, marginTop: "2px" }}>
                HYDERABAD · AUG 16–23
              </div>
              <div style={{ fontSize: "8px", letterSpacing: "2px", color: PALETTE.textDark, opacity: 0.5 }}>
                #AkManifested
              </div>
            </div>
            <div style={{ flex: "0 0 70px", display: "flex", justifyContent: "flex-end" }}>
              <RSVPButton
                accent={PALETTE.maroon}
                onPress={() => {
                  setShowRSVP(true);
                  setTimeout(() => {
                    const el = document.getElementById("countdown-section");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 12;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 100);
                }}
              />
            </div>
          </div>

          <div style={{ padding: "10px 16px 8px", maxWidth: "480px", margin: "0 auto", width: "100%", flex: "1 1 auto", display: "flex", flexDirection: "column", minHeight: 0, boxSizing: "border-box" }}>
            {(() => {
              const batch0 = [0, 1, 2];
              const batch1 = [3, 4, 5];
              const tabLabels = ["Engagement", "Mehndi", "Haldi", "Pellikuthuru", "Pelli", "Reception"];
              const currentBatch = tabBatch === 0 ? batch0 : batch1;
              const btnStyle = (active: number) => ({
                flexShrink: 0, padding: "5px 12px", borderRadius: "20px",
                border: `1px solid ${events[active].accentColor}${activeIdx === active ? "ff" : "55"}`,
                background: activeIdx === active ? events[active].accentColor : "rgba(122,46,46,0.05)",
                color: activeIdx === active ? "#fff" : PALETTE.textDark,
                fontSize: "9px", fontWeight: 700, letterSpacing: "1px", cursor: "pointer",
                transition: "all 0.3s",
              });
              const arrowStyle: React.CSSProperties = {
                flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%",
                background: PALETTE.gold, border: "none", color: "#fff",
                fontSize: "13px", fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              };
              return (
                <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "10px", justifyContent: "center", flex: "0 0 auto" }}>
                  {tabBatch === 1 && (
                    <button style={arrowStyle} onClick={() => setTabBatch(0)}>
                      ←
                    </button>
                  )}
                  {currentBatch.map((i) => (
                    <button key={i} onClick={() => setActiveIdx(i)} style={btnStyle(i)}>
                      {tabLabels[i].toUpperCase()}
                    </button>
                  ))}
                  {tabBatch === 0 && (
                    <button style={arrowStyle} onClick={() => setTabBatch(1)}>
                      →
                    </button>
                  )}
                </div>
              );
            })()}

            <div
              key={activeIdx}
              style={{ animation: "fadeUp 0.35s ease forwards", flex: "1 1 auto", minHeight: 0, marginBottom: "16px", overflow: "hidden", borderRadius: "24px" }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <EventCard event={current} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: "0 0 auto" }}>
              <button
                onClick={() => {
                  const prev = Math.max(0, activeIdx - 1);
                  setActiveIdx(prev);
                  setTabBatch(prev < 3 ? 0 : 1);
                }}
                disabled={activeIdx === 0}
                style={{
                  padding: "5px 12px", borderRadius: "10px", border: `1px solid ${current.accentColor}66`,
                  background: "rgba(122,46,46,0.05)", color: activeIdx === 0 ? "#ccc" : current.accentColor,
                  fontSize: "9px", fontWeight: 700, letterSpacing: "2px", cursor: activeIdx === 0 ? "not-allowed" : "pointer",
                }}
              >
                ← PREV
              </button>
              <div style={{ display: "flex", gap: "6px" }}>
                {events.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      width: i === activeIdx ? "20px" : "7px", height: "7px",
                      borderRadius: "3px", background: i === activeIdx ? current.accentColor : "#e0d0c0",
                      cursor: "pointer", transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  const next = Math.min(events.length - 1, activeIdx + 1);
                  setActiveIdx(next);
                  setTabBatch(next >= 3 ? 1 : 0);
                }}
                disabled={activeIdx === events.length - 1}
                style={{
                  padding: "5px 12px", borderRadius: "10px", border: `1px solid ${current.accentColor}66`,
                  background: "rgba(122,46,46,0.05)", color: activeIdx === events.length - 1 ? "#ccc" : current.accentColor,
                  fontSize: "9px", fontWeight: 700, letterSpacing: "2px", cursor: activeIdx === events.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        <div style={{ padding: "40px 16px 48px", maxWidth: "480px", margin: "0 auto" }}>
          <div id="countdown-section" style={{ background: PALETTE.cream, border: `1px solid ${PALETTE.gold}55`, borderRadius: "18px", padding: "20px 16px", marginBottom: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: PALETTE.maroon, marginBottom: "14px", fontWeight: 700 }}>
              COUNTDOWN TO THE BIG DAY
            </div>
            <CountdownTimer targetDate="2026-08-21T11:30:00" accent={PALETTE.maroon} />
          </div>

          <div id="rsvp-section" style={{ background: PALETTE.cream, border: `1px solid ${PALETTE.gold}55`, borderRadius: "18px", overflow: "hidden" }}>
            <button
              onClick={() => setShowRSVP(!showRSVP)}
              style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "2px", color: PALETTE.maroon }}>SUBMIT RSVP</div>
                <div style={{ fontSize: "11px", color: PALETTE.textDark, opacity: 0.85, marginTop: "2px" }}>Let the couple know you&apos;re coming!</div>
              </div>
              <span style={{ color: PALETTE.maroon, fontSize: "16px" }}>{showRSVP ? "▲" : "▼"}</span>
            </button>
            {showRSVP && (
              <div style={{ padding: "0 20px 20px" }}>
                <div style={{ height: "1px", background: `${PALETTE.gold}55`, marginBottom: "16px" }} />
                <RSVPForm accent={PALETTE.maroon} />
              </div>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <div style={{ fontFamily: "var(--font-dancing)", fontSize: "20px", color: PALETTE.maroon }}>With love & joy ✨</div>
            <div style={{ fontSize: "9px", color: PALETTE.textDark, opacity: 0.4, letterSpacing: "3px", marginTop: "6px" }}>#AKMANIFESTED</div>
          </div>
        </div>
      </div>
        </>
      )}
    </>
  );
}
