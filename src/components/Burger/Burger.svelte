<script>
    import "./Burger.css";
    import { toggleNavbar } from "../../store/clickFunc.js";
</script>

<button
    class="burger-menu"
    aria-label="Burger Menu"
    on:click={() => ($toggleNavbar = !$toggleNavbar)}>
    <span />
    <span />
    <span />
</button>
