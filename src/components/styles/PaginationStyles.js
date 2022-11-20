import { css } from 'lit';

export default css`
	.pagination {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		box-shadow: var(--shadow) 0 5px 8px;
	}

	@media screen and (min-width: 768px) {
		.pagination {
		margin-bottom: 3rem;
		}
	}

	.pagination button {
		width: 1.4rem;
		height: 1.7rem;
		margin: 0 0.1rem;
		font-size: 0.6rem;
		border-radius: 5px;
		border: 0;
		background-color: var(--color-secondary);
		color: var(--color-primary);
		transition: all 0.5s ease;
		text-align: center;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.pagination button {
			width: 2.2rem;
			height: 2.5rem;
			font-size: 0.8rem;
		}
	}

	.pagination button:hover:not(:disabled) {
		letter-spacing: 2px;
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--color-primary) 0px 7px 29px 0px;
	}

	.pagination button:active:not(:disabled) {
		letter-spacing: 3px;
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--color-primary) 0px 0px 0px 0px;
		transform: translateY(10px);
		transition: 100ms;
	}

	.pagination button:disabled {
		cursor: not-allowed;
	}

	.pagination button.btnPage.active {
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}
`;
