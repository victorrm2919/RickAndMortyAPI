import { LitElement, html, css } from 'lit';
import styles from '../components/styles/PaginationStyles';

export class Controller extends LitElement {
	static properties = {
		buttons: { type: Object },
		active: { type: Number },
		lastPage: { type: Number },
		pageActive: { type: Number },
		initPage: { type: Number },
	};

	static styles = [styles];

	constructor() {
		super();
		this.buttons = {
			previous: { name: '<', disabled: true },
			pages: 10,
			next: { name: '>', disabled: false },
		};
		this.lastPage = 15;
		this.rangePages = 15;
		this.pageActive = 1;
		this.initPage = 0;
	}

	_handleClick(action, index = 0) {
		let actionHandle = action;

		if (this.action !== 'next' || this.action !== 'previous') {
			let numberPage = action;
			if (action === '...') {
				numberPage = index === 0 ? this.initPage : this.lastPage + 1;
			}

			actionHandle = numberPage;
		}

		this.dispatchEvent(
			new CustomEvent('onAction', {
				detail: actionHandle,
			})
		);
	}

	_selectPage(page, index) {
		this.dispatchEvent(
			new CustomEvent('selectPage', {
				detail: numberPage,
			})
		);
	}

	_createPagination(pages) {
		const pagination = [];

		if (pages === 1) {
			return [1];
		}

		for (let page = this.initPage; page < this.lastPage; page++) {
			pagination.push(page + 1);
		}

		this._redefinePagination();
		this.initPage > 1 && pagination.unshift('...');
		pages !== this.lastPage && pagination.push('...');

		return pagination;
	}

	_redefinePagination() {
		if (this.pageActive > this.lastPage) {
			this.initPage = this.pageActive - 1;
		}

		if (this.pageActive < this.initPage + 1) {
			this.initPage = this.initPage - this.rangePages;
			this.lastPage = this.pageActive;
		}

		if (this.pageActive > this.lastPage) {
			const sumPages =
				this.initPage + this.rangePages > this.buttons.pages
					? this.buttons.pages - this.lastPage
					: 15;

			this.lastPage = this.initPage + sumPages;
		}
	}

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
					(page, index) =>
						html`
							<button
								class="btnPage ${this.pageActive === page ? 'active' : ''}"
								@click=${() => this._handleClick(page, index)}
							>
								${page}
							</button>
						`
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
