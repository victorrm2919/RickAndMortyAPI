import { css } from 'lit';

export default css`
	:host {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 10px;
		width: 2.3rem;
		height: 1.1rem;
		margin: auto 0;
	}

	@media (min-width: 768px) {
		:host {
			width: 4.7rem;
			height: 2.7rem;
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
		margin: auto;
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
		transform: translateX(100%)
	}
`;
