import { Container, Main, Header } from "./style"
import theme from "./themes/theme";
import { ThemeProvider } from "styled-components";
import { Logo } from "./components/logo";
import { Avatar } from "./components/avatar";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Cards } from "./components/cards";
import { LogoRocketSect } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
export function ExplorerHub() {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>

            <Container>
                <Header>
                    <Logo />
                    <Avatar />
                </Header>
                <Main>
                    <About/>
                    <Projects title={`Projetos Explorer`}>
                        <Cards 
                        onClick={() => navigate("/rocketsect")}
                        title={<LogoRocketSect/>} 
                        description='Landing page simples'
                        imageSrc={'https://i.imgur.com/MbgaTih.png'}/>
                         <Cards 
                        onClick={() => navigate("/rocketforms")}
                        title={`Forms`} 
                        description='Formulario simples'
                        imageSrc={'https://i.imgur.com/xjWyHzQ.png'}/>

                    </Projects>
                </Main>
            </Container>
        </ThemeProvider>
    )
}