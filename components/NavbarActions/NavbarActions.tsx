"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/user-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center gap-2"
      >
        <ShoppingBag size={20} />
        <span>{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
