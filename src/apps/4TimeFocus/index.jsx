import { Container, TimeWrapper, TimerArea, ButtonTimerArea, OptionsWrapper, VolumeWrapper, ButtonTheme } from "./style";
import { PlayIcon, StopIcon, AddIcon, RemoveIcon, FireIcon, FlorestIcon, HouseIcon, RainIcon } from "./assets/icons";

import React, { useState, useEffect, useRef } from 'react';
import { SliderInput } from "./components/slider";

export const TimeFocus = () => {

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
            return "#323238"
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
        if (minutes === 0) return
        SetMinutes(minutes => minutes - 5)
    }
    return (
        <Container>
            <TimeWrapper>

                <TimerArea>
                    <h1>{FormatTime(minutes)}</h1>
                    <span>:</span>
                    <h1>{FormatTime(seconds)}</h1>
                </TimerArea>

                <ButtonTimerArea>
                    <button onClick={() => HandleState(true)}><PlayIcon /></button>
                    <button onClick={() => HandleState(false)}><StopIcon /></button>
                    <button onClick={HandleAdd} ><AddIcon /></button>
                    <button onClick={HandleRemove}><RemoveIcon /></button>
                </ButtonTimerArea>

                <VolumeWrapper>
                    <SliderInput value={volume} HandleSlider={HandleSlider} />
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
        </Container>
    )
}