import { useState, useEffect } from 'react';

function Timer() {

	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [date] = useState(new Date().toLocaleDateString());
	const [showTime, setShowTime] = useState(true);

	function currentTime() {
		setShowTime(true);
	}

	function currentDate() {
		setShowTime(false);
	}

	const handleTimer = () => setTime(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(handleTimer, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
        <div className="container">
            <p>{showTime ? "Time" : "Date"}</p>
			<h1>{showTime ? time : date}</h1>
			<button className="date" onClick={currentDate}>
				Check Date
			</button>
			<button className="time" onClick={currentTime}>
				Check Time
			</button>
		</div>
	);
}
export default Timer;
