"use client";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CgMenuMotion } from "react-icons/cg";
import styled from "styled-components";
import CompanyName from "./logo";
import React from "react";

export function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SideBarItem className="relative grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <CgMenuMotion size={20} color="white" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#0c0e13] text-white ">
          <SheetHeader>
            <SheetTitle className="mt-5 flex flex-row items-center justify-center mb-3">
              <CompanyName />
            </SheetTitle>
            <SheetDescription className="w-full flex flex-col justify-center items-center">
              <span className="text-lg mb-3 w-[90%] text-center">
                A Better Way To Learn, <br />
              </span>
              <div className=" flex flex-col gap-4 items-start justify-start w-full">
                <span className="flex flex-row item center border px-6 py-3 rounded-md w-full">
                  Home{" "}
                </span>
                <span className="flex flex-row item center border px-6 py-3 rounded-md w-full">
                  Quick Play
                </span>
                <span className="flex flex-row item center border px-6 py-3 rounded-md w-full">
                  Check High Score
                </span>
              </div>
              <span className="text-lg mb-3 w-[90%] text-center mt-10"></span>
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Our Quiz Subject</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  Math
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    English
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Computer Science
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </SheetDescription>
          </SheetHeader>

          <SheetFooter className="absolute bottom-2 flex flex-row items-center justify-center">
            <SheetClose asChild>
              <Button type="submit" className="text-gold bg-yellow-600">
                Subscribe to Newsletter
              </Button>
            </SheetClose>
            <div className="flex flex-row p-1 items-center justify-start gap-0 w-full">
              <FaXTwitter size={35} className="cursor-pointer p-2 " />
              <SlSocialInstagram
                size={35}
                className="cursor-pointer p-2 text-indigo-600	"
              />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </SideBarItem>
  );
}

const SideBarItem = styled.div`
  display: none;
  @media screen and (max-width: 813px) {
    display: flex;
  }
`;
