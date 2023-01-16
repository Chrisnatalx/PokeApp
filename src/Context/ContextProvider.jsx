import React, { useEffect, useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
	const [fetchedData, setFetchedData] = useState([]);
	const { results } = fetchedData;

	const URL = `https://pokeapi.co/api/v2/pokemon/`;

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setFetchedData(data));
	}, [URL]);

	return <Context.Provider value={{ results }}>{children}</Context.Provider>;
};
