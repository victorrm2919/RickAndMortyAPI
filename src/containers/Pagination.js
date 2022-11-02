import { LitElement, html, css } from 'lit';
import styles from './styles/PaginationStyles';

export class Controller extends LitElement {
	static properties = {
		buttons: { type: Object },
		active: { type: Number },
		lastPage: { type: Number },
		pageActive: { type: Number },
	};

	static styles = [styles];

	constructor() {
		super();
		this.buttons = {
			previous: { name: '<', disabled: true },
			pages: 10,
			next: { name: '>', disabled: false },
		};
		this.lastPage = 20;
		this.pageActive = 1;
	}

	_handleClick(action) {
		this.dispatchEvent(
			new CustomEvent('onAction', {
				detail: action,
			})
		);
	}

	_createPagination(pages) {
		const pagination = [];
		const lastPage = this.lastPage < pages ? this.lastPage : pages;

		if (pages === 1) {
			return [1];
		}

		for (let page = 0; page < lastPage; page++) {
			pagination.push(page + 1);
		}

		pages !== lastPage && (pagination[lastPage] = '...');
		return pagination;
	}
	k;

	get pagination() {
		return this._createPagination(this.buttons.pages);
	}

	render() {
		return html`
			<div class="pagination">
				<button
					id="btnPrev"
					@click=${() => this._handleClick('previous')}
					?disabled=${this.buttons.previous.disabled}
				>
					${this.buttons.previous.name}
				</button>

				${this.pagination.map(
					(page) =>
						html` <button class="btnPage ${this.pageActive === page ? 'active' : ''}">${page}</button> `
				)}

				<button
					id="btnNext"
					@click=${() => this._handleClick('next')}
					?disabled=${this.buttons.next.disabled}
				>
					${this.buttons.next.name}
				</button>
			</div>
		`;
	}
}
customElements.define('controller-content', Controller);
