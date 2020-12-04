import React, { useContext, useEffect } from "react"
import { DistributorNurseryContext } from "../distributors/DistributorNurseryProvider";
import { DistributorContext } from "../distributors/DistributorProvider";
import { FlowerContext } from "../flowers/FlowerProvider";
import { Nursery } from "./Nursery";
import { NurseryFlowersContext } from "./NurseryFlowers";
import { NurseryContext } from "./NurseryProvider"

export const NurseryList = props => {

	const { nurseries, getNurseries } = useContext(NurseryContext);
	const { getDistributorNurseries, getDistributorNurseryFromNurseryId } = useContext(DistributorNurseryContext);
	const { getNurseryFlowers, getNurseryFlowersFromNuseryId } = useContext(NurseryFlowersContext);
	const { getFlowers, getFlowersForNurseryFromId } = useContext(FlowerContext);
	const { getDistributors, getDistributorForNurseryFromId } = useContext(DistributorContext);

	useEffect(() => {
		getNurseryFlowers()
		.then(getDistributorNurseries)
		.then(getFlowers)
		.then(getDistributors)
		.then(getNurseries);
	}, [])

	return (
		<>
		<section className="nurseryList">
			{nurseries.map(n => {
				//const distributors = getDistributorForNurseryFromId(n.id);
				const flowers = getFlowersForNurseryFromId(n.id);
				return <Nursery key={n.id} nursery={n} distributors={[]} flowers={flowers} />
			})}
		</section>
		</>
	)
}