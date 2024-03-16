import React from "react";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data)
    return (
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div
          className="rounded-xl  relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg)`,
          }}
        ></div>
      </div>
    );

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl  relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${data?.imgUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-10">
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
