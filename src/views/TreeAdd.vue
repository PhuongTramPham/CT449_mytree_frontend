<template>
    <div v-if="tree" class="page mt-8">
        <h4>Thêm Cây trồng</h4>
        <TreeForm
            :tree="tree"
            @submit:tree="createTree"
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
        // id: { type: String, required: true },
    },
    data() {
        return {
            tree: {},
            message: "",
        };
    },
    methods: {
        async createTree(data) {
            try {
                await TreeService.create(data);
                this.message = "Cây trồng được tạo thành công!";
                this.$router.push({ name: "manager" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        // this.getTree(this.id);
        this.message = "";
    },
};
</script>