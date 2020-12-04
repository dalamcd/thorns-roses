import React, { useState } from "react"

export const DistributorNurseryContext = React.createContext();

export const DistributorNurseryProvider = props => {

	const [distributorNurseries, setDistributorNurseries] = useState([]);

	const getDistributorNurseries = () => {
		return fetch(`http://localhost:8088/distributorNurseries`)
		.then(res => res.json())
		.then(setDistributorNurseries);
	}

	const getDistributorNurseryFromDistributorId = id => distributorNurseries.filter( ns => {
		console.log(ns)
		return ns.distributorId === parseInt(id)
	});

	const getDistributorNurseryFromNurseryId = id => distributorNurseries.filter(ns => ns.nurseryId === parseInt(id));

	return <DistributorNurseryContext.Provider value={{
		distributorNurseries, getDistributorNurseries, getDistributorNurseryFromNurseryId, getDistributorNurseryFromDistributorId
	}}>
		{props.children}
	</DistributorNurseryContext.Provider>
}