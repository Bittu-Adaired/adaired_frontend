import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import { Icons } from "@/components/Icons";

type Props = {};

const ImageWithDetailedFeatureDescription = (props: Props) => {
  return (
    <section className="flex gap-x-10">
      <div>
        <Image
          src={`https://res.cloudinary.com/adaired/image/upload/v1720685105/ImageWithDetailedFeatureDescriptionDummy.png`}
          alt="Growth Image"
          height={521}
          width={676}
          className=""
        />
      </div>
      <div className="flex-1 ">
        <h2 className="text-[1.688rem] md:text-4xl py-2 font-nunito">
          Innovative Web Solutions That Drive Your Business Forward
        </h2>
        <p className="py-2 text-base sm:text-lg">
          At Adaired, we know how to combine technical expertise with creative
          flair to create visually stunning and technically robust websites and
          applications. We employ advanced technologies such as HTML, CSS,
          JavaScript, SQL, and popular frameworks such as React and Laravel. 
        </p>
        <ul className="text-left grid gap-3 sm:gap-0 sm:grid-cols-2 py-2">
          <li className="flex items-center gap-1 border p-2 sm:border-none">
            <Icons.PinkArrowMarker className="text-[#BC1D8D]" /> Comprehensive
            Services
          </li>
          <li className="flex items-center gap-1 border p-2 sm:border-none">
            <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
            Industry Expertise
          </li>
          <li className="flex items-center gap-1 border p-2 sm:border-none">
            <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
            Client-Centric Approach
          </li>
          <li className="flex items-center gap-1 border p-2 sm:border-none">
            <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
            Tailored Solutions
          </li>
        </ul>
        <p className="py-2 text-base sm:text-lg">
          We also use version control systems like Git and write clean, modular,
          and maintainable code that adheres to industry standards. Connect with
          us today to explore our services and elevate your online success.
        </p>
        <Button
          title="View More"
          className="bg-white text-black mt-5"
          svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
          type="button"
          navigateTo="/about"
        />
      </div>
    </section>
  );
};

export default ImageWithDetailedFeatureDescription;
