import { Box, Container, SimpleGrid, Flex, Text, HStack } from "@chakra-ui/react";
import React from "react";

export default function LandingFooter() {
    return (
        <Box as="footer" backgroundColor="blue.300" py="20px" position="absolute" bottom="0" width="100%">
            <Container>
                <SimpleGrid columns={2} spacing={8}>
                    <Box>Super App 2023</Box>
                    <Flex flexDirection="column">
                        <Text mb="16px">Follow us on</Text>
                        <HStack spacing={4}>
                            <Text>Twitter</Text>
                            <Text>Instagram</Text>
                            <Text>Facebook</Text>
                        </HStack>
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    )
}