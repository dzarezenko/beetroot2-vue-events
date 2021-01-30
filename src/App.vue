<template>
  <div id="app">
    <input type="text" value="red" v-model="whatToShow" />
  
    <div v-if="whatToShow == 'red'" class="clickable clickable-red" style="top: 50px; left: 50px;" @click.self="click('red', $event)">
      <div v-if="true" />
    </div>
    <div v-else-if="whatToShow == 'yellow'" class="clickable clickable-yellow" style="top: 100px; left: 100px;" @click.stop.once="click('yellow', $event)"></div>
    <div v-else class="clickable clickable-green" style="top: 100px; left: 100px;" @click.stop.once="click('green', $event)"></div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Show />
  </div>
</template>

<script>
import Show from "./components/Show";

export default {
  components: {
    Show,
  },
  data() {
    return {
      whatToShow: "red",
    }
  },
  methods: {
    click(name, event) {
      //event.stopPropagation();
      //event.preventDefault();
      //console.log(event);
      //alert(`Click ${name}!!!`);
      //this.showRed();
    },
  },
}
</script>

<style>
div.clickable {
  width: 200px;
  height: 200px;
  display: block;
  position: absolute;
}
div.clickable-red {
  background-color: red;
}
div.clickable-yellow {
  background-color: yellow;
}
div.clickable-green {
  background-color: green;
}
</style>
