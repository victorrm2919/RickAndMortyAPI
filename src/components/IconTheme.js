import { LitElement, html } from 'lit';
import styles from './styles/IconThemeStyle';
import {ifDefined} from 'lit/directives/if-defined.js';

export class IconTheme extends LitElement {
	static styles = [styles];

	static get properties() {
		return {
			iconTheme: { type: Object },
			themeIcon: {type: String}
		};
	}

	_handleClick() {

		console.log(this.iconTheme);
		this.dispatchEvent(
			new CustomEvent('changeTheme', {
				detail: 'change',
			})
		);
	}

	render() {
		return html`
			<a class="label__icon ${ifDefined(this.themeIcon)}" @click=${this._handleClick}>
				<figure class="icon__theme">
					<img src=${this.iconTheme} />
				</figure>
			</a>
		`;
	}
}
customElements.define('icon-theme', IconTheme);
