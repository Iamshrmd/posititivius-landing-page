<template>
    <div class="w-full flex items-center justify-between">
        <img class="w-36 md:w-52" src="../assets/imgs/Logo.png" alt="logo">
        <button class="navbar-burger flex items-center">
                    <svg class="md:hidden block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path fill="#000" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
        </button>
        <div class="hidden md:flex gap-x-4 items-center">
           <a href="#" class="text-xl text-[#000]">About us</a>
           <a href="#" class="text-xl text-[#000]">Services</a>
           <a href="#" class="text-xl text-[#000]">Use Cases</a>
           <a href="#" class="text-xl text-[#000]">Pricing</a>
           <a href="#" class="text-xl text-[#000]">Blog</a>
           <button class="border border-solid border-[#191A23] py-5 px-9 rounded-2xl text-[#000] text-xl">Request a quote</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>