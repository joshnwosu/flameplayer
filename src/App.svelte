<script>
	import "./App.css";
	import Control from "./components/Control/Control.svelte";
	import Navigation from "./components/Navigation/Navigation.svelte";

	document.body.classList.add("color_three");
</script>

<div class="app">
	<main>
		<Navigation />
	</main>
	<Control />
</div>
