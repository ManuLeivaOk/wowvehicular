"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Page = () => {
  const { back } = useRouter();
  const images = [
    "/trabajos/ram1.webp",
    "/trabajos/ram2.webp",
    "/trabajos/ram3.webp",
    "/trabajos/ram4.webp",
  ];

  return (
    <div className="py-8 px-3 md:px-8">
      <Button
        label="Atrás"
        icon="pi pi-arrow-left"
        onClick={back}
        className="p-button-success mb-8"
      />

      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => (
              <Image
                key={i}
                src={image}
                height={10}
                width={10}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Page;
