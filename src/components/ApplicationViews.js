import React from "react"
import { Route } from "react-router-dom"
import { DistributorList } from "./distributors/DistributorList"
import { DistributorNurseryProvider } from "./distributors/DistributorNurseryProvider"
import { DistributorProvider } from "./distributors/DistributorProvider"
import { FlowerProvider } from "./flowers/FlowerProvider"
import { NurseryFlowersProvider } from "./nurseries/NurseryFlowers"
import { NurseryList } from "./nurseries/NurseryList"
import { NurseryProvider } from "./nurseries/NurseryProvider"
import { RetailerList } from "./retailers/RetailerList"
import { RetailerProvider } from "./retailers/RetailerProvider"

export const ApplicationViews = props => {

	return (
		<>
			<NurseryProvider>
				<NurseryFlowersProvider>
					<DistributorNurseryProvider>
						<FlowerProvider>
							<DistributorProvider>
								<NurseryList {...props}/>
							</DistributorProvider>
						</FlowerProvider>
					</DistributorNurseryProvider>
				</NurseryFlowersProvider>
			</NurseryProvider>
			<DistributorProvider>
				<DistributorList />
			</DistributorProvider>
			<RetailerProvider>
				<RetailerList />
			</RetailerProvider>
		</>
	)
}