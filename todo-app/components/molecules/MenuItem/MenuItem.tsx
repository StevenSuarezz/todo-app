import { Text } from "@chakra-ui/react"
import React from "react"

type MenuItemProps = {
    children: string | React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
    return <Text color="#666666" fontSize="18px">{children}</Text>
}