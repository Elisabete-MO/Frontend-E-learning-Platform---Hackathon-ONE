import { Home } from "./pages/Home";
import { CardImage } from "./components/EstruturalComponents/Card/CardImage";
import imgTeste from "./assets/ilustracao-login.svg";

function App() {
    return (
        <>
            <CardImage  imgUrl={imgTeste} altText={"Ilustração qualquer"} style={{borderColor: "#FFA82C"}}/>
            <Home />
        </>
    );
}

export default App;
