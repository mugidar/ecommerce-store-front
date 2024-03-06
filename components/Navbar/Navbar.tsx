import React from "react";
import Container from "../ui/container";
import Link from "next/link";
import MainNav from "../MainNav/MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "../NavbarActions/NavbarActions";

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 ms:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex ml-5  lg:ml-0 gap-x-2">
            <h1 className="font-bold  text-2xl uppercase">Store</h1>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
