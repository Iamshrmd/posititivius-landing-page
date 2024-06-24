<template>
  <section>
        <div class="flex items-center justify-center flex-col gap-x-5 md:flex-row gap-y-5 md:justify-start my-10">
            <h2 class="bg-[#b9ff66] rounded-md text-center px-2 text-4xl font-medium font-normal md:text-4xl">Contact Us</h2>
            <p class="text-base font-normal md:text-lg md:w-1/2">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        <div>
            <form class="flex rounded-3xl bg-[#F3F3F3] p-10 w-full">
                <div class="flex flex-col flex-1 gap-y-5">
                    <div class="flex justify-evenly mb-2">
                        <div class="flex items-center gap-x-2">
                            <input class="w-7 h-7 color-[#fff] accent-[#B9FF66]" type="radio">
                            <label class="text-base md:text-lg">Say Hi</label>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <input class="w-7 h-7 accent-[#B9FF66] " type="radio">
                            <label class="text-base md:text-lg">Get a Quote</label>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly gap-y-3">
                        <label class="text-[#000] text-sm md:text-base">Name</label>
                        <input class="rounded-xl h-14 block border border-solid border-[#000]" type="text">
                        <label class="text-[#000] text-sm md:text-base">Email*</label>
                        <input class="rounded-xl h-14 block border border-solid border-[#000]" type="text">
                        <label class="text-[#000] text-sm md:text-base">Message*</label>
                        <textarea class="h-32 rounded-xl block k border border-solid border-[#000]" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button class="w-full py-5 px-9 bg-[#191A23] rounded-xl text-[#fff]">Send Message</button>
                    </div>
                </div>
                <div class="relative md:w-full flex-1 hidden md:block ">
                    <img class="hidden h-0 w-0 md:inline-block absolute -right-[7%] md:w-3/5 md:h-full " src="../assets/imgs/Illustration (11).png">
                </div>
            </form>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>