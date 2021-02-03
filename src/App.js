import { ChakraProvider } from "@chakra-ui/react"
import LoginForm from './pages/LoginForm';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
}

export default App;
