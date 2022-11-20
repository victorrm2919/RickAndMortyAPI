import { css } from 'lit';

export default css`
	.header {
		text-align: center;
	}

	.header h1 {
		font-weight: 800;
		font-size: 1.4rem;
		color: var(--color-primary);
	}

	@media screen and (min-width: 768px) {
		.header h1 {
			font-size: 3rem;
		}
	}

	:has(icon-theme) {
		position: relative;
	}
`;
