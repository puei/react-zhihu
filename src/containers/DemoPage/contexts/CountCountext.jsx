import React, { useContext, useState } from 'react'

// context:上下文__创建context 等于创建了一个让所有组件都能取得同一个值的 上下文

const CountContext = React.createContext()

function CountProvider({ children }) {
	const [count, setCount] = useState(0)

	const value = {
		count,
		setCount,
	}

	return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
	const { count, setCount } = useContext(CountContext)

	function countDouble() {
		setCount(count + 2)
	}

	return {
		count,
		setCount,
		countDouble,
	}
}

export { CountContext, CountProvider, useCount }