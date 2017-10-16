<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  max-width: 60%;

  @media only screen and (max-width: 980px) {
   max-width: none;
  }
}
</style>
