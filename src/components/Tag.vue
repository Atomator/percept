<template>
  <div>
    <button class="btn">{{ tagText }}
      <div class="d-inline-block border-muted align-mid" :style="'border-radius: 25px; width: 2px; height: 12px; background-color:' + color"></div>
    </button>
  </div>
</template>
<script>
  export default {
    name: "Tag",
    props: {
      tagText: {
        type: Text,
        default: "Task"
      },
      color: {
        type: Text,
        default: "#00ff80"
      }
    }
  }
</script>
