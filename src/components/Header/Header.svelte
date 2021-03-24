<script>
    export let name;

    import "./Header.css";
    import Burger from "../Burger/Burger.svelte";
    import { MoreVerticalIcon, SearchIcon, SettingsIcon } from "../Icons";
    import AddMusicButton from "../AddMusicButton/AddMusicButton.svelte";
</script>

<div class="main-header">
    <Burger />
    <div class="header-flex">
        <h3>{name}</h3>
        {#if name === 'folder'}
            <AddMusicButton />
        {/if}
    </div>
    <button class="search-icon icon">
        <SearchIcon />
    </button>
    <button class="settings-icon icon">
        <SettingsIcon />
    </button>
    <button class="more-icon icon">
        <MoreVerticalIcon />
    </button>
</div>
