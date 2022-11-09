import { css } from 'lit';

export default css`
	.pagination {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 3rem;
		box-shadow: rgb(0 0 0 / 15%) 0 5px 8px;
	}

	.pagination button {
		width: 2.2rem;
		height: 2.5rem;
		margin: 0 .1rem;
		border-radius: 5px;
		border: 0;
		background-color: var(--color-secondary);
		letter-spacing: 1.5px;
		text-transform: uppercase;
		font-size: 0.8rem;
		transition: all 0.5s ease;
		text-align: center;
		cursor: pointer;
	}

	.pagination button:hover:not(:disabled)  {
		letter-spacing: 2px;
		background-color: var(--color-primary);
		color: hsl(0, 0%, 100%);
		box-shadow: var(--color-primary) 0px 7px 29px 0px;
	}

	.pagination button:active:not(:disabled)  {
		letter-spacing: 3px;
		background-color: var(--color-primary);
		color: hsl(0, 0%, 100%);
		box-shadow: var(--color-primary) 0px 0px 0px 0px;
		transform: translateY(10px);
		transition: 100ms;
	}

	.pagination button:disabled {
		cursor: not-allowed;
	}

	.pagination button.btnPage.active {
		background-color: var(--color-primary);
		color: hsl(0, 0%, 100%);
	}

`;
