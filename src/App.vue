<template>
  <div id="app">
    <div class="clickable clickable-red" style="top: 50px; left: 50px;" @click.self="click('red', $event)">
      <div class="clickable clickable-yellow" style="top: 100px; left: 100px;" @click.stop.once="click('yellow', $event)">

      </div>
    </div>

    <form action="#">
      <input type="submit" value="Submit" @click.prevent="click('submit', $event)" />
    </form>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <textarea @keyup.efodin="keyboard">

    </textarea>
  </div>
</template>

<script>
export default {
  methods: {
    click(name, event) {
      //event.stopPropagation();
      //event.preventDefault();
      console.log(event);
      alert(`Click ${name}!!!`);
    },
    keyboard(event) {
      console.log(event);
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
