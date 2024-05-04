import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import opworxTeamPicture from "../../public/assets/images/our-team.jpg";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className="w-[100vw] h-[40vh] bg-[url('/assets/images/servicesShowcase.jpg')] bg-[position:50%_40%] bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-[40%]">
          <h1 className="text-center text-white brightness-75 text-[85px] md:text-[100px] lg:text-[125px]">
            About Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-[10%] items-center lg:mx-[12.5%]">
      
      </div>
      <Footer />
    </div>
  );
}
