import { css } from 'lit';

export default css`
	:host {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: calc(100vw - 18%);
		width: 30px;
		height: 30px;
	}

	@media screen and (min-width: 768px) {
		:host {
			width: 50px;
			height: 50px;
		}
	}

	.icon__theme {
		display: block;
		cursor: pointer;
		border-radius: 100%;
		margin: auto 0;
	}

	.icon__theme:hover {
		color: hsl(0, 0%, 100%);
		box-shadow: var(--color-primary) 0px 3px 10px -3px;
	}

	.icon__theme:active {
		box-shadow: var(--color-primary) 0px 0px 0px 0px;
		transform: translateY(2px);
		transition: 100ms;
	}

	figure {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
	}

	figure img {
		display: block;
		max-width: 100%;
		margin: auto;
	}
`;
