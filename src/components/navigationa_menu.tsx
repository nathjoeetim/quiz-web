"use client";

import * as React from "react";
import Link from "next/link";
import thinker from "@/app/assets/wrong.json";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import MotionImage from "./hooks/motionImage";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Math Quiz",
    href: "/docs/primitives/alert-dialog",
    description: "We have differnt models of student of different class.",
  },
  {
    title: "Religion Quiz",
    href: "/docs/primitives/hover-card",
    description: "Questions reqarding the religious scripture.",
  },
  {
    title: "English Quiz",
    href: "/docs/primitives/progress",
    description: "This containes sections like spelling, essey writing, etc.",
  },
  {
    title: "Word Quiz",
    href: "/docs/primitives/scroll-area",
    description: "Fill in the missing word contest.",
  },
];

export function NavigationMenuComponent() {
  return (
    <NavigationMenu className="pl-2 z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white ">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-700 z-[1000]">
            <ul className="grid gap-3 p-5 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-white">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="w-[200px]">
                      <MotionImage imageJson={thinker} loop={true} />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Mi-Ni Quiz
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground ">
                      Strategically selected questions for everyone at all level
                      of institude. This comes in various categories.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Basic Level">
                Questions in this level is recomended for people below grade 5
              </ListItem>
              <ListItem href="/docs/installation" title="Advance Level">
                This is when things get tricky and is recomended for people from
                grade 5 and above
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Mastery Level"
              >
                If you think you are good, then this is the place for you.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white ">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-700 z-[1000]">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-white">
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Button className="text-white">Documentation</Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-normal text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
