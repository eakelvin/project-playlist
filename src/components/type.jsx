import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <TypeAnimation
      sequence={["THIS IS KELVIN AKABA", 1000, "FULLSTACK DEVELOPER", 1000]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        color: "white",
        fontWeight: "900",
      }}
      repeat={Infinity}
    />
  );
};

export default Type;
