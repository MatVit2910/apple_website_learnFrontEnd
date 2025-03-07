import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSz,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault={true} position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={null}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
