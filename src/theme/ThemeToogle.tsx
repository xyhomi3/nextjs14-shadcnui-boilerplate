"use client";

import { Moon, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import { useTheme } from "next-themes";

export const ThemeToogle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border border-gray-900 dark:border-gray-100 absolute right-5 top-5"
    >
      {theme === "dark" ? <SunMedium size={20} /> : <Moon size={20} />}
    </Button>
  );
};
