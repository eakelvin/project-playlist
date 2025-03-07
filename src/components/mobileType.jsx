import { TypeAnimation } from "react-type-animation";

const MobileType = () => {
  return (
    <TypeAnimation
      sequence={["THIS IS KELVIN AKABA", 1000, "FULLSTACK DEVELOPER", 1000]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1.5em",
        display: "inline-block",
        color: "white",
        fontWeight: "900",
      }}
      repeat={Infinity}
    />
  );
};

export default MobileType;
