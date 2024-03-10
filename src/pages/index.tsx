import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iconbadge from "../../public/assets/images/icon-image.jpeg";
import minoritybadge from "../../public/assets/images/minorityownedbusiness.png";
import laboratorybadge from "../../public/assets/images/laboratory-org.png";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        {/* Showcase */}
        <div className="w-[100vw] h-[110vh] bg-[url('/assets/images/background-opworx.jpg')] bg-[position:50%_40%] bg-no-repeat">
          <div className="w-full h-full backdrop-brightness-50">
            <div className="flex flex-col items-center h-[100%] justify-center lg:justify-start">
              <h1 className="text-[100px] md:text-[200px] lg:text-[300px] text-white brightness-[60%] mt-[-30%] lg:mt-[-50px]">
                Opworx
              </h1>
              <div className="text-white text-center">
                <p className="capitalize text-[30px]">
                  Freelance operations management
                </p>
                <p className="capitalize text-[25px]">Services & Consulting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-[35px] capitalize mt-[20px] mb-[30px]">
            Who We Are
          </p>

          <div className="px-[5%]">
            <Image
              src={showcaseImage}
              alt="Opworx"
              className="w-[500px] h-[300px] lg:w-[600px] lg:h-[400px]"
              width={400}
              height={300}
            />
          </div>

          <p className="lg:w-[50%] my-[30px] text-[22px] text-center px-[5%] ">
            We are a service oriented company that harnesses the power of
            technology and data analytics to ensure operational efficiency for
            our clients in different industries.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center py-[50px] px-[15%] lg:px-[5%] mt-5 bg-slate-500 ">
          <div className="border-b-[5px] lg:border-b-[0px] border-b-black lg:w-[30%] lg:border-r-[5px] lg:border-r-black lg:h-[300px] h-[400px] flex flex-col justify-around px-[20px]">
            <FontAwesomeIcon
              className={`text-black`}
              icon={faLightbulb}
              size="4x"
            />
            <p className="capitalize text-center font-semibold text-[18px]">
              A technology company as much as it is a Service company
            </p>
          </div>
          <div className="border-b-[5px] border-b-black lg:border-b-[0px] lg:w-[30%] lg:border-r-[5px] lg:border-r-black h-[400px] lg:h-[300px] flex flex-col justify-around px-[20px]">
            <FontAwesomeIcon
              className={`text-black`}
              icon={faBarChart}
              size="4x"
            />
            <p className="capitalize text-center font-semibold text-[18px]">
              Maximizing the benefits of technology and harnessing insights
              through data analytics.{" "}
            </p>
          </div>
          <div className="lg:w-[30%]  flex flex-col justify-around h-[400px] lg:h-[300px] px-[20px]">
            <FontAwesomeIcon
              className={`text-black`}
              icon={faLightbulb}
              size="4x"
            />
            <p className="capitalize text-center font-semibold text-[18px]">
              Consulting/Management Across a broad range of industries{" "}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col  lg:flex-row justify-between px-[20%] bg-blue-gray-300 lg:mt-[75px] items-center">
          <Image
            className="my-[40px]  w-[300px] h-[200px]"
            src={iconbadge}
            alt="Badge"
          />
          <Image
            className="my-[40px] w-[300px] h-[200px]"
            src={minoritybadge}
            alt="Badge"
          />
          <Image
            className="my-[40px] w-[250px] h-[225px]"
            src={laboratorybadge}
            alt="Badge"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
