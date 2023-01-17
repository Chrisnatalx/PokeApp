import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { Flex, Menu, MenuButton } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<>
			<Flex
				justifyContent="space-around"
				bg="black"
				alignItems="center"
				fontFamily="Open Sans"
			>
				<Menu>
					<MenuButton>
						<Logo />
					</MenuButton>
				</Menu>
				<SearchBar w="400px" />
			</Flex>
		</>
	);
};
