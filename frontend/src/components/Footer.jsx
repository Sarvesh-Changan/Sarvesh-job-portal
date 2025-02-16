import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import LOGO from "../public/images/jobLogo.png";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  // State for social media links
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  return (
    <>
      <footer
        className="bg-[#111] border-b border-[rgb(133,133,133)]
                   px-[110px] py-[40px]
                   max-[1112px]:px-[40px] max-[1112px]:py-[40px]
                   max-[606px]:px-5 max-[606px]:py-5"
      >
        <div className="flex flex-col md:flex-row">
          {/* Logo Column */}
          <div
            className="flex flex-1 pr-5 justify-center items-center
                       max-[1112px]:w-1/2 max-[1112px]:mb-8
                       max-[606px]:w-full max-[606px]:p-0"
          >
            <Link to="/">
              <img
                src={LOGO}
                alt="logo"
                className="w-[140px] md:w-[120px] lg:w-[160px] max-[470px]:w-[80px] transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>

          {/* Right Side: Headings Row */}
          <div className="md:w-3/4">
            <div className="flex justify-around items-center text-white mb-8">
              <h4 className="font-bold tracking-wide text-[26px]">Support</h4>
              <h4 className="font-bold tracking-wide text-[26px]">
                Quick Links
              </h4>
              <h4 className="font-bold tracking-wide text-[26px]">Follow Us</h4>
            </div>
            {/* Content Row */}
            <div className="flex flex-col md:flex-row justify-around text-gray-300">
              {/* Support Column */}
              <div className="mb-6 md:mb-0 md:w-1/3">
                <ul className="flex flex-col gap-2.5">
                  <li className="overflow-hidden">
                    8th Floor, Omega Tower, Hitech City, Hyderabad, India
                  </li>
                  <li className="overflow-hidden">contact@jobmatrix.com</li>
                  <li className="overflow-hidden">+91 98765 43210</li>
                </ul>
              </div>
              {/* Quick Links Column */}
              <div className="mb-6 md:mb-0 md:w-1/3">
                <ul className="flex flex-col gap-2.5">
                  <li className="overflow-hidden">
                    <Link
                      to="/"
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      to="/jobs"
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                    >
                      JOBS
                    </Link>
                  </li>
                  {isAuthenticated && (
                    <li className="overflow-hidden">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              {/* Follow Us Column */}
              <div className="md:w-1/3">
                <ul className="flex flex-col gap-2.5 mb-4">
                  <li className="overflow-hidden">
                    <a
                      href="https://www.instagram.com/changansarvesh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                    >
                      <span className="flex">
                        <FaSquareInstagram />
                      </span>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href={'https://github.com/Sarvesh-Changan' || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                    >
                      <span className="flex">
                      <SiGithub />
                      </span>
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="https://www.linkedin.com/in/sarvesh-changan-600842311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-[#dfdf07] no-underline"
                    >
                      <span className="flex">
                        <FaLinkedin />
                      </span>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#111] flex justify-center text-center text-[#8080805c] font-light p-5">
        &copy; CopyRight 2024. All Rights Reserved By Sarvesh
      </div>
    </>
  );
};

export default Footer;
