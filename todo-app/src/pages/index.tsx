import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { MenuItem } from 'components/molecules/MenuItem/MenuItem'
import Link from 'next/link'
import Hero from 'components/molecules/Hero/Hero'
import TopBar from 'components/organisms/TopBar/TopBar'
import LandingBody from 'components/organisms/LandingBody/LandingBody'
import LandingFooter from 'components/organisms/LandingFooter/LandingFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" minHeight="100vh">
        <TopBar />
        <Hero />
        <LandingBody />
        <LandingFooter />
      </Flex>
    </>
  )
}
