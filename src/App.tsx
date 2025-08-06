import './App.css'
import TypewriterText from './components/TypewriterText/TypewriterText.controller'
import useFlag from './hooks/useFlag'

function App() {
	const { flag, loading, error } = useFlag()

	return (
		<div className='App'>
			<div>Ramp - Capture The Flag</div>
			{error !== null && <div>Error...</div>}
			{loading && <div>Loading...</div>}
			<TypewriterText text={flag} interval={300} />
		</div>
	)
}

export default App
