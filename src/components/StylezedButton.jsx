import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function StylezedButton ({buttonText}) {

    return (
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
            {buttonText}
        </Button>
    );
}

export function StylezedActiveButton ({buttonText}) {

    return (
        <Button
            bg="#035607ff"
            border="1px solid"
            borderColor="#035607ff"
            w="12.8rem"
            h="2.5rem"
            color="#fff"
            fontSize="1.2rem"
            fontFamily="sans-serif"
            _hover={{ bg: "#fff", color: "#035607ff" }}
            borderRadius="0"
        >
            {buttonText}
        </Button>
    );
}

StylezedButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
};

StylezedActiveButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
};