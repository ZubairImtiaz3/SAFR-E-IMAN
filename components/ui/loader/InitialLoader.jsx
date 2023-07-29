import dynamic from "next/dynamic";
import Image from "next/image";
const PropagateLoader = dynamic(
  () => import("react-spinners/PropagateLoader"),
  {
    ssr: false,
  }
);

import logoLoader from "@/public/assets/partials/loader.svg";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loaderContent">
        <Image
          className="w-[290px] sm:relative sm:right-[2rem] mb-9"
          src={logoLoader}
          alt="loader"
        />
        <PropagateLoader className="" color="#ceb041" />
      </div>
    </div>
  );
}
