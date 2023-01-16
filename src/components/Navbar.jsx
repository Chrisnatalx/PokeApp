import React from "react";
import { Logo } from "./Logo";
import {
	Flex,
	Menu,
	MenuButton,
	MenuGroup,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
	return (
		<>
			<Flex justifyContent="space-around" bg="black" alignItems="center">
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
