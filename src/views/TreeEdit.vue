<template>
    <div v-if="tree" class="page mt-8">
        <h4>Hiệu chỉnh Cây trồng</h4>
        <TreeForm
            :tree="tree"
            @submit:tree="updateTree"
            @delete:tree="deleteTree"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import TreeForm from "@/components/TreeForm.vue";
    import TreeService from "@/services/tree.service";
    export default {
        components: {
            TreeForm,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                tree: null,
                message: "",
            };
        },
        methods: {
            async getTree(id) {
                try {
                    this.tree = await TreeService.get(id);
                } catch (error) {
                    console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                    this.$router.push({
                        name: "notfound",
                        params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                        },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },
            async updateTree(data) {
                try {
                    await TreeService.update(this.tree._id, data);
                    this.message = "Cây trồng được cập nhật thành công.";
                    this.$router.push({ name: "manager" });
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteTree() {
                if (confirm("Bạn muốn xóa Loài cây này?")) {
                    try {
                        await TreeService.delete(this.tree._id);
                        this.$router.push({ name: "hometree" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
        this.getTree(this.id);
        this.message = "";
        },
    };
</script>