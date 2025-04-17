"use client";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Menu,
  CarFront as CarFrontIcon,
  CarTaxiFront as CarTaxiFrontIcon,
  Hotel as HotelIcon,
  MapPlus as MapPlusIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Voitures", href: "/", icon: CarFrontIcon },
    { name: "Hébergement", href: "/about", icon: HotelIcon },
    { name: "Sercuis", href: "/services", icon: MapPlusIcon },
    { name: "Taxi", href: "/services", icon: CarTaxiFrontIcon },
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  function menuHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className=" ">
        <div
          id=""
          className="flex sticky px-4 top-0 z-10 justify-between items-center  border-b-2">
          <div className="flex gap-4 items-center p-4">
            <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-xs" onClick={menuHandler}>
              <Menu className=" "/>
            </div>
            <Link href="/">
          <Image
            src="/holo.png"
            alt="logo"
            width={90}
            height={90}
            className="dark:hidden"
          />
          <Image
            src="/wiholo.png"
            alt="logo"
            width={90}
            height={90}
            className="hidden dark:block"
          />
        </Link>
          </div>
          <div className="flex gap-4 items-center p-4">
            <Heart />
            <Button variant={"outline"} className="border-2 cursor-pointer">
              Sign Up
            </Button>
          </div>
        </div>
        <div 
          className={isOpen ? "fixed inset-0 bg-black/75 transition-opacity" : ""}
          onClick={menuHandler}></div>
        <div
          className={
            isOpen
              ? "fixed left-0 top-17 md:w-[17%] sm:w-screen w-full h-screen border-r mt-3 p-5 ease-in duration-400"
              : "fixed left-[-100%] h-screen top-15 p-10 ease-in duration-400"
          }>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div
                key={index}
                className="flex flex-col gap-4 items-left p-3 rounded-sm hover:bg-gray-200">
                <div
                  key={index}
                  className="cursor-pointer flex gap-2 items-left">
                  <link.icon className="w-5 h-5"/>
                  <p className="hover:font-semibold text-sm">{link.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
