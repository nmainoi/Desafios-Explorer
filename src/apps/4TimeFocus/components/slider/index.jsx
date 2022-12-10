import { Container,Slider } from "./styles"
import { SoundOffIcon, SoundOnIcon } from "../../assets/icons"

export const SliderInput = ({value, HandleSlider,fill}) => {
    return (
        <Container>           
            {value > 0 ? <SoundOnIcon className="soundIcon" fill={fill} /> : <SoundOffIcon className="soundIcon" fill={fill} />}
            <Slider type="range" defaultValue={value} onChange={HandleSlider}  />
        </Container>
    )
}