import { useState, useEffect, useRef } from 'react'

interface ITimer {
    days: number | string
    hours: number | string
    minutes: number | string
    seconds: number | string
}

export function useCountdown(target: string) {
    const [timer, setTimer] = useState<ITimer>({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    let intervalRef = useRef(0)

    function startTimer(target: string) {

        const date = new Date(target).getTime()
        const intervalId = setInterval(() => {
            const now = new Date().getTime()
            const d = date - now
            const { days, hours, minutes, seconds } = getTimerValues(d)
            intervalRef.current = intervalId
            // debugger
            if (d < 0) {
                clearInterval(intervalRef.current)
            } else {
                setTimer({
                    ...timer,
                    days: padOne(days),
                    hours: padOne(hours),
                    minutes: padOne(minutes),
                    seconds: padOne(seconds)
                })
            }
        }, 1000)

    }

    useEffect(() => {
        startTimer(target)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return timer
}

function getTimerValues(d: number) {
    const days = Math.floor(d / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((d % (1000 * 60)) / 1000)

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

function padOne(x: number) {
    return (x < 10 ? "0" : "") + x
}