import { LitElement, html, css } from 'lit';

export class GetData extends LitElement {
	static properties = {
		urlApi: { type: String },
		method: { type: String },
	};

	static styles = css`
		:host {
			display: none;
		}
	`;

	firstUpdated() {
		this.getData(this.urlApi);
	}

	_sendData(data) {
		this.dispatchEvent(
			new CustomEvent('getDataApi', {
				detail: { ...data },
				bubbles: true,
				composed: true,
			})
		);
	}

	getData(url) {
		fetch(url)
			.then((response) => response.json())
			.then((data) => this._sendData(data))
			.catch((error) => console.warn('Something went wrong', error));
	}
}
customElements.define('get-data', GetData);
