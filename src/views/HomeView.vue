<script setup lang="ts">
document.title += " - Home"
</script>

<template>
  <div class="bg-neutral-900">
    <div class="h-[85vh] pt-40 text-white flex">
      <div class="font-halloween m-auto text-4xl text-center md:first-letter:text-6xl">
        Let the
        <div class="text-7xl text-red-700 my-8 md:text-9xl">Horror</div>
        begin
      </div>

    </div>
    <div class="h-[15vh] flex">
      <a href="#blob" class="m-auto mb-20">
        <v-icon scale=2 inverse="true" animation="pulse" name="md-keyboarddoublearrowdown"></v-icon>
      </a>
    </div>

    <div class="h-screen border-t border-neutral-700">
      <div class="mt-20 text-white" id="blob">
        blob
      </div>
    </div>
  </div>
</template>
