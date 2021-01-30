<template>
  
  <div>
    <div v-if="show">DIV1</div>

    <div v-show="show">DIV2</div>

    <button @click="show = !show">SHOW</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
