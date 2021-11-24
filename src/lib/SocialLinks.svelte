<script lang="ts">
	const SOCIAL_LINKS = [
		{
			icon: 'github.svg',
			label: 'github.com/jazzpill',
			url: 'https://github.com/jazzpill',
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

<ul>
	{#each SOCIAL_LINKS as { icon, label, url }}
		<li>
			<img
				src={`images/${icon}`}
				alt={`icon for ${label}`}
				width="32"
				height="32"
			/>
			<a href={url} target="_blank" rel="noopener noreferrer">
				{label}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
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

		&:last-child {
			margin-bottom: 0;
		}
	}

	li a {
		margin-left: 10px;
		font-size: 14px;
	}
</style>
