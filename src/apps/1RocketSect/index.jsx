import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { LogoRocketSect } from "../../assets/icons";
import { 
    Container,
    Header,
    Ul,
    Main,
    ImgArea,
    TextArea,
    Footer,
    Line
} from "./style";
import { BackgroundImg,LockSvg } from "./assets/svg";

export function RocketSect() {
    return (
        <ThemeProvider theme={theme}>
     
        <Container>
            <Header>
                <LogoRocketSect/>
                <Ul>
                    <li><a>Inicio</a></li>
                    <li><a>Serviços</a></li>
                    <li><a>Contato</a></li>
                </Ul>
            </Header>

            <Main>
                <ImgArea>
                    <BackgroundImg />
                </ImgArea>
                <TextArea>
                    <h1>Seus dados estão <span>protegidos</span> ?</h1>
                    <p>A informação é fundamental e de <strong>extrema
                        importância</strong> para qualquer <br/> empresa.</p>
                    <p>Aqui vai um <strong>texto</strong> como se fosse uma empresa de  <span>segurança da
                        informação</span><br/> apresentando o seu produto e com o texto todo
                        estilizado.</p>
                </TextArea>
            </Main>
            <Footer>
                <Line />
                <span>para mais informações nos siga no instagram @rocketsect</span>
            </Footer>
            <div style={{position: "absolute", bottom: 20, left: 20}}>

            <LockSvg />
            </div>
        </Container>
        </ThemeProvider>)
}