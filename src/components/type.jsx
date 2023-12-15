import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'THIS IS KELVIN AKABA',
        1000,
        'FULL-STACK DEVELOPER',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ 
            fontSize: '2em', 
            display: 'inline-block', 
            color: 'black', 
            fontWeight: '800' 
        }}
      repeat={Infinity}
    />
  );
};

export default Type