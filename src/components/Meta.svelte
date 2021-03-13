<script>
	export let title = '';
	export let description = '';
</script>

<svelte:head>
	<title>{title} | luke.dev</title>
	<meta name="description" content={description} />
</svelte:head>
