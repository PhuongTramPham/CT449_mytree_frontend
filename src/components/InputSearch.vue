<script>
    export default {
        props: {
            modelValue: { type: String, default: "" },
        },
        emits: ["submit", "update:modelValue"],
        methods: {
            updateModelValue(e) {
                this.$emit("update:modelValue", e.target.value);
            },
            submit() {
                this.$emit("submit");
            },
        },
    };
</script>

<template>
    <div class="input-group ">
        <input
            type="text"
            class="form-control"
            placeholder="Nhập thông tin cần tìm"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="submit"
            >
                <i class="fas fa-search"></i> Tìm kiếm
            </button>
        </div>
    </div>
</template>

<style>
    .form-control {
        padding-left: 10px;
        padding-top: 20px;
        padding-bottom: 18px;
        border: 2px solid rgb(199, 194, 194);
    }
</style>