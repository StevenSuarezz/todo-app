import { Flex, Text, HStack, Button } from "@chakra-ui/react";
import { MenuItem } from "components/molecules/MenuItem/MenuItem";
import Link from "next/link";
import React from "react";

export default function TopBar() {
    return (
            <Flex w="100%" flexDirection="row" alignContent="center" p="8px 16px" justifyContent="center">
                <Text fontSize="36px" fontWeight="bold" lineHeight="42px" color="#1F79BA" flexGrow={1}>Todo App</Text>
                <HStack spacing="16px" alignContent="center">
                    <MenuItem text="Blog" href="/blog" />
                    <MenuItem text="Product" href="/product" />
                    <MenuItem text = "Pricing" href="/pricing" />
                </HStack>
                <Flex marginLeft="82px">
                    <Button variant="solid" colorScheme="blue">Get Started</Button>
                </Flex>
            </Flex>
    )
}