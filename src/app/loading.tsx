import loader from "@/app/assets/handLoader.json";
import MotionImage from "@/components/hooks/motionImage";

export default function Loader() {
  return (
    <div className="flex flex-col gap-4 h-[340px] bg-gray-200 items-center justify-center w-250px">
      <MotionImage
        imageJson={loader}
        loop={true}
        height="220px"
        width="200px"
      />
    </div>
  );
}
