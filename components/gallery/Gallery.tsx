"use client";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className={"flex flex-col-reverse"}>
      <div className="mx-autp mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={"relative aspect-square w-full"}>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div>
              <Image
                fill
                src={image.url}
                alt={image.url}
                className="object-cover object-center rounded-md"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
