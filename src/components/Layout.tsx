import React from "react";
import { Box, Button, Container, Icon, Image, Skeleton, Stack, StackDivider, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsHouseFill, BsHouse, BsHash, BsBellFill, BsBell, BsEnvelopeFill, BsEnvelope, BsBookmark, BsBookmarkFill, BsList, BsPersonFill, BsPerson, BsThreeDots } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface propsWithChildren {
    children: React.ReactNode
}

interface ListLink {
    href: string;
    text: string;
    activeIcon: IconType;
    inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
    {
        href: '/',
        text: 'Inicio',
        activeIcon: BsHouseFill,
        inactiveIcon: BsHouse,

    },
    {
        href: '/explore',
        text: 'Explorar',
        activeIcon: BsHash,
        inactiveIcon: BsHash,
    },
    {
        href: '/notifiications',
        text: 'notificaciones',
        activeIcon: BsBellFill,
        inactiveIcon: BsBell,
    },
    {
        href: '/messagges',
        text: 'Mensajes',
        activeIcon: BsEnvelopeFill,
        inactiveIcon: BsEnvelope,
    },
    {
        href: '/bookmarks',
        text: 'Guardados',
        activeIcon: BsBookmarkFill,
        inactiveIcon: BsBookmark,
    },
    {
        href: '/lists',
        text: 'Listas',
        activeIcon: BsList,
        inactiveIcon: BsList,
    },
    {
        href: '/profile',
        text: 'Perfil',
        activeIcon: BsPersonFill,
        inactiveIcon: BsPerson,
    },
    {
        href: '/options',
        text: 'Mas Opciones',
        activeIcon: BsThreeDots,
        inactiveIcon: BsThreeDots,
    },
];

const Layout = ({ children }: propsWithChildren): JSX.Element => {
    const { toggleColorMode } = useColorMode();
    const { pathname } = useLocation();
    const logoColor = useColorModeValue("primary.500", undefined);
    const userColor = useColorModeValue(undefined, "white");

    return (
        <Container maxWidth='container.xl' height="100%" alignSelf='center' paddingX={0} >
            <Stack direction="row" divider={<StackDivider />} height="100%">
                <Stack justifyContent={"space-between"}>
                    <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
                        <Link to="/">
                        <Icon as={FaTwitter}  color={logoColor} height={7} width={7} onClick={toggleColorMode} />
                        </Link>
                        <Stack fontSize="xl" fontWeight="bold" spacing={7} >
                            {LINKS.map(link => (
                                <Link to={link.href} key={link.href}>
                                    <Stack alignItems="center"
                                        direction="row"
                                        spacing={5}
                                        color={pathname === link.href ? "primary.500" : "inherit"} >
                                        <Icon as={pathname === link.href ? link.activeIcon : link.inactiveIcon} height={6} width={6} />
                                        <Text>{link.text}</Text>
                                    </Stack>
                                </Link>))}
                        </Stack>
                        <Button size="lg" colorScheme="primary">Twitear</Button>
                    </Stack>

                    <Stack paddingX={4} alignItems="center" direction="row" justifyContent="space-between" paddingY={4}>
                       <Stack direction="row" alignItems="center">
                       <Image borderRadius="50%" height={10}    src="https://avatars.githubusercontent.com/u/56644711?s=400&u=8b7a0fc8c73b0c52446b77b83fcd484f95ffd2c9&v=4" width={10}/>
                       <Stack spacing={0}>
                        <Text fontWeight="bold" fontSize="sm" color={userColor}>Gaby.tsx</Text>
                        <Text fontSize="sm" color="gray.600">@Gaby73</Text>
                       </Stack>
                       </Stack>
                       <Icon as={BsThreeDots} />
                    </Stack>
                </Stack>
             <Box paddingX={4} width="100%">
                
                 {children}
                 </Box>  
            </Stack>
        </Container>
    )
}

export default Layout

