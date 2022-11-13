<script setup>

// images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

// footer
import DefaultFooter from "../components/FooterCentered.vue";

// sections
import PresentationCounter from "./hometree/presentation/PresentationCounter.vue";
import ListCardTree from "./hometree/presentation/ListCardTree.vue";
import data from "./hometree/presentation/designBlocksData"
// Cars
// import CardTreeSpecialVue from "./presentation/CardTreeSpecial.vue";

</script>

<template>

    <Header>
        <div
            class="page-header min-vh-75"
            :style="`background-image: url('${vueMkHeader}')`"
            loading="lazy"
        >
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1
                            class="text-white pt-3 mt-n5 me-2"
                            :style="{ display: 'inline-block ' }"
                        >
                        Bạn thích loài cây nào?
                        </h1>
                        <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
                        Bắt tay vào tìm hiểu và trồng những loại cây mà bạn yêu thích nào! Cùng tận hưởng không gian xanh bạn nhé.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Header>

    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <PresentationCounter />
        <!-- <CardTreeSpecialVue /> -->

        <!-- <div class="mt-5 page row container">
            <div class="col-md-10">
                <InputSearch v-model="searchText" />
            </div>
            <div class="mt-3 col-md-6">
                <h4> 
                    My Tree 
                    <i class="fas fa-address-book"></i>
                </h4>
                <ContactList
                    v-if="filteredContactsCount > 0"
                    :contacts="filteredContacts"
                    v-model:activeIndex="activeIndex"
                />
                <p v-else>Không có cây nào.</p>

                <div class="mt-3 row justify-content-around align-items-center">
                    <button class="btn btn-sm btn-info" @click="refreshList()">
                        <i class="fas fa-redo"></i> Làm mới
                    </button>

                    <button class="btn btn-sm btn-success" @click="goToAddContact">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>

                    <button class="btn btn-sm btn-danger" @click="removeAllContacts">
                        <i class="fas fa-trash"></i> Xóa tất cả
                    </button>
                </div>
            </div>
            <div class="mt-3 col-md-6">      
                <div v-if="activeContact">
                    <h4>
                        Chi tiết Cây trồng của bạn: <i class="fas fa-tree"></i>
                    </h4>
                    <ContactCard :contact="activeContact" />
                    <router-link
                        :to="{
                        name: 'contact.edit',
                        params: { id: activeContact._id },
                        }"
                    >
                    <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                    </router-link>
                </div>
            </div>
        </div> -->
        
        <ListCardTree :data="data" /> -->

    </div>
    <DefaultFooter />
</template>

<!-- <script>
    import ContactCard from "@/components/ContactCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import ContactList from "@/components/ContactList.vue";
    import ContactService from "@/services/contact.service";

    export default {
        components: {
            ContactCard,
            InputSearch,
            ContactList,
        },
        data() {
            return {
                contacts: [],
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
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
            contactStrings() {
                return this.contacts.map((contact) => {
                    const { name, type, image, desciption } = contact;
                    return [name, type, image, desciption].join("");
                });
            },
            // Trả về các contact có chứa thông tin cần tìm kiếm.
            filteredContacts() {
                if (!this.searchText) return this.contacts;
                return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
                );
            },
            activeContact() {
                if (this.activeIndex < 0) return null;
                return this.filteredContacts[this.activeIndex];
            },
            filteredContactsCount() {
                return this.filteredContacts.length;
            },
        },
        methods: {
            async retrieveContacts() {
                try {
                    this.contacts = await ContactService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveContacts();
                this.activeIndex = -1;
            },
            async removeAllContacts() {
                if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                    try {
                        await ContactService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            
            goToAddContact() {
                this.$router.push({ name: "contact.add" });
            },
        },
        mounted() {
            this.refreshList();
        },
    }; 
</script>
 -->

<style scoped>
    .page {
        text-align: left;
        max-width: 100%;
    }
</style>