"use client";
import { Color, Size } from "@/types";
import React, { useState } from "react";
import Button from "../ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "../ui/icon-button";
import Filter from "@/app/(routes)/category/[categoryId]/components/filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="inset-0 fixed bg-black/70"></div>

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl "
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X onClick={onClose} />} />
            </div>
            <div className="p-4">
              {" "}
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileFilters;
