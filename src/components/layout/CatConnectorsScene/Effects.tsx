import { EffectComposer, DotScreen } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const Effects = () => {
  // const { angle, scale } = useControls({
  //   angle: {
  //     value: 0.5,
  //     min: 0,
  //     max: 1,
  //     step: 0.05,
  //   },
  //   scale: {
  //     value: 0.5,
  //     min: 0,
  //     max: 10,
  //     step: 0.05,
  //   },
  // });

  return (
    <EffectComposer>
      <DotScreen
        blendFunction={BlendFunction.SUBTRACT} // blend mode
        angle={Math.PI * 0.5} // angle of the dot pattern
        scale={0.85} // scale of the dot pattern
      />
    </EffectComposer>
  );
};

export default Effects;
