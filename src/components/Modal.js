import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { until } from 'lit/directives/until.js';

import styles from './styles/ModalStyles';
import './Loader';
import './GetData';

export class Modal extends LitElement {
	static properties = {
		url: { type: String },
		infoModal: { type: Object },
	};

	static styles = [styles];

	_dataModal(e) {
		this.infoModal = e.detail;
	}

	_closeModal() {
		this.dispatchEvent(new CustomEvent('closeModal', {
			detail: true
		}))
	}

	get modalBody() {
		return html`
			<div class="modal__header">
				<h3 class="modal__title">${this.infoModal.name}</h3>
				<button class="modal__close" @click=${this._closeModal}>
					X
				</button>
			</div>
			<div class="modal__body">
				<div class="modal__img">
					<img src=${this.infoModal.image} />
				</div>
				<div class="modal__info">
					<p>
						Status:
						<span
							>${this.infoModal.status}<span
								class="icon-status-${this.infoModal.status.toLowerCase()}"
							></span
						></span>
					</p>
					<p>Specie: <span>${this.infoModal.species}</span></p>
					<p>Gender: <span>${this.infoModal.gender}</span></p>
					<p>Origin: <span>${this.infoModal.origin.name}</span></p>
					<p>Location: <span>${this.infoModal.location.name}</span></p>
				</div>
			</div>
		`;
	}

	get getData() {
		return html`
			${until([
				html`<get-data
					.urlApi=${this.url}
					@getDataApi=${this._dataModal}
				></get-data>`,
				html`<app-loader></app-loader>`,
			])}
		`;
	}

	get contentModal() {
		return html`
			${when(
				!this.infoModal,
				() => this.getData,
				() => this.modalBody
			)}
		`;
	}

	render() {
		return html`
			<div class="modal">
				<div class="modal__content">${this.contentModal}</div>
			</div>
		`;
	}
}
customElements.define('app-modal', Modal);
