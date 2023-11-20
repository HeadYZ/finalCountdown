import { useState } from 'react'

const TimerChallange = ({ title, targetTime }) => {
	const [timerExpired, setTimerExpired] = useState(false)
	const handleStart = () => {
		setTimeout(() => {
			setTimerExpired(true)
		}, targetTime * 1000)
	}
	return (
		<section className='challenge'>
			<h2>{title}</h2>
			{timerExpired && <p>You lost!</p>}
			<p className='challenge-time'>
				{targetTime} second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button onClick={handleStart}>Start Challange</button>
			</p>
			<p className=''>Time is running... / Timer inactive</p>
		</section>
	)
}

export default TimerChallange
