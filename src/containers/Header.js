import { LitElement, html, css, nothing } from 'lit';
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
		themeCookie: { type: String },
	};

	static styles = [styles];

	constructor() {
		super();
		this.title = 'Envía un titulo';
		this.themeCookie = '';
	}

	firstUpdated() {
		if (cookie('theme') === '') {
			document.cookie = 'theme=light';
		}

		this.themeCookie = cookie('theme');
		this.iconTheme = this.themeCookie === 'light' ? sun : moon;
		document.body.className = this.themeCookie;
	}

	changeTheme() {
		cookie('theme') === 'light'
			? (document.cookie = 'theme=dark')
			: (document.cookie = 'theme=light');

		this.themeCookie = cookie('theme');

		this.iconTheme = this.themeCookie === 'light' ? sun : moon;
		document.body.className = this.themeCookie;
	}

	render() {
		return html`
			<h1>${this.title}</h1>
			<icon-theme
				.iconTheme=${this.iconTheme}
				@changeTheme=${this.changeTheme}
				.themeIcon=${this.themeCookie}
			></icon-theme>
		`;
	}
}
customElements.define('header-content', Header);
