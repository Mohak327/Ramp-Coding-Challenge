import './App.css'
import TypewriterText from './components/TypewriterText/TypewriterText.controller'
import useFetch from './hooks/useFetch'
import useUrlFlag from './hooks/useUrlFlag'

function App() {
	const { urlFlag } = useUrlFlag()
	const { flag, loading, error } = useFetch(urlFlag)

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
