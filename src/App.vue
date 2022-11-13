<script>
  import AppHeader from "@/components/AppHeader.vue";
  
  export default {
    components: {
      AppHeader,
    },
  };
</script>

<template>
  <div id="app">
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
              <AppHeader :sticky="true" />
            </div>
        </div>
    </div>
    

    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
  
</style>
