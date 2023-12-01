import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Bottombar = () => {
  return (
    <section className="w-full fixed bottom-0">
      <div className="flex items-center justify-center max-w-sm mx-auto p-2 backdrop-blur-lg rounded-full">
        <div className="flex gap-3">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="gallary">
            <Button>Gallary</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bottombar;
