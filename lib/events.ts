export type EventItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  mapQuery: string | null;
  dresscodeHer: string;
  dresscodeHim: string;
  dresscodeNote?: string;
  image: string;
  accent: string;
  bg: string;
};

export const events: EventItem[] = [
  {
    id: "engagement",
    name: "Engagement",
    date: "Sunday, August 16, 2026",
    time: "10:30 AM",
    venue: "Moku Home, Hyderabad",
    mapQuery: "Moku Home Hyderabad",
    dresscodeHer: "Elegant pastels & florals",
    dresscodeHim: "Crisp formals or Indo-western",
    image: "/images/engagement.jpg",
    accent: "#D4A5A5",
    bg: "#FDF0F0",
  },
  {
    id: "mehndi",
    name: "Mehndi",
    date: "Wednesday, August 19, 2026",
    time: "4:00 PM",
    venue: "Moku Home, Hyderabad",
    mapQuery: "Moku Home Hyderabad",
    dresscodeHer: "Indo-western in pretty pastels",
    dresscodeHim: "Kurta in soft sage greens",
    image: "/images/mehndi.jpg",
    accent: "#9CAF88",
    bg: "#F0F5EE",
  },
  {
    id: "haldi",
    name: "Haldi",
    date: "Thursday, August 20, 2026",
    time: "10:00 AM",
    venue: "Moku Home, Hyderabad",
    mapQuery: "Moku Home Hyderabad",
    dresscodeHer: "Yellow indo-western",
    dresscodeHim: "Yellow kurtas",
    dresscodeNote: "Full yellow!",
    image: "/images/haldi.jpg",
    accent: "#E8B84B",
    bg: "#FDF8E8",
  },
  {
    id: "pellikuthuru",
    name: "Pellikuthuru",
    date: "Thursday, August 20, 2026",
    time: "4:00 PM",
    venue: "Moku Home, Hyderabad",
    mapQuery: "Moku Home Hyderabad",
    dresscodeHer: "Lehengas or half sarees",
    dresscodeHim: "Classic kurtas",
    image: "/images/pellikuthuru.jpg",
    accent: "#C76B4A",
    bg: "#FDF2EC",
  },
  {
    id: "shaadi",
    name: "Shaadi",
    date: "Friday, August 21, 2026",
    time: "11:30 AM",
    venue: "Rock Enclave Convention, 6-78, Aushapur, Telangana 501301",
    mapQuery: "Rock Enclave Convention, 6-78, Aushapur, Telangana 501301, India",
    dresscodeHer: "Gorgeous silk sarees",
    dresscodeHim: "Sherwani",
    image: "/images/shaadi.jpg",
    accent: "#7A2E2E",
    bg: "#FDF0F0",
  },
  {
    id: "reception",
    name: "Reception",
    date: "Sunday, August 23, 2026",
    time: "7:00 PM",
    venue: "Venue to be announced",
    mapQuery: null,
    dresscodeHer: "Glamorous gowns or sarees",
    dresscodeHim: "Suits or Indo-western",
    image: "/images/reception.jpg",
    accent: "#D4AF7A",
    bg: "#FAF5E8",
  },
];

export const SHAADI_DATETIME_IST = "2026-08-21T11:30:00+05:30";
