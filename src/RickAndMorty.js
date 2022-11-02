import { LitElement, html, css } from 'lit';
import './containers/Content';
import './containers/Header';

export class App extends LitElement {
	render() {
		const url = 'https://rickandmortyapi.com/api/character';
		const title = 'Rick and Morty';
		return html`
			<header-content .title=${title}> </header-content>
			<app-content .url=${url}></app-content>
		`;
	}
}
