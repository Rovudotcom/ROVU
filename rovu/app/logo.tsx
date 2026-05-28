export function RovuLogo({ width = 120, height = 38 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rovu">
      <defs>
        <linearGradient id="rleg" x1="12" y1="28" x2="30" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
          <stop offset="100%" stopColor="#5B4FE8"/>
        </linearGradient>
      </defs>
      <path d="M12 44 L12 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <path d="M12 10 Q30 10 30 19 Q30 28 12 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 28 L30 44" stroke="url(#rleg)" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="52" cy="27" rx="11" ry="17" stroke="#fff" strokeWidth="3" fill="none"/>
      <path d="M80 10 L91 44" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <path d="M91 44 L102 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <path d="M117 10 L117 34 Q117 44 127 44 Q137 44 137 34 L137 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="151" cy="44" r="4" fill="#5B4FE8"/>
    </svg>
  )
}

export function RovuMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rovu">
      <defs>
        <linearGradient id="rmark" x1="8" y1="30" x2="26" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
          <stop offset="100%" stopColor="#5B4FE8"/>
        </linearGradient>
      </defs>
      <path d="M8 44 L8 10" stroke="#fff" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M8 10 Q24 10 24 21 Q24 30 8 30" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M8 30 L26 44" stroke="url(#rmark)" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  )
}
