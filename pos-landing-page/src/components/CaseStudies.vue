<template>
  <section>
        <div>
            <div class="flex items-center justify-center flex-col gap-x-5 md:flex-row gap-y-5 md:justify-start my-10">
                <h2 class="bg-[#b9ff66] rounded-md text-center px-2 text-4xl font-medium font-normal md:text-4xl">Case Studies</h2>
                <p class="text-base font-normal md:text-lg md:w-1/2">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div class="overflow-hidden md:hidden">
                <div class="overflow-scroll flex gap-x-5">
                    <div class="bg-[#191A23] py-10 px-12 rounded rounded-3xl min-w-[350px] inline-block" v-for="(caseItem,i) in caseItems" :key="i">
                        <p class="text-[#fff] w-full">{{ caseItem }}</p>
                        <div class="flex items-center gap-x-5 mt-5">
                            <label class="text-[#B9FF66]">Learn more</label>
                            <img class="w-5 h-5" src="../assets/imgs/Arrow 1.png">
                        </div>
                    </div>

                </div>
            </div>
            <div class="hidden md:flex bg-[#191A23] justify-between rounded-3xl">
                <div class="flex items-center justify-center" v-for="(caseItem,i) in caseItems" :key="i">
                    <div class=" py-14 px-16">
                        <p class="text-[#fff] text-xl font-light">{{ caseItem }} </p>
                        <div class="flex items-center gap-x-5 mt-5">
                            <label class="text-[#B9FF66] text-xl">Learn more</label>
                            <img class="w-5 h-5" src="../assets/imgs/Arrow 1.png">
                        </div>
                    </div>
                    <span class="inline-block w-px h-1/2 bg-[#fff] opacity-80"></span>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    props: ['caseItems'],
}
</script>

<style>

</style>