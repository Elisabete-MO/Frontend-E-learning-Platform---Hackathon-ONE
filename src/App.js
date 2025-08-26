import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from '@chakra-ui/react';
import './App.css';
import logo from './assets/logo.png';
import pagina_inicial from './assets/pagina_inicial.png';

function App() {
  return (
    <Box>
      {/* 1. CABEÇALHO com Botões */}
      <Box as="header" bg="gray.100" p={4}>
        <Flex justify="space-between" align="center">
          <Image src={logo} alt="Logo" boxSize="50px" />
          <Heading size="md">APRENDA +</Heading>
          <HStack spacing={4}>
            <Button colorScheme="blue">Login</Button>
            <Button colorScheme="green">Cadastrar-se</Button>
          </HStack>
        </Flex>
      </Box>

      {/* 2. DIVIDER (linha separadora) */}
      <Divider />

      {/* 3. CONTEÚDO PRINCIPAL DA PÁGINA */}
      <Box as="main" p={8} minH="calc(100vh - 120px)">
        <Flex justify="space-between" align="center" h="100%">
          {/* Lado esquerdo (50%) com o texto */}
          <Box w="50%" p={4}>
            <Heading size="2xl" mb={4}>
              Bem-vindo ao Aprenda+
            </Heading>
            <Text fontSize="4xl" fontWeight="bold">
              Uma plataforma feita para quem ama aprender e ensinar. Cadastre-se e comece sua jornada hoje!
            </Text>
          </Box>

          {/* Lado direito (50%) com a imagem principal */}
          <Box w="50%" p={4}>
            <Image
              src={pagina_inicial}
              alt="Página inicial"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        </Flex>

        {/* Seção de Cards de Cursos */}
        <Heading size="lg" textAlign="center" my={10}>
          Nossos Cursos Disponíveis
        </Heading>
        <Flex justify="center" gap={6}>
          {/* Primeiro Card */}
          <Card maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <CardHeader>
              <Heading size="md">Introdução ao React</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Aprenda os fundamentos do React para criar interfaces de usuário dinâmicas.
              </Text>
            </CardBody>
          </Card>

          {/* Segundo Card */}
          <Card maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <CardHeader>
              <Heading size="md">Desenvolvimento Web com Node.js</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Domine o desenvolvimento back-end com JavaScript no servidor.
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>

      {/* 4. DIVIDER (linha separadora) */}
      <Divider />

      {/* 5. RODAPÉ */}
      <Box as="footer" bg="gray.100" p={4} textAlign="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Aprenda + Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}

export default App;