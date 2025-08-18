import Svg, { Path, SvgProps } from "react-native-svg";

const GoogleIcon = ({ color = "currentColor", ...props }: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill={color}
    {...props}
  >
    <Path
      fill={color}
      d="M15.484 8.234c.084.452.13.925.13 1.418 0 3.856-2.58 6.598-6.479 6.598a6.746 6.746 0 0 1-6.75-6.75 6.748 6.748 0 0 1 6.75-6.75c1.823 0 3.346.67 4.514 1.76l-1.903 1.902v-.004c-.708-.675-1.607-1.021-2.61-1.021-2.228 0-4.038 1.881-4.038 4.109 0 2.227 1.81 4.113 4.037 4.113 2.02 0 3.396-1.156 3.679-2.742H9.135V8.234h6.35-.001Z"
    />
  </Svg>
);
export default GoogleIcon;
