import React from "react";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { Center, Flex, Menu, MenuButton } from "@chakra-ui/react";

export const NavbarResponsive = () => {
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
			</Flex>
			<Center bg="black" p="10px">
				<SearchBar w="400px" />
			</Center>
		</>
	);
};
