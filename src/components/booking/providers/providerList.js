import React, {useContext} from "react";
import ProvidersListItem from "./providerListItem";
import {getProviderByZip} from "../../../services/api-helper";
import {AppContext} from "../../../App";

export default function ProvidersList() {
	const appContext = useContext(AppContext);
	const providerArr = getProviderByZip(appContext.loggedIn.user.zip)

	return (
		<ProvidersListItem
			key={index}
			index={index}
			image={image}
			name={name}
		/>
	)
}
