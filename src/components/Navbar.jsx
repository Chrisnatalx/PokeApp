import React from "react";
import { Logo } from "./Logo";
import { Flex, Menu, MenuButton } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<>
			<Flex justifyContent="space-around" bg="black">
				<Menu>
					<MenuButton>
						<Logo />
					</MenuButton>
					<MenuButton color="white">Search</MenuButton>
				</Menu>
			</Flex>
		</>
	);
};
