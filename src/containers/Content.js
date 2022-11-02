import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';

import styles from './styles/ContentStyles';

import '../components/GetData';
import '../components/Card';
import './Pagination';

export class Content extends LitElement {
	static properties = {
		url: { type: String },
		cards: { type: Array },
		infoSelector: { type: Array },
		nextPage: { type: String },
		previousPage: { type: String },
		pages: { type: Number },
		pageActive: { type: Number },
	};

	static styles = [styles];

	constructor() {
		super();
		this.buttons = [];
		this.pageActive = 1;
	}

	_receiveData(e) {
		const data = e.detail;
		console.log(data);
		this.cards = data.results;
		this.nextPage = data.info.next;
		this.previousPage = data.info.prev;
		this.pages = data.info.pages;
	}

	_changePage(e) {
		const action = e.detail;

		this.cards = undefined;

		if (action === 'next') {
			this.url = this.nextPage;
			this.pageActive++;
		}

		if (action === 'previous') {
			this.url = this.previousPage;
			this.pageActive--;
		}
	}

	_selectPage(e) {
		const page = e.detail;
		const ref = this.nextPage;
		const arrRef = ref.split('?');
		const newUrl = `${arrRef[0]}?page=${page}`;
		this.cards = undefined;
		this.url = newUrl;
		this.pageActive = page;
	}

	_openModal(e) {
		console.log(e.detail);
	}

	get contentApp() {
		return html`
			<div class="content">
				<div class="cards">
					${when(
						this.cards.length > 0,
						() => this.cardsApp,
						() => html`<p>Selecciona un opción con datos.</p>`
					)}
				</div>
			</div>
		`;
	}

	get cardsApp() {
		return html`${this.cards.map(
			(character) => html`
				<card-character
					.character=${character}
					@viewCharacter=${this._openModal}
				></card-character>
			`
		)}`;
	}

	render() {
		const pagination = {
			previous: { name: '<', disabled: !this.previousPage },
			pages: this.pages,
			next: { name: '>', disabled: !this.nextPage },
		};

		return html`
			<controller-content
				.buttons=${pagination}
				@onAction=${this._changePage}
				@selectPage=${this._selectPage}
				pageActive=${this.pageActive}
			></controller-content>
			${when(
				!this.cards,
				() => html`
					<get-data
						urlApi=${this.url}
						@getDataApi=${this._receiveData}
					></get-data>
					<p>Cargando ...</p>
				`,
				() => {
					return this.contentApp;
				}
			)}
		`;
	}
}
customElements.define('app-content', Content);
