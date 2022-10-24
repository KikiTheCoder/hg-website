<template>
    <nav id="topnav" class="border-b border-neutral-700 w-screen fixed top-0 left-0 h-20 flex px-8 text-white bg-neutral-900">
        <div class="text-xl my-auto font-halloween">Halloween Garten Hohenkirchen</div>
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
        @apply text-xl mr-3 my-auto font-halloween float-right hover:text-red-700 cursor-pointer duration-200;
    }
}
</style>