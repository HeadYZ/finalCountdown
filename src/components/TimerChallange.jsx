import { useRef, useState } from 'react'

const TimerChallange = ({ title, targetTime }) => {
	const [timerStarted, setTimerStarted] = useState(false)
	const [timerExpired, setTimerExpired] = useState(false)
	const timerRef = useRef()

	const handleStart = () => {
		timerRef.current = setTimeout(() => {
			setTimerExpired(true)
		}, targetTime * 1000)
		setTimerStarted(true)
	}

	const handleStop = () => {
		clearTimeout(timerRef.current)
	}
	return (
		<section className='challenge'>
			<h2>{title}</h2>
			{timerExpired && <p>You lost!</p>}
			<p className='challenge-time'>
				{targetTime} second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challange</button>
			</p>
			<p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'} / </p>
		</section>
	)
}

export default TimerChallange
