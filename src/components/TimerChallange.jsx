const TimerChallange = ({ title, targetTime }) => {
	return (
		<section className='challange'>
			<h2>{title}</h2>
			<p className='challange-time'>
				{targetTime} second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button>Start Challange</button>
			</p>
			<p className=''>Time is running... / Timer inactive</p>
		</section>
	)
}

export default TimerChallange
