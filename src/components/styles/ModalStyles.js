import { css } from 'lit';

export default css`
	@keyframes puff-in-center {
		0% {
			-webkit-transform: scale(2);
			transform: scale(2);
			-webkit-filter: blur(4px);
			filter: blur(4px);
			opacity: 0;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-filter: blur(0px);
			filter: blur(0px);
			opacity: 1;
		}
	}
	.modal {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		animation: puff-in-center 0.4s ease-in-out both;
		transition: all 0.3s ease-in-out;
	}

	.modal__content {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		background-color: var(--color-secondary);
		color: var(--color-primary);
		margin: 0;
		padding: 1rem 2rem;
		transition: 0.3s ease-in-out;
		max-width: 60vw;
	}

	@media screen and (min-width: 768px) {
		.modal__content {
			max-width: 800px;
			max-height: 400px;
			margin: 0 0.5rem
		}
	}

	.modal__header {
		position: relative;
		width: 100%;
		padding: 0.5rem;
		text-align: center;
	}

	.modal__header h3 {
		display: block;
		width: 90%;
	}

	.modal__title {
		margin: 0;
		padding: 0;
	}

	.modal__close {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		color: var(--color-primary);
		background-color: var(--color-secondary);
		border: none;
		border-radius: 100%;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 900;
		cursor: pointer;
	}

	.modal__close span {
		display: block;
	}

	.modal__close:hover {
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--color-primary) 0px 7px 10px 0px;
	}

	.modal__close:active {
		background-color: var(--color-primary);
		color: var(--color-secondary);
		box-shadow: var(--color-primary) 0px 0px 0px 0px;
		transform: translateY(2px);
		transition: 100ms;
	}

	.modal__body {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
	}

	@media screen and (min-width: 768px) {
		.modal__body {
			justify-content: space-around;
			flex-direction: row;
		}
	}

	.modal__img {
		flex: 0 0 50%;
		border-radius: 5px;
		overflow: hidden;
		max-width: 100%;
		width: 95%;
		max-width: 200px;
		margin: 0;
	}

	@media screen and (min-width: 768px) {
		.modal__img {
			margin: auto;
		}
	}

	.modal__img img {
		width: 100%;
	}

	.modal__info {
		flex: auto;
		padding: 1rem;
	}

	.modal__info p {
		font-weight: 800;
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	.modal__info p span {
		font-weight: 400;
	}

	.modal__info p span span {
		display: inline-block;
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 100%;
		margin: 0 0.3rem;
	}

	.icon-status-alive {
		background-color: #44bd32;
	}

	.icon-status-unknown {
		background-color: #718093;
	}

	.icon-status-dead {
		background-color: #e84118;
	}
`;
