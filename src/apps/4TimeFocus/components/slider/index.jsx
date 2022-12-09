import { Container,Slider } from "./styles"
import { SoundOffIcon, SoundOnIcon } from "../../assets/icons"

export const SliderInput = ({value, HandleSlider}) => {
    return (
        <Container>           
            {value > 0 ? <SoundOnIcon className="soundIcon" /> : <SoundOffIcon className="soundIcon"  />}
            <Slider type="range" defaultValue={value} onChange={HandleSlider} />
        </Container>
    )
}