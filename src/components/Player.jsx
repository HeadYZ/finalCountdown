import { useRef, useState } from 'react'

export default function Player() {
	const [playerName, setPlaterName] = useState(null)

	const userInput = useRef()

	const handleClick = () => {
		setPlaterName(userInput.current.value)
	}

	return (
		<section id='player'>
			<h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
			<p>
				<input type='text' ref={userInput} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	)
}
