"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { H2, dataNavbar } from "@/components";

export function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive((prev) => !prev);
  };

  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setHidden(currentScrollPos > prevScrollPos && currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        className={`fixed z-[110] h-[82px] w-[100%] transform rounded-b-[8px] bg-primary text-center font-jakarta duration-[2000ms] ${hidden ? "-top-full" : "top-0"}`}
      >
        <div className="relative flex h-full flex-row items-center justify-between rounded-b-[8px] px-5 shadow-md">
          <Link href="/">
            <Image
              src="/logo-pakis-text.png"
              width={150}
              height={100}
              alt=""
              className="relative items-center"
            />
          </Link>
          <div className="relative z-40 hidden flex-row items-center justify-center gap-x-5 text-xl text-secondary lg:flex lg:pr-20">
            {dataNavbar.map(({ title, href }) => {
              return (
                <>
                  <a href={href} key={title}>
                    <p className="duration-300 hover:cursor-pointer hover:font-bold hover:underline hover:underline-offset-8">
                      {title}
                    </p>
                  </a>
                </>
              );
            })}
          </div>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
            className="lg:hidden"
          >
            <rect
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[10%] translate-y-[0%] rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="16"
              width="40"
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[100%] duration-300"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="32"
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              className={
                active
                  ? "translate-x-[-50%] translate-y-[25%] -rotate-45 duration-300"
                  : "rotate-0 duration-300"
              }
            />
          </svg>
        </div>
      </div>

      <div
        className={`fixed top-0 z-[110] flex h-screen w-screen flex-col items-start justify-start gap-x-5 gap-y-[50px] overflow-hidden bg-primary pt-24 font-jakarta text-xl text-secondary duration-1000 lg:hidden ${
          active ? "max-w-[75vw]" : "max-w-0"
        } ${hidden ? "-left-full" : "-left-0"}`}
      >
        {dataNavbar.map(({ title, href }) => {
          return (
            <>
              <a href={href} key={title}>
                <H2 className="whitespace-nowrap pl-[50px] duration-300 hover:cursor-pointer hover:font-bold">
                  {title}
                </H2>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}
