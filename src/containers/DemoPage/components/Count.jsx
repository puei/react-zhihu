import { useCount } from '../contexts/CountCountext'

function Count() {
	const { count, setCount } = useCount()

	return <h1 onClick={() => setCount(count + 1)}>{count}</h1>
}

export default Count