import { css } from 'lit';

export default css`
	.header {
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		.header h1 {
			font-size: 3rem;
		}
	}

	.header h1 {
		font-weight: 800;
		color: var(--color-primary);
	}

	:has(icon-theme) {
        position: relative
      }

`;
