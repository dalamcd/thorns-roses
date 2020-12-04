import React, { useContext, useState } from "react"
import { DistributorNurseryContext } from "./DistributorNurseryProvider";

export const DistributorContext = React.createContext();

export const DistributorProvider = props => {

	console.log(props);
	const [distributors, setDistributors] = useState([]);

	//const { getDistributorNurseryFromDistributorId } = useContext(DistributorNurseryContext)

	const getDistributors = () => {
		return fetch(`http://localhost:8088/distributors`)
		.then(res => res.json())
		.then(setDistributors)
	}

	const getDistributorById = id => distributors.find(d => d.id === parseInt(id));

	// const getDistributorForNurseryFromId = id => {
	// 	const rels = getDistributorNurseryFromDistributorId(id);
	// 	const distributors = rels.map(rel => {
	// 		if(rel.distributorId === parseInt(id)) {
	// 			return getDistributorById(rel.distributorId);
	// 		}
	// 	})
	// 	return distributors;
	// }

	return <DistributorContext.Provider value={{
		distributors, getDistributorById, getDistributors, //getDistributorForNurseryFromId
	}}>
		{props.children}
	</DistributorContext.Provider>
}