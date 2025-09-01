import { Divider } from "@chakra-ui/react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


export function Home (){

    return (
        <>
        <Header />
        <Divider />
        <Main />
        <Divider />
        <Footer />
        </>
    );
};