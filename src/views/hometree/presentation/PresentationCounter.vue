<script>
  import TreeService from "@/services/tree.service";
  export default {
    data() {
      return {
        lenTree: 0,
      };
    },
    methods: {
      async getLenTree() {
          try {
              this.trees = await TreeService.getAll();
              this.lenTree = await this.trees.length;
          } catch (error) {
              console.log(error);
          }
      },
    },
    created() {
      this.getLenTree();
    },
  };
</script>

<script setup>
  import DefaultCounterCard from "../../../components/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Cây trồng"
                description="Đây là số cây bạn đã lưu lại trong danh sách"
                :count="lenTree"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Cửa tiệm"
                description="Những trang web bạn đã mua cây trồng."
                :count="3"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Pages"
                description="Bạn sẽ xem các cây yêu thích, đã trồng và muốn trồng của bạn tại đây"
                :count="4"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
