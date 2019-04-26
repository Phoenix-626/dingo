import React from 'react';
import { ArtistList } from '../Lists/ListArtist';

export class ArtistListPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <ArtistList AppInstance={this.props.AppInstance} data={this.props.data} />;
	}
}
