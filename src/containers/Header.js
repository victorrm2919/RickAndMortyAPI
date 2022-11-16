import { LitElement, html, css } from 'lit';
import styles from './styles/HeaderStyles';

export class Header extends LitElement {
	static properties = {
		title: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.title = 'Envía un titulo';
	}

	changeTheme(e) {
		console.log(e);
	}

	render() {
		return html`
			<div class="header">
				<h1>${this.title}</h1>
			</div>
		`;
	}
}
customElements.define('header-content', Header);
