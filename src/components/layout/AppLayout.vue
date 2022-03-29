<template>
    <div class="my-grid-wrapper">
        <slot name="header"></slot>
        <slot id=content name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<style scoped>
.my-grid-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content auto max-content;
}
</style>
