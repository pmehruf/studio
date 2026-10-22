import type { Poster } from "../content/work";

// Hero visual: tangled lines on the left resolve into a clean connected flow on the right.
// Colours and motion come from CSS (see .hero-art in styles.css).
export function HeroArt() {
  const tangled = [
    "M20 40 C80 10 90 120 150 70",
    "M20 100 C70 160 110 20 150 110",
    "M20 160 C90 90 70 200 150 150",
    "M20 220 C60 120 120 260 150 190",
    "M30 70 C120 150 40 180 150 40",
    "M25 130 C110 60 60 240 150 230",
  ];
  return (
    <svg className="hero-art" viewBox="0 0 540 290" role="img" aria-label="Illustration: tangled lines on the left resolve into a clear, connected workflow on the right">
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="art-tangle" fill="none" strokeWidth="1.6" strokeLinecap="round">
        {tangled.map((d) => <path key={d} d={d} />)}
      </g>
      {[40, 100, 160, 220].map((y, i) => <circle key={y} cx="20" cy={y} r="5" className="art-dot-muted" style={{ animationDelay: `${i * 0.4}s` }} />)}
      <path d="M150 130 L205 130" className="art-arrow" strokeWidth="2" fill="none" strokeDasharray="4 5" />
      <g className="art-flow">
        <rect x="215" y="100" width="84" height="60" rx="10" className="art-box" />
        <rect x="335" y="30" width="84" height="60" rx="10" className="art-box" />
        <rect x="335" y="170" width="84" height="60" rx="10" className="art-box" />
        <rect x="445" y="100" width="70" height="60" rx="10" className="art-box art-box-accent" filter="url(#glow)" />
        <path d="M299 130 C320 130 315 60 335 60 M299 130 C320 130 315 200 335 200 M419 60 C435 60 430 130 445 130 M419 200 C435 200 430 130 445 130" fill="none" className="art-line" strokeWidth="2" strokeLinecap="round" />
        <path d="M468 130l9 9 15-18" fill="none" className="art-check" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {[[257, 126, 30], [377, 56, 30], [377, 196, 30]].map(([x, y, w]) => (
          <g key={`${x}${y}`}>
            <rect x={x - 15} y={y} width={w} height="5" rx="2.5" className="art-text" />
            <rect x={x - 15} y={y + 12} width={w * 0.6} height="5" rx="2.5" className="art-text-light" />
          </g>
        ))}
      </g>
      <g className="art-label" fontSize="10">
        <text x="6" y="272">MESSY INPUT</text>
        <text x="232" y="190">PROCESS</text>
        <text x="454" y="186">DONE</text>
      </g>
    </svg>
  );
}

