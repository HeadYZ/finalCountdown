import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
	const inputRef = useRef()
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
	const userLost = remainingTime <= 0
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
	useImperativeHandle(ref, () => {
		return {
			open() {
				inputRef.current.showModal()
			},
		}
	})
	return (
		<dialog ref={inputRef} className='result-modal' onClose={onReset}>
			{userLost && <h2>You Lost</h2>}
			{!userLost && <h2>Your score: {score} </h2> }
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				Yout stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form method='dialog' onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	)
})

export default ResultModal
