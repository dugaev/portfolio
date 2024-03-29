"use client";
import React from "react";
import Image from "next/image";
import image from "../../public/images/my.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full md:h-60 md:w-60 lg:h-60 lg:w-60 z-0 blur-3xl absolute top-[490px] left-[40px] transform -translate-x-1/2 -translate-1/2"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl lg:text-6xl  sm:text-5xl font-extrabold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-600">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Oleg", 1000, "Front-End Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md:text-[15px] lg:text-xl mb-6">
            Hi everyone ✌🏼 <br />
            My name is Oleg and I&apos;m looking for a job. I love to push
            myself and I&apos;m goal oriented. Also, I love learning and
            creating new processes for construction.
          </p>
          <div className="mb-[50px]">
            <Link
              href={"#email"}
              className="w-auto py-3 rounded-full px-10 ml-[15px] mr-4 bg-gradient-to-br from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 hover:bg-slate-200 text-white hover:scale-125 transition"
            >
              Hire Me
            </Link>
            <button className="px-1 py-1 rounded-full w-auto bg-gradient-to-br from-orange-500  to-yellow-600 hover:bg-slate-800 text-white mt-4 hover:scale-105 transition">
              <a
                href="/Oleg Dugaev.pdf"
                download="CV.pdf"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:h-[250px] md:w-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-[230px] w-[230px] md:w-[310px] md:h-[350px]"
              src={image}
              alt="hero-img"
              width={370}
              height={370}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
