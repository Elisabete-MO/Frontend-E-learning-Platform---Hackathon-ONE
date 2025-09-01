import { Divider } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Divider />
      <Main />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
