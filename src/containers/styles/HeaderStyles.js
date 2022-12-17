import { css } from 'lit';

export default css`
	:host {
		text-align: center;
		position: relative;
	}

	:host h1 {
		font-weight: 800;
		font-size: 1.4rem;
		color: var(--color-primary);
	}

	@media screen and (min-width: 768px) {
		:host h1 {
			font-size: 3rem;
		}
	}
`;
