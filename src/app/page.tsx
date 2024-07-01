"use client";
import Navbar from "@/components/common/navbar";
import BannerSlider from "@/components/bannerSlider";
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
      <ManageGrid />
    </>
  );
}

const ManageGrid = () => {
  return (
    <section className="pt-6 flex items-center justify-between transition-all">
      <div className="hidden md:block">
        <Image
          height={300}
          width={150}
          src="https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/Splash_left"
          alt="Splash Left Image"
        />
      </div>
      <MaxWidthWrapper>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl ">
            {" "}
            Digital Marketing Services For The Most Ambitious Enterprises
          </h2>
          <div className="relative py-6">
            <div className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
            <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
            <Icons.NimbusMarketing className="text-white h-14 w-14 bg-[#8EC640] p-2 rounded-full" />
          </div>

          <p className="text-xl md:text-2xl max-w-[900px]">
            We work with businesses that want to engage better, dominate SERPs,
            and achieve more than just website traffic.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className=" hidden md:block">
        <Image
          height={300}
          width={150}
          src="/splashRight-.webp"
          alt="Splash Left Image"
        />
      </div>
    </section>
  );
};
