import { LitElement, html } from 'lit';

import styles from './styles/LoaderStyles'

export class Loader extends LitElement {
	static styles = [styles];

	render() {
		return html`<div class="chaotic-orbit"></div>`;
	}
}
customElements.define('app-loader', Loader);
