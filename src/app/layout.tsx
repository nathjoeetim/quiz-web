"use client";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "aos/dist/aos.css";
import Aos from "aos";
import { cn } from "@/lib/utils";
import "./globals.css";
import { useEffect, useState } from "react";
import HandLoader from "../components/loading";
import CompanyName from "@/components/logo";
import styled from "styled-components";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import { NavigationMenuComponent } from "@/components/navigationa_menu";
import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/sideBar";
import Fotter from "@/components/fotter";
import { useRouter } from "next/navigation";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Mi-Ni Quiz",
  description: "Best IQ Game Globally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTopNavFixed, setIsTopNavFixed] = useState(false);
  const [isMounted, setIsMounted] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a threshold value based on your navbar height
      const threshold = 95; // Change this value according to your needs

      if (scrollY > threshold && !isTopNavFixed) {
        setIsTopNavFixed(true);
      } else if (scrollY <= threshold && isTopNavFixed) {
        setIsTopNavFixed(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTopNavFixed]);

  function onNavigateToGamePageFn() {
    router.push("quiz");
  }

  return (
    <html lang="en" className="custom-scrollbar">
      <Head>
        <title>Mi-Ni Quiz</title>
        <meta name="description" content="Best IQ Game Globally" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased custom-scrollbar font-serif ",
          fontSans.variable
        )}
      >
        <>
          {isMounted ? (
            <div className="flex flex-col bg-white w-full mx-auto">
              <div className="relative flex flex-col items-center justify-center max-w-[1440px] bg-[#0A0118] dark:bg-white mx-auto w-full  ">
                <div
                  className={`flex flex-row items-center justify-between z-50 w-full p-3 gap-5 ${
                    isTopNavFixed
                      ? "fixed top-0 w-full r-0 l-0 bg-transparent "
                      : ""
                  } `}
                  style={{
                    borderBottom: "1px solid white",
                    backdropFilter: isTopNavFixed ? "blur(5px)" : "none",
                  }}
                >
                  <SideBar />
                  <CompanyName />
                  <SideBarLastItem className="flex flex-row items-center justify-between gap-3">
                    <SideBarItem className="">
                      <NavigationMenuComponent />
                    </SideBarItem>
                    <TwoIconsContainer className="flex flex-row justify-end items-center gap-3">
                      <RiCustomerService2Fill
                        size={isTopNavFixed ? 30 : 20}
                        color={isTopNavFixed ? "white" : "white"}
                        className={`cursor-pointer ${
                          isTopNavFixed ? "p-1 rounded-md bg-yellow-600" : ""
                        }`}
                      />
                      <BsQuestionSquare
                        size={isTopNavFixed ? 30 : 20}
                        color={isTopNavFixed ? "white" : "white"}
                        className={`cursor-pointer ${
                          isTopNavFixed ? "p-1 rounded-md bg-yellow-600" : ""
                        }`}
                      />
                    </TwoIconsContainer>
                    <Button
                      className="text-gold bg-yellow-600"
                      onClick={onNavigateToGamePageFn}
                    >
                      Start Playing
                    </Button>
                  </SideBarLastItem>
                </div>
                {children}
                <Fotter />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <HandLoader />
            </div>
          )}
        </>
      </body>
    </html>
  );
}

const SideBarItem = styled.div`
  display: flex;
  margin-right: 0.5rem;
  gap: 0.3rem;

  @media screen and (max-width: 813px) {
    gap: 5px;
    margin-right: 0;
    display: none;
  }
`;

const SideBarLastItem = styled.div`
  /* padding-right: 49px; */
  @media screen and (max-width: 688px) {
    padding: 1px;
  }
`;
const TwoIconsContainer = styled.div`
  /* padding-right: 49px; */
  @media screen and (max-width: 410px) {
    display: none;
  }
`;
