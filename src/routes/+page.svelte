<script>
	import corpus from '$lib/assets/data/corpus.json';
	// Svelte Components

	// General Setup

	// misc
	import * as cfg from '$lib/utils/config.js';
	import { onMount } from 'svelte';

	import Hero from '$lib/components/parts/Hero.svelte';
	import Hero2 from '$lib/components/parts/Hero2.svelte';
	import Price from '$lib/components/parts/Price.svelte';
	import Team from '$lib/components/parts/Team.svelte';
	import Customers from '$lib/components/parts/Customers.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Newsletter from '$lib/components/parts/Newsletter.svelte';
	import Testimonials from '$lib/components/parts/Testimonials.svelte';


</script>

<!-- NOTE -->
<!-- [x] lo scroller non sembra volersi bene con flexbox, per risolvere TUTTI i problemi è stato sufficiente eliminarlo -->
<!-- per creare un chart la procedura è: -->
<!-- 	- creare un div flex specificando la larghetta massima che deve avere il chart -->
<!--	- inserirgli dentro un div con class w-[Npx] e h-[Npx] in cui specificare le dimensioni del chart -->
<!--	- inserire a sua volta il chart richiamando il component <nomechart>Chart.svelte contenuto in: <div class="w-full h-full"> -->
<!--	- dentro ad ogni <nomechart>Chart.svelte va inserito il chart base <nomechart>.svelte -->

<Hero2 />
<Price />
<Team />
<Customers />
<Newsletter />
<Testimonials />
