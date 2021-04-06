<script>
	import Meta from '../components/Meta.svelte';

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

<Meta
	title="Hi there"
	description="Personal web site of Luke Martin, a Lead UI Developer from London"
/>

<div class="wrap">
	<header>
		<h1>Hi <span>👋</span></h1>

		<p>My name is Luke. I'm a Lead UI Developer.</p>
	</header>

	<div class="articles">
		<p><a href="/article">articles</a></p>
		<p><a href="/article">articles</a></p>
		<p><a href="/article">articles</a></p>
	</div>

	<footer>
		<ul>
			{#each SOCIAL as { icon, label, url }}
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
	</footer>
</div>

<style>
	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(45deg);
		}
		50% {
			transform: rotate(45deg);
		}
		75% {
			transform: rotate(-45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	header h1 {
		animation: slideInY 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 100ms both;
		font-size: 36px;
	}

	header h1 span {
		animation: wave 500ms ease 1.2s both;
		transform-origin: 20px;
		display: inline-block;
	}

	header p {
		animation: slideInY 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 200ms both;
		font-size: 24px;
		flex: 1 1 auto;
	}

	ul {
		animation: slideInY 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 400ms both;
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

	li a {
		margin-left: 10px;
		font-size: 14px;
	}

	.articles {
		animation: slideInY 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 300ms both;
	}

	.wrap {
		display: block;
		height: 100%;
	}

	@media (min-width: 960px) {
		.wrap {
			display: flex;
			position: relative;
			height: 100%;
		}

		header {
			flex: 0 0 50%;
		}

		footer {
			position: absolute;
			bottom: 0;
			left: 0;
		}

		.articles {
			animation: slideInX 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 400ms both;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
