import { Box, Image, Button, Flex, HStack, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';

function Header() {
    return (
        <Box as="header" bg="white" px={6} py={4} boxShadow="sm">
            <Flex justify="space-between" align="center">
                {/* Logo */}
                <Flex align="center" gap={2}>
                    <Image src={logo} alt="Logo" boxSize="50px" />
                </Flex>

                {/* Menu horizontal */}
                <HStack spacing="41px">
                    <Text fontSize="1rem" fontWeight="medium" cursor="pointer">
                        Cursos
                    </Text>
                    <Text fontSize="1rem" fontWeight="medium" cursor="pointer">
                        Preços
                    </Text>
                    <Text fontSize="1rem" fontWeight="medium" cursor="pointer">
                        Sobre nós
                    </Text>

                    {/* Botão Entrar */}
                    <Button
                        bg="white"
                        border="1px solid"
                        borderColor="#05AFF2"
                        w="12.8rem"
                        h="2.5rem"
                        color="#000"
                        fontSize="1.2rem"
                        fontFamily="sans-serif"
                        _hover={{ bg: "#05AFF2", color: "white" }}
                        borderRadius="0"
                    >
                        Entrar
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Header;
