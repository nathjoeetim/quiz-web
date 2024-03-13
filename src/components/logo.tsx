"use client";

import { useRouter } from "next/navigation";

function CompanyName() {
  const router = useRouter();
  return (
    <div
      className="flex flex-row items-center justify-start gap-0 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <h4 className="flex flex-row gap-1 items-center text-white font-bold text-lg w-full">
        Mi-Ni
        <span className="flex items-center text-slate-400 font-bold">Quiz</span>
      </h4>
    </div>
  );
}

export default CompanyName;
