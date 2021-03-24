<script>
  import "./Navigation.css";
  import ExploreScreen from "../Screens/Explore/Explore.svelte";
  import MyMusicScreen from "../Screens/MyMusic/MyMusic.svelte";
  import FolderScreen from "../Screens/Folder/Folder.svelte";

  import { SignalIcon, SongIcon, FolderOutlineIcon } from "../Icons";
  import Header from "../Header/Header.svelte";
  import { toggleNavbar } from "../../store/clickFunc";

  const navItems = [
    {
      name: "Explore",
      icon: SignalIcon,
      component: ExploreScreen,
    },
    {
      name: "My music",
      icon: SongIcon,
      component: MyMusicScreen,
    },
    {
      name: "Folder",
      icon: FolderOutlineIcon,
      component: FolderScreen,
    },
  ];

  let activeTabValue = "my music";

  const navigate = (to) => {
    activeTabValue = to;
  };
</script>

<div class="navbar" class:toggle-navbar={$toggleNavbar}>
  <div class="nav-item-header">Browse Files</div>
  {#each navItems as item}
    <div
      class={activeTabValue.toLowerCase() === item.name.toLowerCase() ? 'nav-item active-nav-item' : 'nav-item'}
      on:click={() => navigate(item.name.toLowerCase())}>
      <svelte:component this={item.icon} />
      <span>{item.name}</span>
    </div>
  {/each}
</div>

{#each navItems as item}
  <div
    hidden={activeTabValue.toLowerCase() !== item.name.toLowerCase()}
    class="content">
    <Header name={item.name.toLowerCase()} />
    <svelte:component this={item.component} />
  </div>
{/each}
