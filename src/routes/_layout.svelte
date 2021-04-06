<main>
	<slot />
</main>

<style>
	main {
		padding: 40px;
	}

	@media (min-width: 960px) {
		main {
			display: flex;
			flex-direction: column;
			height: 100%;
		}
	}
</style>
