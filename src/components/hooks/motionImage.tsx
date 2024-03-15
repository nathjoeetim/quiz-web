import { useEffect, useState } from "react";

let Lottie: any;
if (typeof window !== "undefined") {
  Lottie = require("lottie-react").default;
}

type MotionImageAlises = {
  loop: boolean;
  imageJson: any;
  height?: string;
  width?: string;
};

function MotionImage({ imageJson, loop, height, width }: MotionImageAlises) {
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (Lottie) {
      setLottieLoaded(true);
    }
  }, []);

  return (
    <div
      className={`${height ? `h-[${height}]` : "h-[200px]"} ${
        width ? `h-[${width}]` : "max-w-[200px] z-30 "
      }`}
    >
      {lottieLoaded && <Lottie animationData={imageJson} loop={loop} />}
    </div>
  );
}

export default MotionImage;
