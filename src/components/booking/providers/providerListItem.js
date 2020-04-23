import React from "react";
import Book from '../../../assets/book.png'

export default function ProvidersListItem(props) {
	return (
		<div className={'provider-item'}>
			<div className={'provider-image'}><img src={props.element.img} alt={'provider'}/></div>
			<div className={'provider-name'}>{props.element.name}</div>
			<div className={'book-provider-icon'}><img src={Book} alt={'book me'}/></div>
		</div>
	);
};
