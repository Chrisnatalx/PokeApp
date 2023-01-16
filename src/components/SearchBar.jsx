import React from "react";
import { BiSearch } from "react-icons/bi";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const SearchBar = () => {
	return (
		<>
			<InputGroup w="300px">
				<Input placeholder="Search Pokemon" color="white" />
				<InputRightElement children={<BiSearch color="white" />} />
			</InputGroup>
		</>
	);
};
