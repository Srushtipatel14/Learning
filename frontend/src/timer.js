import React, { useRef, useState } from 'react'

const Timer = () => {

    const [formData, setFormData] = useState({ hour: '', minute: '', second: '' });
    const timeRef = useRef(null);
    const [activeField, setActiveFiel] = useState(null);
    const [status, setStatus] = useState(false)

    const formatTime = (data) => {
        if (data === null || data === '' || data === undefined) {
            return '00'
        }
        return String(data).padStart(2, '0')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value === '') {
            setFormData((prev) => ({
                ...prev,
                [name]: ''
            }));
            return;
        }
        if (value >= 0 && value <= 99) {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const startTimer = () => {
        if (timeRef.current) return;
        setStatus(true)
        timeRef.current = setInterval(() => {
            setFormData((prev) => {
                let hour = Number(prev?.hour) || 0;
                let minute = Number(prev?.minute) || 0;
                let second = Number(prev?.second) || 0;

                let totalSeconds = hour * 3600 + minute * 60 + second;

                if (totalSeconds <= 0) {
                    clearInterval(timeRef.current);
                    timeRef.current = null;
                    return prev;
                }

                totalSeconds--;

                const newHour = Math.floor(totalSeconds / 3600);
                const newMinute = Math.floor((totalSeconds % 3600) / 60);
                const newSecond = totalSeconds % 60;

                return {
                    hour: newHour,
                    minute: newMinute,
                    second: newSecond
                };
            });
        }, 1000)
    }

    const stopTimer = () => {
        setStatus(false)
        
        clearInterval(timeRef.current)
        timeRef.current = null
    }

    const resetTimer = () => {
        setStatus(false)
        stopTimer()
        setFormData({ hour: '', minute: '', second: '' });
    }

    return (
        <div className='counter_section'>
            <div className='timer_hed'>CountDown</div>
            <div className='timer_Sec'>
                <div>
                    <p>Hours</p>
                    <input
                        name='hour'
                        value={activeField !== 'hour' ? formatTime(formData?.hour) : formData?.hour}
                        type='number'
                        onChange={handleChange}
                        onFocus={() => setActiveFiel("hour")}
                        onBlur={() => setActiveFiel(null)}
                    />
                </div>
                <div>
                    <p>Minutes</p>
                    <input
                        name='minute'
                        value={activeField !== 'minute' ? formatTime(formData?.minute) : formData?.minute}
                        type='number'
                        onChange={handleChange}
                        onFocus={() => setActiveFiel("minute")}
                        onBlur={() => setActiveFiel(null)}
                    />
                </div>
                <div>
                    <p>Seconds</p>
                    <input
                        name='second'
                        value={activeField !== 'second' ? formatTime(formData?.second) : formData?.second}
                        type='number'
                        onChange={handleChange}
                        onFocus={() => setActiveFiel("second")}
                        onBlur={() => setActiveFiel(null)}
                    />
                </div>
            </div>
            <div className='btn_Sec'>
                {!status && (
                    <button className='start' onClick={startTimer}>Start</button>
                )}
                {status && (
                    <button className='stop' onClick={stopTimer}>Stop</button>
                )}
                <button className='reset' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;
