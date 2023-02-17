import { Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

type MenuItemProps = {
    text: string,
    href: string
}

export function MenuItem({ text, href }: MenuItemProps) {
    return <Text color="gray.500" fontSize="18px">
            <Link href={href}>{text}</Link>
        </Text>
}