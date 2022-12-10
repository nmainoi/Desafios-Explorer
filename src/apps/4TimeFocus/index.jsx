import { Container,
     TimeWrapper,
     TimerArea,
     ButtonTimerArea,
     OptionsWrapper,
     VolumeWrapper,
     ButtonTheme,
    ToggleTheme } from "./style";
import { PlayIcon,
     StopIcon,
     AddIcon,
     RemoveIcon,
     FireIcon,
     FlorestIcon,
     HouseIcon,
     RainIcon,
    DarkThemeIcon,
    LigthThemeIcon } from "./assets/icons";

import React, { useState, useEffect, useRef } from 'react';
import { SliderInput } from "./components/slider";
import { ThemeProvider } from "styled-components";
import { themeWhite ,themeDark } from "./theme/theme";
export const TimeFocus = () => {

    const [theme, setTheme] = useState(
        themeWhite()
    )
    const [isDarkTheme, setisDarkTheme] = useState(false)
    const [volume, setVolume] = useState(50)
    const [minutes, SetMinutes] = useState(25)
    const [seconds, SetSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [sound, setSound] = useState("rain")
    const audioRef = useRef(null)
    const IsPlaying = (current) => {
        return current === sound
    }
    const HandleFill = (event) => {
        if (event === sound)
            return "white"
        else
            return theme.COLORS.MAIN;
    }
    const HandleSound = (event) => {
        if(sound === event){
            audioRef.current.pause()
            setSound("")
            return
        }

        setSound(event)
        audioRef.current.src = soundSchema[event].url     
        audioRef.current.play()
        audioRef.current.loop = true
        audioRef.current.volume = volume / 100
    }
    const soundSchema = {
        fire: {
            url: "https://www.myinstants.com/media/sounds/fire-burning.mp3",
        },
        rain: {
            url: "https://www.myinstants.com/media/sounds/rain.mp3",

        },
        florest: {
            url: "https://www.myinstants.com/media/sounds/forest-walking.mp3",

        },
        house: {
            url: "https://www.myinstants.com/media/sounds/house.mp3",

        }
    }




    function HandleSlider(event) {
        setVolume(event.target.value)
        audioRef.current.volume = volume / 100
    }
    function HandleState(running) {
        setIsRunning(running)
    }

    useEffect(() => {


        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {

                if (seconds > 0) {
                    SetSeconds(seconds => seconds - 1);
                }

                if (seconds === 0) {

                    if (minutes === 0) {
                        clearInterval(interval);
                    } else {
                        SetMinutes(minutes => minutes - 1);
                        SetSeconds(59);
                    }
                }

            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds, isRunning])


    const FormatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    const HandleAdd = () => {
        console.log(minutes)
        SetMinutes(minutes => minutes + 5)
    }
    const HandleRemove = () => {
        if (minutes === 0 || minutes - 5 <= 0) return
        SetMinutes(minutes => minutes - 5)
    }
    const HandleTheme = () => {
       
        if (isDarkTheme) {

            setTheme(themeWhite())
        }
        else {
            setTheme(themeDark())
        }
        setisDarkTheme(!isDarkTheme)

    }
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <TimeWrapper>

                <TimerArea>
                    <h1>{FormatTime(minutes)}</h1>
                    <span>:</span>
                    <h1>{FormatTime(seconds)}</h1>
                </TimerArea>

                <ButtonTimerArea>
                    <button onClick={() => HandleState(true)}><PlayIcon fill={HandleFill(``)}/></button>
                    <button onClick={() => HandleState(false)}><StopIcon fill={HandleFill(``)}/></button>
                    <button onClick={HandleAdd} ><AddIcon fill={HandleFill(``)}/></button>
                    <button onClick={HandleRemove}><RemoveIcon fill={HandleFill(``)}/></button>
                </ButtonTimerArea>

                <VolumeWrapper>
                    <SliderInput value={volume} HandleSlider={HandleSlider} fill={ theme.COLORS.MAIN}/>
                </VolumeWrapper>

            </TimeWrapper>

            <OptionsWrapper>

                <ButtonTheme
                    onClick={() => HandleSound("florest")}
                    isSelect={IsPlaying("florest")} >
                    <FlorestIcon fill={HandleFill("florest")} /></ButtonTheme>
                <ButtonTheme
                    onClick={() => HandleSound("rain")}
                    isSelect={IsPlaying("rain")}>
                    <RainIcon
                        fill={HandleFill("rain")} /></ButtonTheme>
                <ButtonTheme
                    onClick={() => HandleSound("house")}

                    isSelect={IsPlaying("house")}>
                    <HouseIcon
                        fill={HandleFill("house")} /></ButtonTheme>
                <ButtonTheme
                    onClick={() => HandleSound("fire")}

                    isSelect={IsPlaying("fire")}>
                    <FireIcon
                        fill={HandleFill("fire")} /></ButtonTheme>

            </OptionsWrapper>
            <audio ref={audioRef}  />
            <ToggleTheme onClick={HandleTheme} >
                {isDarkTheme ? <LigthThemeIcon fill={theme.COLORS.TEXT} /> : <DarkThemeIcon fill={theme.COLORS.TEXT} />}
                 </ToggleTheme>
        </Container>
        </ThemeProvider>
    )
}