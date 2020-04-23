import React, {useContext} from "react";
import ProvidersList from "./providerList";
import {AppContext} from "../../../App";

export default function Providers() {
	const appProps = useContext(AppContext);
	return (
		<div>
			<h2>{appProps.service}</h2>
			<ProvidersList/>
		</div>
	);
};
