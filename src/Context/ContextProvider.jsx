import React, { useEffect, useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
	const [fetchedData, setFetchedData] = useState(null);
	const [name, setName] = useState("bulbasaur");

	const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setFetchedData(data);
			})
			.catch((err) => setFetchedData(null));
	}, [URL]);

	return (
		<Context.Provider value={{ fetchedData, setName }}>
			{children}
		</Context.Provider>
	);
};
