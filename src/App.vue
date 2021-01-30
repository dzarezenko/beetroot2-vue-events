<template>
  <div id="app">
    <div class="clickable clickable-red" style="top: 50px; left: 50px;" @click="click('red', $event)"></div>
    <div class="clickable clickable-yellow" style="top: 100px; left: 100px;" @click="click('yellow', $event)"></div>
  </div>
</template>

<script>
export default {
  methods: {
    click(name, event) {
      console.log(event);
      alert(`Click ${name}!!!`);
    }
  }
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
</style>
