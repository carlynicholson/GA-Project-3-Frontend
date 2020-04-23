import React, {useContext} from "react";
import ProvidersListItem from "./providerListItem";
import {AppContext} from "../../../App";

export default function ProvidersList() {
	const appContext = useContext(AppContext);
	const providerArr = [];
	let providerArray = this;

	function localServiceProvidersArr() {
		appContext.localProviders[0].forEach(provider => {
			if (provider.services[0].walk === true) {
				providerArr.push(provider);
			}
		});
	}
	localServiceProvidersArr();
	console.log(providerArr);

	for (let i = 0; i < providerArr.length; i++) {
		let tempArray = providerArr[i];
		console.log(tempArray);
		providerArray = providerArr.map((e, index) => {
			return (
				<ProvidersListItem
				element={e}
				key={index}
				/>
			);
		});
	}

	return (
		<div>{providerArray}</div>
	);
};
