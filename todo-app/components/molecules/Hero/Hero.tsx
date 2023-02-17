import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";


export default function Hero() {
    return (
    <Flex w="100%" background="linear-gradient(93.7deg, #FEAC5E 2%, #C779D0 47%, #4BCBCB 98%)">
            <Container py="64px">
                <Heading>
                Todo Landing Page
                <br />
                Lorem ipsum dolor sit amet.
                </Heading>
                <Text mt="8px" fontSize="26px" color="gray.700">
                    Fullstack React App
                </Text>
            </Container>
    </Flex>
    )
}