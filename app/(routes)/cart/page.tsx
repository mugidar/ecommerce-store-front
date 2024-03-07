"use client";
import CartItem from "@/components/CartItem/CartItem";
import Container from "@/components/ui/container";
import useCart from "@/hooks/user-cart";
import React, { useEffect, useState } from "react";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const cart = useCart();
  console.log(
    cart.items.reduce((acc, cur) => {
      return acc + Number(cur.price);
    }, 0)
  );
  console.log(cart);

  return (
    <div>
      <Container>
        <div className="flex px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {!cart.items.length && <h1>No items</h1>}
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
          </div>

          <Summary totalPrice={cart.totalPrice} />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
