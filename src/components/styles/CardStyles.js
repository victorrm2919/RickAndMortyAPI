import { css } from 'lit';

export default css`
	:host {
		--card-width: 200px;
		--card-height: 300px;
		display: block;
		margin: auto;
	}

	.card {
		display: block;
		height: var(--card-height);
		width: var(--card-width);
		text-align: center;
		background-color: var(--color-card);
		border: .1px solid var(--color-primary);
		border-radius: 5px;
		margin: 1rem;
		padding: 1.5rem 1rem;
		box-shadow: var(--shadow) 0 1px 7px , var(--shadow) 0 1px 4px;
		transition: all 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}

	.card:hover {
		box-shadow: var(--shadow) 0 7px 28px, var(--shadow) 0 5px 10px;
		transform: scale(1.12);
	}

	.card__content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		transition: transform 0.4s ease-in-out;
	}

	.card__img {
		border-radius: 5px;
		overflow: hidden;
		max-width: 100%;
		width: 95%;
		margin: auto;
	}

	.card__img img {
		width: 100%;
	}

	.card__title {
		margin: 0;
		color: var(--color-primary);
		font-weight: 800;
	}

	.card__content button {
		padding: 0.7rem 1.2rem;
		border-radius: 50px;
		border: .3px solid var(--color-primary);
		background-color: var(--color-secondary);
		color: var(--color-primary);
		box-shadow: var(--shadow) 0 0 8px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		font-size: 0.8rem;
		transition: all 0.5s ease;
		cursor: pointer;
	}

	.card__content button:hover {
		letter-spacing: 2px;
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--shadow) 0px 7px 29px 0px;
	}

	.card__content button:active {
		letter-spacing: 3px;
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--shadow) 0px 0px 0px 0px;
		transform: translateY(10px);
		transition: 100ms;
	}
`;
