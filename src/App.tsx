import './App.css'
import TextTyper from './components/TextTyper'
import useFetch from './hooks/useFetch'
import useUrlFlag from './hooks/useUrlFlag'

function App() {
	const { urlFlag } = useUrlFlag()
	const { flag, loading, error } = useFetch(urlFlag)

	return (
		<div className='App'>
			<div>Challenge for Ramp</div>
			{error !== null && <div>Error...</div>}
			{loading && <div>Loading...</div>}
			<TextTyper text={flag} interval={500} />
		</div>
	)
}

export default App
