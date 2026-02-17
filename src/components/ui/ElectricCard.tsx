import type { ReactNode } from 'react';

interface ElectricCardProps {
  children: ReactNode;
  className?: string;
}

const ElectricCard = ({ children, className = '' }: ElectricCardProps) => {
  return (
    <div className={`relative ${className}`}>

      <svg className="absolute w-0 h-0">
        <defs>
          <filter
            id="turbulent-displace"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              result="noise1"
              seed={1}
            />

            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              result="noise2"
              seed={1}
            />

            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              result="noise3"
              seed={2}
            />

            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulage"
              baseFrequency="0.02"
              numOctaves={10}
              result="noise4"
              seed={2}
            />

            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative p-0.5 rounded-3xl"
        style={{
          background: `linear-gradient(-30deg, rgba(109, 40, 217, 0.3), transparent, rgba(124, 58, 237, 0.3)), linear-gradient(to bottom, #1a1a1a, #1a1a1a)`,
        }}
      >
        <div className="relative">
          
          <div className="border-2 border-[rgba(124,58,237,0.4)] rounded-3xl">
            
            <div
              className="absolute inset-0 rounded-3xl border-2 border-[#7c3aed] -mt-1 -ml-1 pointer-events-none"
              style={{ filter: 'url(#turbulent-displace)' }}
            />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
              {children}
            </div>
          </div>

          <div
            className="absolute inset-0 border-2 border-[rgba(124,58,237,0.3)] rounded-3xl pointer-events-none"
            style={{ filter: 'blur(1px)' }}
          />

          <div
            className="absolute inset-0 border-2 border-[#7c3aed] rounded-3xl pointer-events-none"
            style={{ filter: 'blur(3px)' }}
          />
        </div>

        <div
          className="absolute inset-0 rounded-3xl opacity-60 mix-blend-overlay scale-105 pointer-events-none"
          style={{
            filter: 'blur(10px)',
            background: 'linear-gradient(-30deg, rgba(255,255,255,0.4), transparent 25%, transparent 75%, rgba(255,255,255,0.4))',
          }}
        />

        <div
          className="absolute inset-0 rounded-3xl -z-10 scale-105 opacity-20 pointer-events-none"
          style={{
            filter: 'blur(20px)',
            background: 'linear-gradient(-30deg, #7c3aed, transparent 40%, transparent 60%, #6d28d9)',
          }}
        />
      </div>
    </div>
  );
};

export default ElectricCard;