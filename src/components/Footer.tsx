import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  // const socialMedia = [
  //   {
  //     id: 1,
  //     img: "/git.svg",
  //   },
  //   {
  //     id: 2,
  //     img: "/twit.svg",
  //   },
  //   {
  //     id: 3,
  //     img: "/link.svg",
  //   },
  // ];

  return (
    <footer className="w-full h-screen pt-20 mt-20 pb-10 px-40" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[48px]  text-center tracking-tighter">
          Ready to take <span className="text-sky-600">your</span> digital{" "}
          <br />
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jessemateus919@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Jesse Marques
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <FaGithub className="h-5 w-5" />
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <FaEnvelope className="h-5 w-5" />
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <FaLinkedin className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
