import { Box, Container, Flex, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function LandingBody() {
    return (
        <Container>
            <SimpleGrid columns={2} spacing={10} p="64px 24px">
                <Box>
                    <Box backgroundColor="gray.300" width="100%" height="225px" borderRadius="16px"></Box>
                </Box>
                <Flex flexDirection="column" justifyContent="Center">
                    <Text mb="8px">Including the market standard technologoes</Text>
                    <UnorderedList>
                        <ListItem>Next.js</ListItem>
                        <ListItem>ChakraUI</ListItem>
                        <ListItem>PostgreSQL</ListItem>
                    </UnorderedList>
                </Flex>
            </SimpleGrid>
        </Container>
    )
}