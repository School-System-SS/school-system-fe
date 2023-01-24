
import "../styles/AboutUs.css";
import "../styles/kandingPage-design.css";
import Image from "next/image";

export default function AboutUS() {
  return (
    <section id="aboutUs" className="flex flex-col text-center item-center bg-main">
      <div className="relative">
      <h1 className="text-3xl text-white">Mission & Vision</h1>
      <div className="my-3 w-28 h-1 div-color-design missionLine"></div>
      </div>

      <div className="px-96">
        <p className="text-white font-light text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
}
