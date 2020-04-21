import React from "react";
import ProvidersListItem from "./providerListItem";

export default function ProvidersList() {

	return (
		<ProvidersListItem
			key={index}
			index={index}
			image={image}
			name={name}
		/>
	)
}
