<template>
    <nav id="topnav" class="z-50 border-b border-neutral-700 w-screen fixed top-0 left-0 h-20 flex px-8 text-white bg-neutral-900">
        <div class="text-xl my-auto font-halloween">
            <a href="/" class="hover:text-red-700 duration-200">
                Halloween Garten Hohenkirchen
            </a>
        </div>
        <div class="ml-auto flex">
            <a class="nav-btn">Home</a>
            <a class="nav-btn">About</a>
        </div>
    </nav>
</template>

<style scoped>
@tailwind components;
@layer components {
    .nav-btn {
        @apply text-xl mr-6 my-auto font-halloween float-right hover:text-red-700 cursor-pointer duration-200;
    }
}
</style>