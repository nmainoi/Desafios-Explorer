import { Container, Card,Header,Main } from "./style";
import { LogoSpaceCream } from "../../assets/icons";
import Sorvete1 from './assets/sorvete1.png'
import Sorvete2 from './assets/sorvete2.png'
import Sorvete3 from './assets/sorvete3.png'
import Sorvete4 from './assets/sorvete4.png'
export const SpaceCream = () => {
    return (
        <Container>
            <Header>
                <div className='logo' >

                <LogoSpaceCream />
                </div>
                <h1>SPACE CREAM</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus accusantium, labore vel nostrum deleniti aliquid sunt optio, a ratione unde? Nemo nisi laudantium veritatis est fuga? Voluptatem, inventore dignissimos?</p>
            </Header>
            <Main>
                <Card className="Card1" type='small'>
                    <h1>PALETAS</h1>
                    <img src={Sorvete1} alt="Sorvete1" />
                </Card>
                <Card className="Card2" type='big'>
                    <h1>SHAKES</h1>
                    <img src={Sorvete2} alt="Sorvete1" />
                </Card>
                <Card className="Card3" type='small'>
                    <h1>MASSAS</h1>
                    <img src={Sorvete3} alt="Sorvete1" />
                </Card>
                <Card className="Card4" type='big'>
                    <h1>PICOLÉS</h1>
                    <img src={Sorvete4} alt="Sorvete1" />
                </Card>
            </Main>
        </Container>
    );
}