<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import SocialLinks from '$lib/SocialLinks.svelte';
</script>

<Meta
	title="Hi there"
	description="Personal web site of Luke Martin, a Lead UI Developer from London"
/>

<header>
	<h1>Hi <span>👋</span></h1>

	<p>My name is Luke. I'm a Lead UI Developer.</p>
</header>

<main />

<footer>
	<SocialLinks />
</footer>

<style lang="scss">
	$easing: cubic-bezier(0.17, 0.67, 0.14, 0.98);

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
		animation: slideInY 500ms $easing 100ms both;
		margin: 0;
		font-size: 36px;

		span {
			animation: wave 500ms $easing 1.2s both;
			transform-origin: 20px;
			display: inline-block;
		}
	}

	header p {
		animation: slideInY 500ms $easing 200ms both;
		font-size: 24px;
		line-height: 1.5;
	}

	main {
		flex: 1 1 100%;
	}

	footer {
		animation: slideInY 500ms $easing 400ms both;
	}
</style>
