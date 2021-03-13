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

<h1>Hi <span>👋</span></h1>

<p>My name is Luke. I'm a Lead UI Developer.</p>

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

<style>
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(100px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

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

	h1 {
		animation: slideIn 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 200ms both;
		font-size: 36px;
	}

	h1 span {
		animation: wave 500ms ease 1.2s both;
		transform-origin: 20px;
		display: inline-block;
	}

	p {
		animation: slideIn 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 400ms both;
		font-size: 24px;
		flex: 1 1 auto;
	}

	ul {
		animation: slideIn 500ms cubic-bezier(0.17, 0.67, 0.14, 0.98) 600ms both;
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
</style>
