import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme,lightTheme } from "./utils/Theames";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import Skills from "./components/skills";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/contacts";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import { useMode } from "./store/ModeStore";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );

  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const  {mode}= useMode()
  return (
    <>
      <ThemeProvider theme={mode?lightTheme:darkTheme}>
        <Router>
          <Navbar />
          <Body>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
            {/* education removed */}
              <Contact />
            </Wrapper>
            <Footer />
          </Body>
        </Router>
      </ThemeProvider>
      <ToastContainer style={{ zIndex: 100000 }} />
    </>
  );
}

export default App;