import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 backdrop-blur-lg ">
      <div className="flex max-w-6xl justify-between mx-auto p-5">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <h2 className="text-2xl font-bold">Zameen & Afaa</h2>
      </div>
    </nav>
  );
};

export default Navbar;
