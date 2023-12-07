"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToogle } from "@/src/theme/ThemeToogle";
import { z } from "zod";

const navbarProps = z.object({
  appName: z.string(),
  menuItems: z.array(
    z.object({
      name: z.string(),
      link: z.string(),
    })
  ),
});

type NavbarProps = z.infer<typeof navbarProps>;

const Navbar: React.FC<NavbarProps> = ({ appName, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap border-b p-6 bg-background">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            {appName}
          </span>
        </div>
        <div className="hidden lg:flex items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              <Button variant={"ghost"}>{item.name}</Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <ThemeToogle />
          <div className="block lg:hidden ml-4">
            <Button
              variant={"outline"}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 py-2 rounded"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`w-full block flex-grow lg:hidden ${isOpen ? "" : "hidden"}`}
      >
        <code className="text-sm flex justify-center">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link} className="block mt-14  mr-4">
              <Button variant={"ghost"}>{item.name}</Button>
            </Link>
          ))}
        </code>
      </div>
    </nav>
  );
};

export default Navbar;