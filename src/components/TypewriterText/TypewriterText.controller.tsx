import { useState, useEffect, FC } from 'react'
import TypewriterTextView from './TypewriterText.view'

const TextTyper: FC<TypewriterTextProps> = ({ text = '', interval = 100 }) => {
	const [typedText, setTypedText] = useState('')

	useEffect(() => {
		if (!text) {
			setTypedText('')
			return
		}
		let i = 0
		setTypedText('')
		const printer = setInterval(() => {
			i++
			setTypedText(text.slice(0, i))
			if (i >= text.length) {
				clearInterval(printer)
			}
		}, interval)
		return () => clearInterval(printer)
	}, [text, interval])

	return <TypewriterTextView text={typedText} />
}

export default TextTyper
