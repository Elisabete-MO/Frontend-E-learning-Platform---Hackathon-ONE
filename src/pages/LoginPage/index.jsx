import { LoginBanner } from "../../components/LoginPage/LoginBanner";
import { LoginForm } from "../../components/LoginPage/LoginForm";
import { ExternalDoubleContainer } from "../../components/EstruturalComponents/ExternalContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function LoginPage() {
    return (
    <>
        <Header />
        <ExternalDoubleContainer>
            <LoginBanner/>
            <LoginForm/>
        </ExternalDoubleContainer>
        <Footer />
    </>
    );
};