import { LitElement, html, css } from 'lit';
import styles from './styles/HeaderStyles';
import '../components/IconTheme';

import sun from '../icon/sun.png';
import moon from '../icon/moon.png';

const cookie = (name) =>
	`; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

export class Header extends LitElement {
	static properties = {
		title: { type: String },
		iconTheme: { type: Object },
	};

	static styles = [styles];

	constructor() {
		super();
		this.title = 'Envía un titulo';
	}

	firstUpdated() {
		if (cookie('theme') === '') {
			document.cookie = 'theme=light';
		}

		const themeCookie = cookie('theme');
		this.iconTheme = themeCookie === 'light' ? sun : moon;
		document.body.className = themeCookie;
	}

	changeTheme() {
		cookie('theme') === 'light'
			? (document.cookie = 'theme=dark')
			: (document.cookie = 'theme=light');

		const themeCookie = cookie('theme');

		this.iconTheme = themeCookie === 'light' ? sun : moon;
		document.body.className = themeCookie;
	}

	render() {
		return html`
			<div class="header">
				<h1>${this.title}</h1>
				<icon-theme
					.iconTheme=${this.iconTheme}
					@changeTheme=${this.changeTheme}
				></icon-theme>
			</div>
		`;
	}
}
customElements.define('header-content', Header);
