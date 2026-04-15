import React, { useRef, useState } from "react";

const Timer = () => {
    const [status, setStatus] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const [formData, setFormData] = useState({
        hour: "",
        minute: "",
        second: "",
    });
    const timeRef = useRef(null);

    const formatTime = (data) => {
        if (data === "" || data === null || data === undefined) {
            return "00";
        }
        return String(data).padStart(2, "0");
    };

    const handleChange = (e) => {
        if (status) return;
        const { name, value } = e.target;
        if (value === '') {
            setFormData((prev) => ({
                ...prev,
                [name]: ''
            }));
            return;
        }

        const num = Number(value);
        if (num >= 0 && num <= 99) {
            setFormData((prev) => ({
                ...prev,
                [name]: num
            }));
        }
    }

    const startTime = () => {
        if (timeRef.current) return;
        setStatus(true)
        timeRef.current = setInterval(() => {
            setFormData((prev) => {
                let hour = Number(prev?.hour) || 0;
                let minute = Number(prev?.minute) || 0;
                let second = Number(prev?.second) || 0;

                let totalTime = hour * 3600 + minute * 60 + second;

                if (totalTime <= 0) {

                    clearInterval(timeRef.current);
                    timeRef.current = null;
                    setStatus(false)
                    return {
                        hour: '',
                        minute: '',
                        second: ''
                    };
                }
                totalTime--;

                const newHour = Math.floor(totalTime / 3600);
                const newMinute = Math.floor((totalTime % 3600) / 60);
                const newSecond = totalTime % 60;

                return {
                    hour: newHour,
                    minute: newMinute,
                    second: newSecond
                }
            });
        }, 1000)
    };

    const stopTime = () => {

        clearInterval(timeRef.current);
        timeRef.current = null;
        setStatus(false)
    };

    const resetTime = () => {
        stopTime();
        setFormData({
            hour: "",
            minute: "",
            second: "",
        })
    };

    return (
        <div className="counter_section">
            <div className="timer_hed">CountDown</div>
            <div className="timer_Sec">
                <div className="time">
                    <p>Hours</p>
                    <input
                        name="hour"
                        type="number"
                        onChange={handleChange}
                        value={
                            activeField === "hour"
                                ? formData?.hour
                                : formatTime(formData?.hour)
                        }
                        onFocus={() => setActiveField("hour")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
                <div className="colon">:</div>
                <div className="time">
                    <p>Minutes</p>
                    <input
                        name="minute"
                        type="number"
                        onChange={handleChange}
                        value={
                            activeField === "minute"
                                ? formData?.minute
                                : formatTime(formData?.minute)
                        }
                        onFocus={() => setActiveField("minute")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
                <div className="colon">:</div>
                <div className="time">
                    <p>Seconds</p>
                    <input
                        name="second"
                        type="number"
                        onChange={handleChange}
                        value={
                            activeField === "second"
                                ? formData?.second
                                : formatTime(formData?.second)
                        }
                        onFocus={() => setActiveField("second")}
                        onBlur={() => setActiveField(null)}
                    />
                </div>
            </div>
            <div className="div_btn">
                {!status && (
                    <button className="start" onClick={startTime}>
                        Start
                    </button>
                )}
                {status && (
                    <button className="stop" onClick={stopTime}>
                        Stop
                    </button>
                )}
                <button className="reset" onClick={resetTime}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
