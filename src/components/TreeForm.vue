<template>
    <Form 
        @submit="submitTree"
        :validation-schema="treeFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên cây trồng:</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="treeLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="type" class="mr-3">Loại cây trồng:</label>
            <!-- <Field
                name="type"
                type="text"
                class="form-control"
                v-model="treeLocal.type"
            /> -->
            <select 
                class="type"
                v-model="treeLocal.typeId">
                <option
                    v-for="(type, index) in listType"
                    :value="type._id"
                    :key="index"
                    >
                    {{ type.name }}
                </option>
            </select>
            <ErrorMessage name="type" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="image">Hình ảnh cây trồng:</label>
            <Field
                name="image"
                type="text"
                class="form-control "
                style="padding: 10px 10px 29px 10px;"
                v-model="treeLocal.image"
            />
            <ErrorMessage name="image" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="descripsion">Mô tả cây trồng:</label>
            <Field
                name="descripsion"
                type="text"
                class="form-control"
                v-model="treeLocal.description"
            />
            <ErrorMessage name="descripsion" class="error-feedback" />
        </div>
        <div class="form-group form-check mb-3">
            <input
                name="favorite"
                type="checkbox"
                class="form-check-input "
                v-model="treeLocal.favorite"
            />
            <label for="favorite" class="form-check-label">
                <strong>Loài cây yêu thích</strong>
            </label>
        </div>

        <div class="form-group ">
            <button class="btn btn-info">Lưu</button>
            <button
                v-if="treeLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteTree"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import TypeTreeService from "@/services/typetree.service";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        emits: ["submit:tree", "delete:tree"],
        props: {
            tree: { type: Object, required: true }
        },
        data() {
            const treeFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Tên phải có giá trị.")
                    .min(2, "Tên phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
                /* email: yup
                    .string()
                    .email("E-mail không đúng.")
                    .max(50, "E-mail tối đa 50 ký tự."),
                address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
                phone: yup
                    .string()
                    .matches(
                        /((09|03|07|08|05)+([0-9]{8})\b)/g,
                        "Số điện thoại không hợp lệ."
                ), */
            });
            return {
                // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                // treeLocal để liên kết với các input trên form
                treeLocal: this.tree,
                treeFormSchema,
                listType: null,
            };
        },
        methods: {
            async getAllType() {
                try {
                    this.listType = await TypeTreeService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            submitTree() {
                this.$emit("submit:tree", this.treeLocal);
            },
            deleteTree() {
                this.$emit("delete:tree", this.treeLocal.id);
            },
        },
        created() {
            this.getAllType()
        },
    };
</script>

<style scoped>
    @import "@/assets/form.css";
    .error-feedback {
        color: red;
    }
    .type {
        padding: 9px;
        border: 2px solid rgb(199, 194, 194);
        border-radius: 6px;
        width: 100%;
    }
</style> 