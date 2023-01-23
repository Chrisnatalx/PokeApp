import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import {
	Badge,
	Card,
	CardBody,
	Center,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";

export const CardItem = () => {
	const message = "Pokemon not found";

	const { fetchedData } = useContext(Context);
	console.log(fetchedData);

	if (!fetchedData) {
		return (
			<Center mt="20px">
				<Badge colorScheme="red">{message}</Badge>
			</Center>
		);
	}

	const { name, sprites, weight, base_experience, order } = fetchedData;

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
						<Text> Weight: {weight}</Text>
						<Text> Base xp : {base_experience}</Text>
						<Text> Order : {order}</Text>
					</CardBody>
				</Card>
			</Center>
		</>
	);
};
