import { ChakraProvider, Divider } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Divider />
      <Main />
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
