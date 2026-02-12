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
            result="noise1"
            seed={2}
            />

            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">

              <animate
              attributeName="dx"
              values="490; 0"
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
            seed={2}
            />

            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">

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
        background: `linear-gradient(-30deg, rgba(221, 132, 72, 0.4), transparent, rgba(221, 132, 72, 0.4)), linear-gradient(to bottom, #2e2e2e, #2e2e2e)`,
      }}
      >
        
        <div className="relative">
          
          <div className="border-2 border-[rgba(255,0,0,0.5)] rounded-3xl pr-1 pb-1">
            
            <div
            className="absolute inset-0 rounded-3xl border-2 border-[#ff0000] -mt-1 -ml-1 pointer-events-none"
            style={{ filter: 'url(#turbulent-displace)' }}
            />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
              {children}
            </div>

          </div>

          <div
          className="absolute inset-0 border-2 border-[rgba(255,0,0,0.5)] rounded-3xl pointer-events-none"
          style={{ filter: 'blur(1px)' }}
          />

          <div
          className="absolute inset-0 border-2 border-[#ff0000] rounded-3xl pointer-events-none"
          style={{ filter: 'blur(4px)' }}
          />

        </div>

        <div
        className="absolute inset-0 rounded-3xl opacity-100 mix-blend-overlay scale-110 pointer-events-none"
        style={{
          filter: 'blur(16px)',
          background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
        }}
        />

        <div
        className="absolute inset-0 rounded-3xl opacity-50 mix-blend-overlay scale-110 pointer-events-none"
        style={{
          filter: 'blur(16px)',
          background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
        }}
        />

        <div
        className="absolute inset-0 rounded-3xl -z-10 scale-110 opacity-30 pointer-events-none"
        style={{
          filter: 'blur(32px)',
          background: 'linear-gradient(-30deg, #ff0000, transparent, #ff0000)',
        }}
        />
        
      </div>
    </div>
  );
};

export default ElectricCard;