import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-85 transition items-center gap-x-1 hidden md:flex  ">
        <Image
          className="rounded-full"
          src={logo}
          alt="Logo "
          height={38}
          width={38}
        />
        <p className="text-lg text-neutral-700 pb-1 "> TaskMaster</p>
      </div>
    </Link>
  );
};
