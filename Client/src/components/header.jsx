import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation.pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to={"/"}
          className="text-sm sm:text-xl whitespace-nowrap dark:text-white "
        >
          <span className=" bg-gradient-to-r from-red-700 via-pink-700 to-red-900 px-2 py-1 rounded-lg self-center text-white">
            TechITIs
          </span>
          Blog{" "}
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={SlMagnifier}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden " color="gray" pill>
          <SlMagnifier />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button color="gray" pill>
            <FaMoon />
          </Button>
          <Link to={"/sin-in"}>
            <Button gradientDuoTone="pinkToOrange">Sign In</Button>
          </Link>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink active={path === "/"} as={"div"}>
            <Link to={"/"} className=" hover:text-orange-600">
              Home
            </Link>
          </NavbarLink>
          <NavbarLink active={path === "/about"} as={"div"}>
            <Link to={"/about"} className=" hover:text-orange-600">
              About
            </Link>
          </NavbarLink>
          <NavbarLink active={path === "/projects"} as={"div"}>
            <Link to={"/projects"} className=" hover:text-orange-600">
              Projects
            </Link>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