// Original sample posters for fictional events. Drawn in code; they are labelled "Concept" on the site.
export function PosterArt({ variant }: { variant: Poster["variant"] }) {
  const common = { viewBox: "0 0 300 380", "aria-hidden": true as const, focusable: false as const };
  switch (variant) {
    case "sale":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#F2B84B" />
          <circle cx="230" cy="90" r="120" fill="#E8903A" />
          <text x="24" y="120" fontSize="26" fontWeight="700" fill="#2B1D0E">SEASON</text>
          <text x="24" y="200" fontSize="92" fontWeight="800" fill="#2B1D0E">40%</text>
          <text x="24" y="250" fontSize="30" fontWeight="700" fill="#2B1D0E">OFF EVERYTHING</text>
          <rect x="24" y="300" width="150" height="44" rx="22" fill="#2B1D0E" />
          <text x="46" y="328" fontSize="16" fontWeight="600" fill="#F2B84B">Shop this week</text>
        </svg>
      );
    case "event":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#101010" />
          <rect x="24" y="24" width="252" height="2" fill="#f87d2e" />
          <text x="24" y="70" fontSize="14" letterSpacing="3" fill="#f87d2e">YOU ARE INVITED</text>
          <text x="24" y="140" fontSize="46" fontWeight="800" fill="#fff">Open</text>
          <text x="24" y="190" fontSize="46" fontWeight="800" fill="#fff">Studio</text>
          <text x="24" y="240" fontSize="46" fontWeight="800" fill="#f87d2e">Evening</text>
          {["SAT 14 MARCH", "6 – 9 PM", "THE OLD MILL"].map((t, i) => (
            <g key={t}>
              <rect x="24" y={272 + i * 30} width="6" height="20" fill="#f87d2e" />
              <text x="42" y={288 + i * 30} fontSize="15" fontWeight="600" fill="#fff">{t}</text>
            </g>
          ))}
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#EFE9DF" />
          <circle cx="60" cy="70" r="30" fill="#111111" />
          <text x="48" y="80" fontSize="28" fontWeight="800" fill="#f87d2e">3</text>
          <text x="24" y="150" fontSize="14" letterSpacing="2" fill="#ff6a3d">QUICK TIP</text>
          <text x="24" y="196" fontSize="32" fontWeight="800" fill="#111111">Write the</text>
          <text x="24" y="236" fontSize="32" fontWeight="800" fill="#111111">steps down</text>
          <text x="24" y="276" fontSize="32" fontWeight="800" fill="#111111">once.</text>
          <path d="M24 320h120" stroke="#ff6a3d" strokeWidth="4" />
          <text x="24" y="352" fontSize="13" fill="#666666">Sample social card</text>
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#FFFFFF" />
          <text x="24" y="50" fontSize="20" fontWeight="800" fill="#111111">How a request flows</text>
          {["Request", "Review", "Build", "Deliver"].map((t, i) => (
            <g key={t}>
              <circle cx="52" cy={110 + i * 78} r="22" fill={i === 3 ? "#111111" : "#E6E6DF"} />
              <text x="45" y={117 + i * 78} fontSize="18" fontWeight="800" fill={i === 3 ? "#fff" : "#101010"}>{i + 1}</text>
              {i < 3 && <path d={`M52 ${134 + i * 78} v32`} stroke="#BBBBB2" strokeWidth="3" />}
              <text x="90" y={106 + i * 78} fontSize="17" fontWeight="700" fill="#111111">{t}</text>
              <rect x="90" y={116 + i * 78} width={120 - i * 12} height="6" rx="3" fill="#E6E6DF" />
              <rect x="90" y={130 + i * 78} width={90 - i * 6} height="6" rx="3" fill="#EFEFE8" />
            </g>
          ))}
        </svg>
      );
    case "launch":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#141414" />
          <circle cx="150" cy="140" r="80" fill="none" stroke="#ff6a3d" strokeWidth="2" />
          <circle cx="150" cy="140" r="52" fill="#ff6a3d" />
          <path d="M150 90 L174 150 L150 138 L126 150 Z" fill="#141414" />
          <text x="150" y="274" fontSize="34" fontWeight="800" fill="#fff" textAnchor="middle">Introducing</text>
          <text x="150" y="308" fontSize="20" fill="#ffc2ae" textAnchor="middle">Something new, soon.</text>
          <rect x="95" y="326" width="110" height="30" rx="15" fill="#fff" />
          <text x="150" y="346" fontSize="13" fontWeight="700" fill="#141414" textAnchor="middle">Get notified</text>
        </svg>
      );
    case "workshop":
      return (
        <svg {...common}>
          <rect width="300" height="380" fill="#F4E4D7" />
          <rect x="0" y="0" width="300" height="12" fill="#C2410C" />
          <text x="24" y="70" fontSize="14" letterSpacing="3" fill="#C2410C">WORKSHOP</text>
          <text x="24" y="116" fontSize="40" fontWeight="800" fill="#2A1A10">Hands-on</text>
          <text x="24" y="158" fontSize="40" fontWeight="800" fill="#2A1A10">spreadsheets</text>
          {["Clean your data", "Build a tracker", "Automate a report"].map((t, i) => (
            <g key={t}>
              <rect x="24" y={196 + i * 40} width="252" height="32" rx="6" fill="#fff" />
              <text x="38" y={217 + i * 40} fontSize="15" fontWeight="600" fill="#2A1A10">{i + 1}. {t}</text>
            </g>
          ))}
          <text x="24" y="352" fontSize="14" fontWeight="700" fill="#C2410C">Save your seat →</text>
        </svg>
      );
  }
}
