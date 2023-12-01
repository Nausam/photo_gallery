"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

const Upload = () => {
  // const [imageId, setImageId] = useState("");
  const router = useRouter();

  return (
    <Button
      asChild
      className="px-20 py-8 text-lg font-bold bg-white border-2 text-black hover:bg-slate-900 hover:text-white  transition-all duration-300 ease-in-out"
    >
      <CldUploadButton
        uploadPreset="za_wedding"
        onUpload={(result) => {
          let res = result as UploadImage;
          // setImageId(res.info.public_id);
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
      />
    </Button>
  );
};

export default Upload;
