import { Container } from "./style";

export function Cards({title, description, imageSrc, ...rest}) {

    return (
        <Container {...rest}>
            <h1>{title}</h1>
            <img src={imageSrc}/>
            <p>{description}</p>
        </Container>
    )

}