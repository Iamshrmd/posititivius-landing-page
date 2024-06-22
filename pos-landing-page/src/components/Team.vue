<template>
  <section>
        <div class="flex items-center justify-center flex-col gap-x-5 md:flex-row gap-y-5 md:justify-start my-10">
            <h2 class="bg-[#b9ff66] rounded-md text-center px-2 text-4xl font-medium font-normal md:text-4xl">Team</h2>
            <p class="text-base font-normal md:text-lg md:w-1/2">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 gap-x-5 flex-wrap justify-between">
            <div class="border-b-4 gap-y-10 border border-solid border-[#000] rounded-3xl py-10 px-9 flex flex-col" v-for="(teamItem,i) in showFirstFour" :key="i">
                <div class="flex justify-between">
                    <div>
                        <img class="w-24 h-24 md:w-28 md:h-28" :src="`src/assets/team/Picture (${i}).png`" alt="">
                    </div>
                    <div class="flex flex-col w-1/2 items-end justify-between">
                        <img class="w-8 h-8" src="../assets/imgs/Social icon.png" alt="">
                        <div class="w-full">
                            <h3 class="text-lg font-medium md:text-xl">{{ teamItem.name }}</h3>
                            <label class="text-base md:text+lg"> {{ teamItem.title }}</label>
                        </div>
                    </div>
                </div>
                <div class="text-base md:text-lg border-t pt-5 border-solid border-[#000]">{{ teamItem.des }}</div>
            </div>
        </div>
        <div class="flex justify-end my-10">
            <button class="text-xl md:text-2xl bg-[#191A23] rounded-2xl w-full md:w-1/3 text-[#fff] py-5 px-9">See all team</button>
        </div>
  </section>
</template>

<script>
export default {
    props:['teamItems'],
    computed: {
        showFirstFour: function()
            {
                if (window.innerWidth <= '640px') {
                    return this.teamItems.slice(0,4)
                }else {
                    return this.teamItems
                }
            }
        }
}
</script>

<style>

</style>