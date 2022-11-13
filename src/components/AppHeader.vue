<template>
    <nav class="navbar navbar-expand navbar-dark mt-4" style="
        position: absolute;
        backdrop-filter: saturate(200%) blur(30px);
        background-color: rgba(255, 255, 255, 0.8);
        width: inherit;
        border-radius: 10px;
    ">
        <a href="/" class="navbar-brand ml-2"><b>ỨNG DỤNG QUẢN LÝ CÂY TRỒNG</b></a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item ">
                <router-link :to="{ name: 'hometree' }" class="nav-link text-success">
                    My Tree 
                    <i class="fa fa-tree"> </i>
                </router-link>
            </li>

            <li class="nav-item" style="margin-left: 400px;">
                <router-link :to="{ name: 'manager' }" class="nav-link text-success">
                    Quản lý cây trồng
                    <i class="fa fa-tree"> </i>
                </router-link>
            </li>
            <li class="" style="margin-left: 10px;">
                <router-link :to="{ name: 'manager' }" class="nav-link text-success">
                    Sign in
                    <i class="fa fa-tree"> </i>
                </router-link>
            </li>
        </div>

    </nav>
</template>

<style>
</style>