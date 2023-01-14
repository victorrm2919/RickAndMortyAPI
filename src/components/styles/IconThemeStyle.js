import { css } from 'lit';

export default css`
	:host {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 2.3rem;
		height: 1.1rem;
		margin: auto 0;
	}

	@media (min-width: 768px) {
		:host {
			width: 4.1rem;
			height: 2rem;
		}
	}

	.label__icon {
		width: 100%;
		height: 100%;
		display: block;
		background-color: var(--color-card);
		border-radius: 200px;
		box-shadow: var(--shadow) 0 5px 8px;
		cursor: pointer;
	}

	.icon__theme {
		position: relative;
		width: 100%;
		height: 98%;
		display: block;
		border-radius: 100%;
		margin: 0;
		cursor: pointer;
	}
	.icon__theme img {
		display: block;
		max-height: 100%;
		margin: 0;
		transform: translateX(0);
		transition: all 0.5s ease;
	}

	.label__icon.dark .icon__theme img {
		margin: 0;
		transform: translateX(100%)
	}
`;
