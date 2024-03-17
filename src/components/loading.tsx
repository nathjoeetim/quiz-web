"use client";
import loader from "@/app/assets/handLoader.json";
import MotionImage from "./hooks/motionImage";

export default function HandLoader() {
  return (
    <div className="flex flex-col gap-4 h-[100vh] bg-gray-200 items-center justify-center w-full p-20">
      <MotionImage imageJson={loader} loop={true} height="100vh" width="100%" />
    </div>
  );
}
