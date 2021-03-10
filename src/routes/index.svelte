<script>
	const SOCIAL = [
		{
			icon: 'github.svg',
			label: 'github.com/lukemartin',
			url: 'https://github.com/lukemartin',
		},
		{
			icon: 'twitter.svg',
			label: 'twitter.com/luke_is',
			url: 'https://twitter.com/luke_is',
		},
		{
			icon: 'lastfm.svg',
			label: 'last.fm/user/lukus',
			url: 'https://www.last.fm/user/lukus',
		},
	];
</script>

<svelte:head>
	<title>Hi 👋 | luke.dev</title>
</svelte:head>

<main>
	<h1>Hi 👋</h1>

	<p>My name is Luke. I'm a Lead UI Developer.</p>

	<ul>
		{#each SOCIAL as { icon, label, url }}
			<li>
				<img src={`images/${icon}`} alt="" />
				<a href={url} target="_blank" rel="noopener noreferrer">
					{label}
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding: 40px;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	h1 {
		font-size: 36px;
	}

	p {
		font-size: 24px;
		flex: 1 1 auto;
	}

	ul {
		list-style-type: none;
		margin: 30px 0 0;
		padding: 0;
		flex: 0;
	}

	li {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}

	li img {
		fill: var(--text-color);
	}

	li a {
		margin-left: 10px;
		font-size: 14px;
	}
</style>
