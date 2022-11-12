import { html, LitElement } from 'lit';
import styles from './styles/CardStyles';

export class Card extends LitElement {
	static properties = {
		character: { type: Object },
	};

	static styles = [styles];

	_characterView(url) {
		this.dispatchEvent(
			new CustomEvent('viewCharacter', {
				detail: url,
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html`
			<div class="card">
				<div class="card__content">
					<h3 class="card__title">${this.character.name}</h3>
					<div class="card__img">
						<img src=${this.character.image} alt="${this.character.name}" />
					</div>
					<button @click=${() => this._characterView(this.character.url)}>
						Información
					</button>
				</div>
			</div>
		`;
	}
}
customElements.define('card-character', Card);
