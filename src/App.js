import "./App.css";
import InsureLanding from "./components/InsureLanding";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./components/Fonts";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/Footer";

function App() {
  const theme = {
    light: {
      bgPurple: `hsl(256, 26%, 20%)`,
      bgFooter: `hsl(0, 0%, 95%)`,
      bodyText: `hsl(273, 4%, 51%)`,
      headTextPrim: `black`,
      headTextSec: `white`,
    },
  };
  return (
    <div className='App'>
      <GlobalStyle />
      <ThemeProvider theme={theme.light}>
        <Nav />
        <InsureLanding />
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
