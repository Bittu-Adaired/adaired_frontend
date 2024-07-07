import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 lg:h-20">
        <header className="relative bg-white flex items-center">
          <MaxWidthWrapper>
            <div className="relative">
              <div className="flex h-16 lg:h-20 items-center">
                <div>
                  <Link
                    href={"/"}
                    className="flex items-center w-28 md:w-36 sm:w-10/0 lg:w-10/12 xl:w-full"
                  >
                    <Image
                      src={`https://res.cloudinary.com/adaired/image/upload/v1718599616/Static%20Website%20Images/adaired_logo.png`}
                      alt="Brand Logo"
                      width={170}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <NavItems />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          {/* <MobileNav /> */}
        </header>
      </div>
    </>
  );
};

export default Navbar;
