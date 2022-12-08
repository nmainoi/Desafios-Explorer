import {
    Container,
    Header,
    Main,
    Form,
    HeaderBG,
    CategoryWrapper,
    ButtonWrapper,
    CheckBox,
    DateWrapper,
    TimeWrapper,
    DateTimeWrapper,
    CheckBoxWrapper
} from "./style";
import { Check } from "./assets/icons";
import { InputBasic } from "./components/inputBasic";
import { useState } from "react";
export function RocketForms() {

    const [check, setCheck] = useState(true);

    function HandleCheck() {
        setCheck(!check);
    }
    return (
        <Container>

            <Main>
                <Header>
                    <h1>
                        Crie e compartilhe<br /> seu evento.
                    </h1>
                    <p> O primeiro passo, é preencher esse<br />
                        formulário de inscrição.</p>
                </Header>
                <Form>
                    <h1>Informações do Evento</h1>
                    <InputBasic title="Titulo do evento" obs="minímo 8 caracteres" htmlFor="title" type="text" id="title" />
                    <InputBasic title="Link do evento" obs="comece com https://" htmlFor="link" type="text" id="link" />
                    <InputBasic title="Whatsapp para contato" obs="somente números" htmlFor="whatsapp" type="number" id="whatsapp" />
                    <InputBasic title="Informações extras" obs="" customHeigth={168} htmlFor="extra-data" type="text" id="extra-data" />
                    <CategoryWrapper>
                        <label htmlFor="event-category">Categoria</label>
                        <select id="event-category" placeholder="Tipo do evento">
                            <option value="live">Ao vivo</option>
                            <option value="podcast">Podcast</option>
                            <option value="podcast">Mentorship</option>
                        </select>
                    </CategoryWrapper>

                    <h1>Privacidade</h1>
                    <InputBasic title="E-mail do adminstrador" obs="digite um email válido" htmlFor="email" type="email" id="email" />
                    <InputBasic title="Senha de acesso para os participantes" obs="mínimo 8 caracteres" htmlFor="password" type="password" id="password" />
                    <CheckBoxWrapper>
                        <CheckBox onClick={HandleCheck}>{
                            check ? <Check /> : null
                        }

                        </CheckBox>
                        <span>Evento Privado</span>
                    </CheckBoxWrapper>
                    <h1>Dia e hora</h1>
                         <DateTimeWrapper>
                            <DateWrapper>
                                <InputBasic title="Data" obs="dd/mm/aaaa" htmlFor="date" type="date" id="date" />
                            </DateWrapper>
                            <TimeWrapper>
                                <InputBasic title="Das" obs="hh:mm" htmlFor="time" type="time" id="time" />
                                <InputBasic title="Até" obs="hh:mm" htmlFor="time" type="time" id="time" />

                            </TimeWrapper>
                            </DateTimeWrapper> 
                </Form>
                <ButtonWrapper>
                                <button type="submit">Criar evento</button>
                            </ButtonWrapper>
            </Main>
            <HeaderBG />
        </Container>
    );
}
