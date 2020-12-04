import React, { useContext, useState } from "react"
import { NurseryFlowersContext } from "../nurseries/NurseryFlowers"

export const FlowerContext = React.createContext()

export const FlowerProvider = props => {

	const [flowers, setFlowers] = useState([])
	const { getNurseryFlowersFromNurseryId } = useContext(NurseryFlowersContext);

	const getFlowers = () => {
		return fetch(`http://localhost:8088/flowers`)
		.then(res => res.json())
		.then(setFlowers);
	}

	const getFlowerById = id => {
		console.log(flowers);
		console.log(id)
		return flowers.find(f => f.id === parseInt(id));
	}

	const getFlowersForNurseryFromId = id => {
		const rels = getNurseryFlowersFromNurseryId(id);
		const flowers = rels.map(rel => {
			if(rel.nurseryId === parseInt(id)) {
				return getFlowerById(rel.flowerId);
			}
		})
		return flowers;
	}

	return <FlowerContext.Provider value={{
		flowers, getFlowers, getFlowerById, getFlowersForNurseryFromId
	}}>
		{props.children}
	</FlowerContext.Provider>
}