<script>
    import TypeTreeService from "@/services/typetree.service";
    export default {
        props: {
            tree: { type: Object, required: true },
        },
        data() {
            return {
                typeName: "",
            };
        },
        methods: {
            async getType(id) {
                try {
                    this.type = await TypeTreeService.get(id);
                    this.typeName = await this.type.name;
                } catch (error) {
                    console.log(error);
                }
            },    
        },
        created() {
            this.getType(this.tree.typeId);
        },
    };
</script>

<template>
    <div style="width: 380px;">
        <div class="p-1 row">
            <strong class="col">Tên cây trồng:</strong>
            <div class="col">{{ tree.name }}</div>
        </div>
        <div class="p-1 row">
            <strong class="col">Loại cây trồng:</strong>
            <div class="col">{{ typeName }}</div>
        </div>
        <div class="p-1 row">
            <strong class="col">Hình ảnh:</strong>
            <div class="col">
                <img v-bind:src="tree.image" alt="..." style="width: 200px; height: 200px; object-fit: cover;" />
            </div>
        </div>
        <div class="p-1 row">
            <strong class="col">Mô tả cây trồng:</strong>
            <div class="col">{{ tree.description }}</div>
        </div>
        <div class="p-1 row">
            <strong class="col">Loài cây yêu thích: </strong>
            <div class="col">
                <i v-if="tree.favorite" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>