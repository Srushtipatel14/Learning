import React, { useRef, useState } from "react";

const Countdown = () => {
    const [formData, setFormData] = useState({ hour: '', minute: '', second: '' });
    const [status, setStatus] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const timeRef = useRef(null);

    const formatTime = (data) => {
        if (data === '' || data === null || data === undefined) {
            return '00';
        }
        return String(data).padStart(2, '0')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (value === '') {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
            return;
        }

        const num = Number(value);

        if (value >= 0 && value <= 99) {
            setFormData((prev) => ({
                ...prev,
                [name]: num
            }))
        }


    };

    const startTimer = () => {
        if (timeRef.current) return;
        timeRef.current = setInterval(() => {
            setFormData((prev) => {
                let hour = Number(prev?.hour) || 0;
                let minute = Number(prev?.minute) || 0;
                let second = Number(prev?.second) || 0;

                let totalTime = hour * 3600 + minute * 60 + second;
                if (totalTime <= 0) {
                    setStatus(false);
                    clearInterval(timeRef.current);
                    timeRef.current = null;
                    setFormData({ hour: '', minute: '', second: "" })
                    return;
                }
                setStatus(true)
                totalTime--;
                const hour1 = Math.floor((totalTime / 3600));
                const minute1 = Math.floor((totalTime % 3600) / 60);
                const second1 = totalTime % 60
                return { hour: hour1, minute: minute1, second: second1 }
            })
        }, 1000)
    }

    const stopTimer = () => {
        if (timeRef.current) {
            setStatus(false)
            clearInterval(timeRef.current)
            timeRef.current = null;
            return;
        }
    }

    const resetTimer = () => {
        stopTimer();
        setFormData({ hour: '', minute: '', second: "" })
    }

    return (
        <div className="container">
            <div className="heading">
                <p>Stop Watch</p>
            </div>
            <div className="parent">
                <div className="time">
                    <label>Hour</label>
                    <input
                        name="hour"
                        onChange={handleChange}
                        value={activeField !== 'hour' ? formatTime(formData?.hour) : formData?.hour}
                        type="number"
                        onFocus={() => setActiveField("hour")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center',marginTop:"40px",fontSize:"30px" }}>:</div>
                <div className="time">
                    <label>Minute</label>
                    <input
                        name="minute"
                        onChange={handleChange}
                        value={activeField !== 'minute' ? formatTime(formData?.minute) : formData?.minute}
                        type="number"
                        onFocus={() => setActiveField("minute")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center',marginTop:"40px",fontSize:"30px" }}>:</div>
                <div className="time">
                    <label>Second</label>
                    <input
                        name="second"
                        onChange={handleChange}
                        value={activeField !== 'second' ? formatTime(formData?.second) : formData?.second}
                        type="number"
                        onFocus={() => setActiveField("second")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
            </div>
            <div className="div_btn">
                {!status && (
                    <button className="start" onClick={startTimer}>
                        Start
                    </button>
                )}
                {status && (
                    <button className="stop" onClick={stopTimer}>
                        Stop
                    </button>
                )}
                <button className="reset" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Countdown;
