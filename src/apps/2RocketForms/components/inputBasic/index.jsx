import { Container } from "./style";


export const InputBasic = ({title, obs, htmlFor, customHeigth = 56, ...rest}) => {
    return (
        <Container customHeigth={customHeigth}>
            <label htmlFor={htmlFor}>{title} <span>{obs ? '(' + obs + ')' : ``}</span></label>
            <input {...rest} />
        </Container>
    );
}