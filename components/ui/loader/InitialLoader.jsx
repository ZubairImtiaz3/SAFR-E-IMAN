import dynamic from "next/dynamic";
import Image from "next/image";
const PropagateLoader = dynamic(
  () => import("react-spinners/PropagateLoader"),
  {
    ssr: false,
  }
);

import logoLoader from "@/public/assets/partials/logo2.svg";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loaderContent relative -top-16 sm:static">
        <Image
          className="w-[290px] sm:w-auto sm:relative sm:left-[-7%]"
          src={logoLoader}
          alt="loader"
        />
        <PropagateLoader color="#ceb041" />
      </div>
    </div>
  );
}
