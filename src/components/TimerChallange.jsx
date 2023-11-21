import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallange = ({ title, targetTime }) => {
	const [timerStarted, setTimerStarted] = useState(false)
	const [timerExpired, setTimerExpired] = useState(false)
	const timerRef = useRef()
	const dialog = useRef()

	const handleStart = () => {
		timerRef.current = setTimeout(() => {
			setTimerExpired(true)
			dialog.current.open()
		}, targetTime * 1000)
		setTimerStarted(true)
	}

	const handleStop = () => {
		clearTimeout(timerRef.current)
	}
	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result='lost' />
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challange</button>
				</p>
				<p className={timerStarted ? 'active' : undefined}>
					{timerStarted ? 'Time is running...' : 'Timer inactive'} /{' '}
				</p>
			</section>
		</>
	)
}

export default TimerChallange
