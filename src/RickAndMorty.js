import { LitElement, html, css } from 'lit';

import './containers/Content';
import './containers/Header';
import './components/Modal';

export class App extends LitElement {
	static properties = {
		showModal: { type: Boolean },
		urlModal: { type: String },
	};

	static styles = [
		css`
			:host {
				position: relative;
				display: block;
				width:95%;
				max-width: 1200px;
				margin: auto;
			}
		`,
	];

	constructor() {
		super();
		this.showModal = false;
	}

	_openModal(e) {
		this.urlModal = e.detail;
		this.showModal = true;
		document.body.classList.add('modal--active');
	}

	_closeModal(e) {
		if (e.detail) {
			this.showModal = !e.detail;
			document.body.classList.remove('modal--active');
		}
	}

	render() {
		const url = 'https://rickandmortyapi.com/api/character';
		const title = 'Rick and Morty';
		return html`
			<header-content .title=${title}> </header-content>
			<app-content .url=${url} @viewCharacter=${this._openModal}></app-content>
			${this.showModal
				? html`<app-modal
						.url=${this.urlModal}
						@closeModal=${this._closeModal}
				  ></app-modal>`
				: undefined}
		`;
	}
}

customElements.define('rickandmorty-app', App);