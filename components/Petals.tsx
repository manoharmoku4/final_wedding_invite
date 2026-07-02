const PETALS = [
  { left: "4%", duration: "9s", delay: "0s", size: "1.1rem" },
  { left: "14%", duration: "11s", delay: "1.5s", size: "1.4rem" },
  { left: "24%", duration: "8s", delay: "3s", size: "1rem" },
  { left: "34%", duration: "13s", delay: "0.5s", size: "1.5rem" },
  { left: "44%", duration: "10s", delay: "2.2s", size: "1.2rem" },
  { left: "54%", duration: "12s", delay: "4s", size: "1.3rem" },
  { left: "64%", duration: "9.5s", delay: "1s", size: "1.1rem" },
  { left: "74%", duration: "11.5s", delay: "3.5s", size: "1.4rem" },
  { left: "84%", duration: "8.5s", delay: "2.8s", size: "1rem" },
  { left: "92%", duration: "10.5s", delay: "0.8s", size: "1.3rem" },
];

export default function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: `${p.duration}, ${p.duration}`,
            animationDelay: `${p.delay}, ${p.delay}`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
