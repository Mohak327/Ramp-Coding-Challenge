import { useState, useEffect, FC } from 'react'
import TypewriterTextView from './TypewriterText.view'

const TextTyper: FC<TypewriterTextProps> = ({ text = '', interval = 100 }) => {
	const [typedText, setTypedText] = useState('')

	useEffect(() => {
		let localTypingIndex = 0
		let localTyping = ''
		const printer = setInterval(() => {
			if (localTypingIndex < text.length) {
				setTypedText((localTyping += text[localTypingIndex]))
				localTypingIndex++
			}
		}, interval)

		return () => {
			clearInterval(printer)
		}
	}, [text, interval])

	return <TypewriterTextView typedText={typedText} />
}

export default TextTyper
