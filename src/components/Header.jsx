import { Box, Image, Flex, HStack, Link } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { StylezedButton } from './StylezedButton';

function Header() {
    return (
        <Box as="header" bg="white" px={6} py={4} boxShadow="sm">
            <Flex justify="space-between" align="center">
                {/* Logo */}
                <Flex align="center" gap={2}>
                    <Link href="/">
                        <Image src={logo} alt="Logo" boxSize="50px" />
                    </Link>
                </Flex>

                {/* Menu horizontal */}
                <HStack spacing="41px">
                    <Link fontSize="1rem" fontWeight="medium" href="/cursos">
                        Cursos
                    </Link>
                    <Link fontSize="1rem" fontWeight="medium" href="/precos">
                        Preços
                    </Link>
                    <Link fontSize="1rem" fontWeight="medium" href="/sobre">
                        Sobre nós
                    </Link>

                    {/* Botão Entrar */}
                    <StylezedButton buttonText={"Entrar"} />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Header;
