import { Box, Image, Heading, Text, Flex, Button } from '@chakra-ui/react';
import pagina_inicial from '../assets/pagina_inicial.png';

function Main() {
    return (
        <Box as="main" p={8} minH="calc(100vh - 240px)">
            <Flex
                justify="space-between"
                align="center"
                h="100%"
                flexWrap="wrap" // permite responsividade
            >
                {/* Lado esquerdo com o texto */}
                <Box w={{ base: "100%", md: "50%" }} p={4} textAlign={{ base: "center", md: "left" }}>
                    <Heading fontSize="2rem" mb={4} fontFamily="'Inclusive Sans', sans-serif" fontWeight="normal">
                        <Text as="span" mr={1}>
                            Bem-vindo ao
                        </Text>
                        <Text as="span" color="#05AFF2" mr={1}>
                            Aprenda
                        </Text>
                        <Text as="span" color="#F29A2E" mr={1}>
                            +
                        </Text>
                        <Text as="span">
                            : Uma plataforma feita para quem ama aprender e ensinar. Cadastre-se e comece sua jornada hoje!
                        </Text>
                    </Heading>

                    <Flex justify={{ base: "center", md: "center" }}>
                        <Button
                            bg="#FFF"
                            border="1px solid"
                            borderColor="#000"
                            w="12.8rem"
                            h="2.5rem"
                            color="#000"
                            fontWeight={0}
                            fontSize="1.2rem"
                            fontFamily="'Inclusive Sans', sans-serif"
                            _hover={{ bg: "#05AFF2", color: "white" }}
                            borderRadius={0}
                        >
                            Cadastre-se agora
                        </Button>
                    </Flex>
                </Box>

                {/* Lado direito com a imagem */}
                <Box w={{ base: "100%", md: "50%" }} p={4} display="flex" justifyContent="center">
                    <Image
                        src={pagina_inicial}
                        alt="Página inicial"
                        objectFit="cover"
                        w={{ base: "100%", md: "20rem" }}
                        h="70%"
                    />
                </Box>
            </Flex>
        </Box>
    );
}

export default Main;
