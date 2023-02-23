<script>
	import { onMount } from 'svelte';
	import wordmark from '$lib/assets/svg/24bs_light.svg';
	import sock from '$lib/assets/svg/sock.svg';
</script>

<footer class="mt-16 p-3 flex justify-center items-center flex-col">
	<div class="w-36 pt-5 pb-7">
		<a href="http://24orebs.com">
			<img src={wordmark} alt="SvelteKit" />
		</a>
	</div>
	
	<hr class="w-40 h-[1px] mx-auto bg-primary-50 border-0">

	<div class="pt-2 pb-1 max-w-screen-sm">
		<p class="font-sans text-center text-sm md:text-sm pt-5">
			© TurningSocks. All Rights Reserved.
		</p>
	</div>
</footer>


<style lang="postcss">
	a:hover {
		@apply text-primary-100;
	}
</style>
