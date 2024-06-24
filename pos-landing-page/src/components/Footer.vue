<template>
  <section class="bg-[#191A23] mt-10 py-12 px-5 md:rounded-t-3xl md:py-14 md:px-16">
    <div>
        <div class="flex flex-col items-center justify-center gap-y-5 md:flex-row justify-between">
            <img class="w-36 md:w-48" src="../assets/imgs/Logo-white.png">
            <ul class="flex flex-col gap-y-3 md:flex-row gap-x-3">
                <li class="text-center"><a class="text-base md:text-lg text-[#fff] text-center" href="#">About us</a></li>
                <li class="text-center"><a class="text-base md:text-lg text-[#fff] text-center" href="#">Services</a></li>
                <li class="text-center"><a class="text-base md:text-lg text-[#fff] text-center" href="#">Use Cases</a></li>
                <li class="text-center"><a class="text-base md:text-lg text-[#fff] text-center" href="#">Pricing</a></li>
                <li class="text-center"><a class="text-base md:text-lg text-[#fff] text-center" href="#">Blog</a></li>
            </ul>
            <div class="hidden md:flex gap-x-5">
                <img class="w-7 h-7" src="../assets/imgs/Social icon-linkedin.png">
                <img class="w-7 h-7" src="../assets/imgs/Social icon (1).png">
                <img class="w-7 h-7" src="../assets/imgs/Social icon (2).png">
            </div>
        </div>
        <div class="flex flex-col items-center my-10 md:flex-row md:h-60">
            <div class="flex flex-col items-center md:items-start h-full px-8 gap-y-5 justify-between h-full">
                <div>
                <label class="bg-[#B9FF66] text-lg px-2 md:text-xl rounded-lg">Contact us:</label>
                </div>
            <div class="flex flex-col gap-y-5 items-center md:items-start h-full justify-between">
                <span class="text-[#fff] text-base md:text-lg w-3/4 text-center md:text-left">Email: info@positivus.com</span>
                <span class="text-[#fff] text-base md:text-lg r w-3/4 text-center md:text-left">Phone: 555-567-8901</span>
                <span class="text-[#fff] text-base md:text-lg w-3/4 text-center md:text-left">Address: 1234 Main St Moonstone City, Stardust State 12345</span>
            </div>
            </div>
            <div class="bg-[#292A32] rounded-xl p-8 w-full mt-5 md:w-4/5 flex flex-col md:flex-row h-full items-center justify-center gap-y-5 gap-x-5">
                <input class="w-full  h-2/5 py-5 px-6 rounded-xl bg-[#191A23] border border-solid border-[#fff] text-[#fff]" type="text" placeholder="Email">
                <button class="w-full  h-2/5 py-5 px-9 rounded-xl bg-[#B9FF66] text-xl text-center">Subscribe to news</button>
            </div>
        </div>
        <div class="flex gap-x-5 md:hidden items-center justify-center">
                <img class="w-7 h-7" src="../assets/imgs/Social icon-linkedin.png">
                <img class="w-7 h-7" src="../assets/imgs/Social icon (1).png">
                <img class="w-7 h-7" src="../assets/imgs/Social icon (2).png">
            </div>
    </div>
    <div class="my-10">
        <span class="w-full h-px bg-[#fff] inline-block opacity-50"></span>
    </div>
    <div class="flex flex-col items-center gap-y-3 gap-x-7 md:flex-row">
        <span class="text-[#fff] text-base md:text-lg">© 2023 Positivus. All Rights Reserved.</span>
        <span class="text-[#fff] text-base md:text-lg">Privacy Policy</span>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>