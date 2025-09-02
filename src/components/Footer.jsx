import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box as="footer" bg="#fff" p={4} textAlign="center">
            <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Aprenda+. Todos os direitos reservados.
            </Text>
        </Box>
    );
}

export default Footer;
