import {Container,CardArea} from './style';

export function Projects({title, children}) {
    return(
        <Container>
            <h1>{title}</h1>
            <CardArea>
                {children}

            </CardArea>
        </Container>
    )
}