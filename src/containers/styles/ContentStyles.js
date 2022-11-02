import { css } from 'lit';

export default css`
	:host {
		display: block;
		width: 100%;
		max-width: 1500px;
		margin: auto;
	}
	.cards {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		margin: 2rem 0;
	}

`;
