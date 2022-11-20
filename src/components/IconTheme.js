import { LitElement, html } from 'lit';
import styles from './styles/IconThemeStyle'


export class IconTheme extends LitElement {
	static styles = [styles];

	static get properties() {
		return {
			iconTheme: { type: Object },
		};
	}

  _handleClick(e) {
    this.dispatchEvent(new CustomEvent('changeTheme', {
			detail: 'change'
		}))
  }

	render() {
		return html`
			<a class="icon__theme" @click=${this._handleClick}>
				<figure>
					<img src=${this.iconTheme} />
				</figure>
			</a>
		`;
	}
}
customElements.define('icon-theme', IconTheme);
