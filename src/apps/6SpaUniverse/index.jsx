

import { Container,Header,Main,Home,Link,Section } from "./style";
import { IconSpa } from "./assets/icons";
import mountains from "./assets/mountains-universe-1.png";
import universe from "./assets/mountains-universe2.png";
import exploration from "./assets/mountains-universe-3.png";
import { useState } from "react";
export const SpaUniverse = () => {
const pageSchema = {
    home: {
        id: "home",
        title: 'Explore o universo',
        subtext: 'Quero saber mais',
        img: mountains,
    },
    universe: {
        id: "universe",
        title: 'O universo',
        subtext: `A palavra Universo deriva do latim universum. A palavra latina foi usada por Cícero e posteriormente por outros autores com o mesmo sentido que é empregada atualmente. A palavra latina é derivada da contração poética unvorsum — utilizada primeiramente por Lucrécio no Livro IV de seu “Sobre a Natureza das coisas” — que conecta un, uni (um) com vorsum, versum (que significa "algo rodado, rolado ou mudado").`,       
        img: universe,

    },
    exploration: {
        id: "exploration",
        title: 'Exploração',
        subtext: `Os corpos celestes e astros sempre foram motivo de grande fascinação na humanidade. Há registros de gregos, mesopotâmicos e astecas descrevendo vários acontecimentos celestes. Na era contemporânea, vários cientistas deram grandes contribuições para que o sonho de explorar o espaço pudesse se tornar realidade, como o russo Konstantin Tsiolkovsky, o alemão Hermann Oberth e o estadunidense Robert Goddard.`,
        img: exploration,

    }
}
const [page,setPage] = useState(pageSchema.home);


const MainRenderer = () => {
    switch (page.id) {
        case "home":
            return (
                <Home>
                    <h1>{page.title}</h1>
                    <button>{page.subtext}</button>
                </Home>
            )
        case "universe":
            return (
                <Section>
                    <h1>{page.title}</h1>
                    <p>{page.subtext}</p>
                </Section>
            )
        case "exploration":
            return (
                <Section>
                    <h1>{page.title}</h1>
                    <p>{page.subtext}</p>
                </Section>
            )
        default:
            return (
                <Home>
                    <h1>{page.title}</h1>
                    <button>{page.button}</button>
                </Home>
            )
    }
}

    return (
        <Container bg={page.img}>
            <Header>
                <IconSpa />
                <ul>
                    <li><Link 
                    onClick={() => setPage(pageSchema.home) }
                    selected={ page.id === pageSchema.home.id}  
                    >Home</Link></li>
                    <li><Link 
                    onClick={() => setPage(pageSchema.universe)}
                    selected={ page.id === pageSchema.universe.id}  
                    >O Universo</Link></li>
                    <li><Link 
                    onClick={() => setPage(pageSchema.exploration)}
                    selected={ page.id === pageSchema.exploration.id}  
                    >Exploração</Link></li>
                </ul>              
            </Header>
            <Main>
                {MainRenderer()}
            </Main>
            </Container>
    )
}