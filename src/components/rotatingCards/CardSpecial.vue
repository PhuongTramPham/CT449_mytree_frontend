<script setup></script>
<template>
  <div class="rotating-card-container">
    <div
      class="card card-rotate card-background card-background-mask-success shadow-success mt-md-0 mt-5"
    >
      <slot />
    </div>
  </div>
</template>

<style>
  .card {
    background-color: rgba(199, 193, 193, 0.404) !important;
  }
</style>