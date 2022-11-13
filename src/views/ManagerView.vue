<script setup>

// sections
import PresentationCounter from "./hometree/presentation/PresentationCounter.vue";


</script>

<template>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    
        <div class="mt-10 page row container center">
            <div class="col-md-10">
                <InputSearch v-model="searchText" />
            </div>
            <div class="mt-3 col-md-6">
                <h4> 
                    My Tree 
                    <i class="fas fa-address-book"></i>
                </h4>
                <TreeList
                    v-if="filteredTreesCount > 0"
                    :trees="filteredTrees"
                    v-model:activeIndex="activeIndex"
                />
                <p v-else>Không có cây nào.</p>

                <div class="mt-3 row justify-content-around align-items-center">
                    <button class="btn col-md-3 btn-sm btn-info" @click="refreshList()">
                        <i class="fas fa-redo"></i> Làm mới
                    </button>

                    <button class="btn col-md-3 btn-sm btn-success" @click="goToAddTree">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>

                    <button class="btn col-md-3 btn-sm btn-danger" @click="removeAllTrees">
                        <i class="fas fa-trash"></i> Xóa tất cả
                    </button>
                </div>
            </div>
            <!-- ---------Chi tiết Cây trồng của bạn:-------------- -->
            <div class="mt-3 col-md-6">      
                <div v-if="activeTree">
                    <h4>
                        Chi tiết cây trồng của bạn: <i class="fas fa-tree"></i>
                    </h4>
                    <TreeCard :tree="activeTree" />
                    <router-link
                        :to="{
                        name: 'tree.edit',
                        params: { id: activeTree._id },
                        }"
                    >
                    <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <DefaultFooter />
</template>

<script>
    import TreeCard from "@/components/TreeCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import TreeList from "@/components/TreeList.vue";
    import TreeService from "@/services/tree.service";

    export default {
        components: {
            TreeCard,
            InputSearch,
            TreeList,
        },
        data() {
            return {
                trees: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
        // Chuyển các đối tượng tree thành chuỗi để tiện cho tìm kiếm.
            treeStrings() {
                return this.trees.map((tree) => {
                    const { name, type, image, desciption } = tree;
                    return [name, type, image, desciption].join("");
                });
            },
            // Trả về các tree có chứa thông tin cần tìm kiếm.
            filteredTrees() {
                if (!this.searchText) return this.trees;
                return this.trees.filter((_tree, index) =>
                this.treeStrings[index].includes(this.searchText)
                );
            },
            activeTree() {
                if (this.activeIndex < 0) return null;
                return this.filteredTrees[this.activeIndex];
            },
            filteredTreesCount() {
                return this.filteredTrees.length;
            },
        },
        methods: {
            async retrieveTrees() {
                try {
                    this.trees = await TreeService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveTrees();
                this.activeIndex = -1;
            },
            async removeAllTrees() {
                if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                    try {
                        await TreeService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            
            goToAddTree() {
                this.$router.push({ name: "tree.add" });
            },
        },
        mounted() {
            this.refreshList();
        },
    }; 
</script>

<style scoped>
    .page {
        text-align: left;
        max-width: 100%;
        margin: auto 100px;
    }
</style>