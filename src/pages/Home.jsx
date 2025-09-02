import { Divider } from "@chakra-ui/react";
import Header from "../components/Header";
import Main from "./Main/Main";
import Footer from "../components/Footer";


function Home (){

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

export default Home;