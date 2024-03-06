"use client";
import Button from "@/components/ui/button";
import { cn } from "@/libs/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import React from "react";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mt-5">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-5" />
      <div className="flex flex-wrap gap-2 w-full">
        {data.map((filter) => (
          <Button
            className={cn(
              "text-sm py-2 px-4 border-2 border-black ",
              selectedValue === filter.id
                ? "bg-black text-white"
                : "bg-transparent text-black"
            )}
            onClick={() => onClick(filter.id)}
            key={filter.id}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
