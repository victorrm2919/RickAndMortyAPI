import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { until } from 'lit/directives/until.js';

import styles from './styles/ContentStyles';

import '../components/GetData';
import '../components/Card';
import '../components/Pagination';

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
		this.updateContent = false;
		this.showModal = false
	}

	_receiveData(e) {
		const data = e.detail;
		this.cards = data.results;
		this.nextPage = data.info.next;
		this.previousPage = data.info.prev;
		this.pages = data.info.pages;
	}

	_changePage(e) {
		const action = e.detail;
		this.cards = undefined;
		action === 'next' && this.pageActive++;
		action === 'previous' && this.pageActive--;
		action !== 'next' && action !== 'previous' && (this.pageActive = action);
		this._selectPage(this.pageActive);
	}

	_selectPage(page) {
		const ref = this.nextPage;
		const arrRef = ref.split('?');
		const newUrl = `${arrRef[0]}?page=${page}`;
		this.cards = undefined;
		this.url = newUrl;
		this.pageActive = page;
	}



	get contentApp() {
		return html`
			<div class="content">
				<div class="cards">
					${when(
						this.cards.length > 0,
						() => this.cardsApp,
						() => html`<p>No existen datos.</p>`
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
				></card-character>
			`
		)}`;
	}

	get getData() {
		return html`
			${until([
				html`<get-data
					.urlApi=${this.url}
					@getDataApi=${this._receiveData}
				></get-data>`,
				this.loadingTemplate,
			])}
		`;
	}

	get loadingTemplate() {
		return html` <p>Cargando...</p> `;
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
				.pageActive=${this.pageActive}
				.updateContent=${this.updateContent}
			></controller-content>
			${when(
				!this.cards,
				() => this.getData,
				() => this.contentApp
			)}
		`;
	}
}
customElements.define('app-content', Content);
