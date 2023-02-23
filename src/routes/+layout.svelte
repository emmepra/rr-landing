<script>
    import "../app.postcss";
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Analytics from "$lib/components/layout/Analytics.svelte";
    import Meta from "$lib/components/layout/Meta.svelte";
</script>

<Analytics />
<Meta />

<div class="flex flex-col min-h-screen">
    <Header />
    
    <main id="content" class="flex flex-col flex-grow justify-center items-center">
        <slot />
    </main>
    
    <Footer />
</div>

<style lang='postcss'>

</style>

