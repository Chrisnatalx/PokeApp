import React, { useContext } from "react";

import { Context } from "../../Context/Context";
import {
	Card,
	CardBody,
	Center,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";

export const CardItem = () => {
	const message = "Not Found";

	const { fetchedData } = useContext(Context);

	if (!fetchedData)
		return (
			<Center>
				<Text>{message}</Text>
			</Center>
		);

	const { name, sprites } = fetchedData;

	const capitalize = (text) => {
		return text.substring(0, 1).toUpperCase() + text.substring(1);
	};

	return (
		<>
			<Center mt="20px">
				<Card maxW="sm">
					<CardBody>
						<Image
							src={sprites.other.dream_world.front_default}
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">{capitalize(name)}</Heading>
						</Stack>
					</CardBody>
				</Card>
			</Center>
		</>
	);
};
