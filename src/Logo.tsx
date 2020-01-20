import * as React from "react";

export const Logo = () => {
  let points = [0, 55, 75, 35, 15, 50, 30, 45, 85, 90, 80, 125];
  let height = Math.max(...points);
  let step = 100 / (points.length - 1);
  let path = "m-10," + (height + 10) + " l0,-" + (points[0] + 10) + " l10,0 ";

  for (let i = 1; i < points.length; i++) {
    path += "l" + step + "," + (points[i - 1] - points[i]) + " ";
  }

  path += "l10," + (points[points.length - 1] + 10) + " z";

  return (
    <div
      style={{
        position: "relative",
        width: 300,
        height: 100,
        margin: 8
      }}
    >
      <svg
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 100 129"
        preserveAspectRatio="none"
      >
        <linearGradient id="linearGradient" x1="0" y1="0" x2="0" y2="100%">
          <stop className="test" stop-color="#5677fc" offset="0" />
          <stop className="test2" offset="1" />
        </linearGradient>
        <path
          stroke-width="2.2"
          vector-effect="non-scaling-stroke"
          className="test3"
          d={path}
        />
      </svg>
    </div>
  );
};
