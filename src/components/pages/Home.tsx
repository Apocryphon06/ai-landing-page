import React from "react";
import Header from "../Header";

import hero from "../../assets/images/hero.svg";
import skull from "../../assets/images/skull.svg";
import buddy from "../../assets/images/buddy.svg";
import plan from "../../assets/images/plan.svg";

import Button from "../common/Button";

function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}

      <div className="flex lg:flex-row flex-col justify-center items-center gap-[150px] p-5 lg:h-[620px]">
        <p className="text-white font-poppinsBold text-4xl tracking-widest">
          Hexa
        </p>
        <div className="flex lg:flex-row flex-col items-center gap-[40px]">
          <img src={hero} alt={hero} />
          <p className="lg:w-[290px] h-[270px] text-white font-poppinsBold lg:text-4xl text-3xl leading-relaxed">
            Pushing the boundaries of personal assistant technologies
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex lg:flex-row flex-col items-center mt-[50px]">
        <div className="bg-retroPink lg:w-[50vw] w-screen h-[620px] flex justify-center items-center">
          <img src={skull} alt={skull} />
        </div>

        <div className="bg-white lg:w-[50vw] w-screen h-[620px] flex justify-center items-center text-black">
          <div className="flex flex-col p-5 w-[638px]">
            <p className=" font-poppinsBold lg:text-5xl text-3xl lg:w-[638px] h-[142px]">
              Sometimes, just saying is not enough!
            </p>
            <p className="font-poppinsRegular lg:text-4xl text-3xl lg:w-[605px] lg:h-[188px] leading-relaxed lg:py-0">
              Keeping accessbility of modern technologies in mind, we
              intuitively crafted your personal assistant.
            </p>
            <p className=" font-poppinsBold lg:text-4xl text-3xl hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex lg:flex-row flex-col-reverse items-center ">
        <div className="bg-white lg:w-[50vw] w-screen h-[620px] flex justify-center items-center text-black">
          <div className="flex flex-col p-5 w-[638px]">
            <p className=" font-poppinsBold lg:text-5xl text-3xl lg:w-[638px] h-[142px]">
              Breaking limitations of what your buddy can do!
            </p>
            <p className="font-poppinsRegular lg:text-4xl text-3xl lg:w-[605px] h-[188px] leading-relaxed">
              Feeling too lazy to open calculator? We got you covered! Open apps
              on your desktop quickly with your voice or hand gesture.
            </p>
          </div>
        </div>
        <div className="bg-retroPink lg:w-[50vw] w-screen h-[620px] flex justify-center items-center">
          <img src={buddy} alt={buddy} />
        </div>
      </div>

      <div className="lg:h-[620px] flex lg:flex-row flex-col-reverse justify-around items-center p-5 gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-white font-poppinsBold lg:text-4xl text-3xl">
            Meet your buddy now!
          </p>
          <Button width="lg:w-[298px] w-[200px] h-[70px] lg:h-[90px]" label="Download" />
        </div>

        <img src={plan} alt={plan} />
      </div>
    </div>
  );
}

export default Home;
