import React, { useState } from "react";

export const NurseryFlowersContext = React.createContext();

export const NurseryFlowersProvider = props => {

	const [nurseryFlowers, setNurseryFlowers] = useState([]);

	const getNurseryFlowers = () => {
		return fetch(`http://localhost:8088/nurseryFlowers`)
		.then(res => res.json())
		.then(setNurseryFlowers)
	}

	const getNurseryFlowersFromNurseryId = id => nurseryFlowers.filter(nf => nf.nurseryId === parseInt(id));

	return <NurseryFlowersContext.Provider value={{
		nurseryFlowers, getNurseryFlowers, getNurseryFlowersFromNurseryId
	}}>
		{props.children}
	</NurseryFlowersContext.Provider>
}