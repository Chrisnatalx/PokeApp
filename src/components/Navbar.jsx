import React from "react";
import { NavbarLarge } from "./menu/NavbarLarge";
import { NavbarResponsive } from "./menu/NavbarResponsive";
import { useMediaQuery } from "@chakra-ui/react";

export const Navbar = () => {
	const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

	return <>{isLargerThan700 ? <NavbarLarge /> : <NavbarResponsive />}</>;
};
