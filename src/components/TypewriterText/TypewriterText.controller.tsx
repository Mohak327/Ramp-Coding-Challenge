import { useState, useEffect, FC } from 'react'
import TypewriterTextView from './TypewriterText.view'

const TextTyper: FC<TypewriterTextProps> = ({ text = '', interval = 100 }) => {
	const [displayed, setDisplayed] = useState('')

	useEffect(() => {
		if (!text) {
			setDisplayed('')
			return
		}
		let i = 0
		setDisplayed('')
		const printer = setInterval(() => {
			i++
			setDisplayed(text.slice(0, i))
			if (i >= text.length) {
				clearInterval(printer)
			}
		}, interval)
		return () => clearInterval(printer)
	}, [text, interval])

	return <TypewriterTextView text={displayed} />
}

export default TextTyper
