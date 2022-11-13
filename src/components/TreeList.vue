<script>
    export default {
        props: {
            trees: { type: Array, default: [] },
            activeIndex: { type: Number, default: -1 },
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index);
            }
        }
    };
</script>

<template>
    <ul class="list-group">
        <li 
            class="list-group-item"
            v-for="(tree, index) in trees"
            :key="tree._id"
            :class="{ active: index === activeIndex }" 
            @click="updateActiveIndex(index)"
        >
            {{ tree.name }}
        </li>
    </ul>
</template>

<style>
    .list-group-item.active {
        background-color: rgb(240, 248, 240);
        color: rgb(76, 128, 17);
        border: 1px solid green ;
    }
</style>