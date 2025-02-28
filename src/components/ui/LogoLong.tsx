import * as React from 'react';

interface LogoLongProps {
  width?: number;
  height?: number;
  color?: string;
}

const LogoLong: React.FC<LogoLongProps> = ({ width, height, color = '#0b0637' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 816 216.00011"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1">
        <path
          id="path27-3-6-6-4-4"
          style={{
            fill: 'none',
            fillOpacity: 1,
            stroke: color,
            strokeWidth: 16,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'markers stroke fill',
          }}
          d="m 1020.4823,1280.3054 c 0,74.868 0,75 0,75 m 0,0 a 25.00002,25.00002 0 0 1 25,-25.0001 25.00002,25.00002 0 0 1 25.0001,25.0001 v 0 a 25.00002,25.00002 0 0 1 -25.0001,25 25.00002,25.00002 0 0 1 -0.8189,-0.02 m 100.819,-24.98 c 0,24.956 0,25 0,25 m -25.0001,0 a 25.00002,25.00002 0 0 1 -25,-25 25.00002,25.00002 0 0 1 25,-25.0001 25.00002,25.00002 0 0 1 25.0001,25.0001 m 74.9999,0 a 25.000019,25.000019 0 0 1 -25,25 25.000019,25.000019 0 0 1 -25,-25 25.000019,25.000019 0 0 1 25,-25 25.000019,25.000019 0 0 1 25,25 z m 75.0001,0 c 0,24.956 0,25 0,25 m -50.0001,-25 a 25.00002,25.00002 0 0 1 25,-25.0001 25.00002,25.00002 0 0 1 25.0001,25.0001 m -50.0001,0 c 0,24.956 0,25 0,25 m 100,49.9999 H 995.48232 a 25,25 0 0 1 -25,-25 v -150 a 25,25 0 0 1 25,-25 v 0 h 749.99998 a 25,25 0 0 1 25,25 v 150 a 25,25 0 0 1 -25,25 h -200 m -175,-24.9999 v 0 a 25.00002,25.00002 0 0 1 -25,25 m 25,-75 c 0,49.7266 0,50 0,50 m -25,-25 a 25.00002,25.00002 0 0 1 -25,-25 25.00002,25.00002 0 0 1 25,-25.0001 25.00002,25.00002 0 0 1 25,25.0001 m 25.0001,10e-5 c 0,-24.956 0,-25 0,-25 m 50.0001,25 a 25.00002,25.00002 0 0 1 -25.0001,25 25.00002,25.00002 0 0 1 -25,-25 m 50.0001,0 c 0,-24.956 0,-25 0,-25 m 24.9998,24.9999 c 0,-24.9561 0,-25.0001 0,-25.0001 m 50,25.0001 a 25.00002,25.00002 0 0 1 -25,25 25.00002,25.00002 0 0 1 -25,-25 m 50,50 v 0 a 25.00002,25.00002 0 0 1 -25,25 m -25,-25 m 50,-75.0001 c 0,74.5901 0,75.0001 0,75.0001 m 50,-50 c 0,-25.0001 0,-25.0001 0,-25.0001 m 25,25.0001 a 25.00002,25.00002 0 0 1 -25,25 25.00002,25.00002 0 0 1 -25,-25 25.00002,25.00002 0 0 1 25,-25.0001 m 100,25.0001 c 0,24.956 0,25 0,25 m -50,-25 a 25.00002,25.00002 0 0 1 25,-25.0001 25.00002,25.00002 0 0 1 25,25.0001 m -50,0 c 0,24.956 0,25 0,25"
          transform="translate(-962.48232,-1222.3053)"
        />
        <g
          id="g68-5-9"
          transform="translate(-962.48232,-1222.3053)"
          style={{ stroke: color, strokeWidth: 16, strokeDasharray: 'none', strokeOpacity: 1 }}
        >
          <g
            id="g67-4-3"
            style={{ stroke: color, strokeWidth: 16, strokeDasharray: 'none', strokeOpacity: 1 }}
          >
            <circle
              style={{
                fill: color,
                fillOpacity: 1,
                stroke: color,
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
                paintOrder: 'markers stroke fill',
              }}
              id="circle29-8-1-2-2-3-1"
              cx="1645.4823"
              cy="1355.3054"
              r="5"
            />
            <path
              id="path108-2-32-1-9"
              style={{
                fill: 'none',
                fillOpacity: 1,
                stroke: color,
                strokeWidth: 16,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
                paintOrder: 'markers stroke fill',
              }}
              d="m 1645.4823,1305.3054 a 50,50 0 0 1 50,50"
            />
            <path
              id="path109-2-1-2-8"
              style={{
                fill: 'none',
                fillOpacity: 0.106583,
                stroke: color,
                strokeWidth: 16,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
                paintOrder: 'markers stroke fill',
              }}
              d="m 1645.4823,1280.3054 a 75,75 0 0 1 75,75"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoLong;