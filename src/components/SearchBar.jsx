import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { BiSearch } from "react-icons/bi";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const SearchBar = () => {
	const [inputvalue, setinputvalue] = useState("");
	const { setName } = useContext(Context);

	const onSearch = (e) => {
		setinputvalue(e.target.value);
	};
	const onHandleSearch = () => {
		setName(inputvalue);
	};

	return (
		<>
			<InputGroup w="300px">
				<Input placeholder="Search Pokemon" color="white" onChange={onSearch} />
				<InputRightElement
					children={<BiSearch color="white" onClick={onHandleSearch} />}
				/>
			</InputGroup>
		</>
	);
};
