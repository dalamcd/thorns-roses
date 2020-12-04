import React, { useState } from "react"

export const NurseryContext = React.createContext();

export const NurseryProvider = props => {

	const [nurseries, setNurseries] = useState([])

	const getNurseries = () => {
		return fetch(`http://localhost:8088/nurseries`)
		.then(res => res.json())
		.then(setNurseries);
	}

	const getNurseryById = id => nurseries.find(n => n.id === parseInt(id));

	return <NurseryContext.Provider value={{
		nurseries, getNurseries, getNurseryById
	}}>
		{props.children}
	</NurseryContext.Provider>
}