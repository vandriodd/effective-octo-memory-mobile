import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const LeftArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#15104D"
      d="M3.275 14.149v-.001l4.9-4.875a.938.938 0 0 1 1.322 1.329l-3.289 3.273h19.854a.937.937 0 1 1 0 1.875H6.209l3.29 3.273a.937.937 0 1 1-1.324 1.329l-4.898-4.875h-.001a.938.938 0 0 1 0-1.328Z"
    />
  </Svg>
);

export const ThreeDots = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#15104D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM11 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
    />
  </Svg>
);

export const ChevronRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#64618A"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.31.81 22 11.5 11.31 22.19"
    />
  </Svg>
);

export const Add = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M15.5 10.25h-5.25v5.25h-1.5v-5.25H3.5v-1.5h5.25V3.5h1.5v5.25h5.25v1.5Z"
    />
  </Svg>
);
