<script>
	import "./App.css";
	import Control from "./components/Control/Control.svelte";
	import Navigation from "./components/Navigation/Navigation.svelte";

	document.body.classList.add("color_one");
</script>

<div class="app">
	<main>
		<Navigation />
	</main>
	<Control />
</div>
