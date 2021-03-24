<script>
    import "./AddMusicButton.css";
    import { AddFolderIcon } from "../Icons";

    const openDialog = () => {
        console.log("Open Dialog... NOW");
    };
</script>

<button class="addmusic" on:click={openDialog}>
    <AddFolderIcon />
    Add Music
</button>
