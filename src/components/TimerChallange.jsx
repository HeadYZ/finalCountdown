import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallange = ({ title, targetTime }) => {
	const [remainingTime, setRemainingTime] = useState(targetTime * 1000)
	const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000
	const timerRef = useRef()
	const dialog = useRef()

	if (remainingTime <= 0) {
		clearInterval(timerRef.current)
		dialog.current.open()
	}
	const handleReset = () => {
		setRemainingTime(targetTime * 1000)
	}

	const handleStart = () => {
		timerRef.current = setInterval(() => {
			setRemainingTime(prevRemainingTime => prevRemainingTime - 10)
		}, 10)
	}

	const handleStop = () => {
		dialog.current.open()
		clearInterval(timerRef.current)
	}
	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				result='lost'
				remainingTime={remainingTime}
				onReset={handleReset}
			/>
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? 'Stop' : 'Start'} Challange
					</button>
				</p>
				<p className={timerIsActive ? 'active' : undefined}>
					{timerIsActive ? 'Time is running...' : 'Timer inactive'} /{' '}
				</p>
			</section>
		</>
	)
}

export default TimerChallange
