import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      // fullScreen: {
      //   enable: false,
      // },
      // background: {
      //   color: {
      //     // value: "#0d47a1",
      //     value: "#191970"
      //   },
      // },
      // fpsLimit: 120,
      // interactivity: {
      //   events: {
      //     onClick: {
      //       enable: true,
      //       mode: "push",
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: "repulse",
      //     },
      //   },
      //   modes: {
      //     push: {
      //       quantity: 4,
      //     },
      //     repulse: {
      //       distance: 200,
      //       duration: 0.4,
      //     },
      //   },
      // },
      // particles: {
      //   color: {
      //     value: "#ffffff",
      //   },
      //   links: {
      //     color: "#ffffff",
      //     distance: 150,
      //     enable: true,
      //     opacity: 0.5,
      //     width: 1,
      //   },
      //   move: {
      //     direction: "none",
      //     enable: true,
      //     outModes: {
      //       default: "bounce",
      //     },
      //     random: false,
      //     speed: 6,
      //     straight: false,
      //   },
      //   number: {
      //     density: {
      //       enable: true,
      //     },
      //     value: 80,
      //   },
      //   opacity: {
      //     value: { min: 0.3, max: 1 }
      //   },
      //   shape: {
      //     type: ["circle", "square", "triangle", "polygon"],
      //   },
      //   options: {
			// 		polygon: [
      //         { sides: 5 },
      //         { sides: 6 },
      //         { sides: 8 }
      //       ]
      //     },
      //   size: {
      //     value: { min: 1, max: 5 },
      //   },
      // },
      // detectRetina: true,

      fullScreen: {
        enable: false
      },
      particles: {
        links: {
          enable: true,
          color: "#191970"
        },
        move: {
          enable: true
        },
        number: {
          value: 50
        },
        opacity: {
          value: { min: 0.3, max: 1 }
        },
        shape: {
          type: ["circle", "square", "triangle", "polygon"],
          options: {
            polygon: [
              {
                sides: 5
              },
              {
                sides: 6
              },
              {
                sides: 8
              }
            ]
          }
        },
        
        size: {
          value: { min: 1, max: 3 }
        }
      }
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        // style={{ width: '500px', height: '500px' }}
      />
    );
  }

  return <></>;
};


export default Particle