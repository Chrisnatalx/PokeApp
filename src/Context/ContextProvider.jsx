import React, { useEffect, useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
	const [fetchedData, setFetchedData] = useState(null);
	const [name, setName] = useState("charmander");

	const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setFetchedData(data);
			});
	}, [URL]);

	return (
		<Context.Provider value={{ fetchedData, setName }}>
			{children}
		</Context.Provider>
	);
};
