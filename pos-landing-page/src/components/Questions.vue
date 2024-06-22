<template>
  <section>
        <div class="flex items-center justify-center flex-col gap-x-5 md:flex-row gap-y-5 md:justify-start my-10">
            <h2 class="bg-[#b9ff66] rounded-md text-center px-2 text-4xl font-medium font-normal md:text-4xl">Our Working Process </h2>
            <p class="text-base font-normal md:text-lg md:w-1/2">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div>
            <div v-for="(question,i) in questions" :key="i">
                <div @click="questionClicked(i)" class="bg-[#F3F3F3] flex flex-col items-center gap-y-5 items-center justify-between rounded-3xl my-5 p-7 border-solid border-[#000] border border-b-4" :class="{'!bg-[#B9FF66]':question.visible}">
                    <div class="flex justify-between w-full items-center">
                        <span class="text-3xl md:text-6xl">0{{ i+1 }}</span>
                        <label class="text-lg md:text-3xl">{{ question.title }}</label>
                        <div class="relative flex items-center justify-center">
                            <img src="../assets/imgs/Ellipse 30.png">
                            <img class="absolute" src="../assets/imgs/+.png" :class="{'hidden': question.visible}">
                            <img class="absolute h-1 w-1/2" src="../assets/imgs/-.png" :class="{'hidden': !question.visible}">
                        </div>
                    </div>
                    <div class="panel max-h-0 transition-[max-height] duration-500 overflow-hidden border-[#000] border-solid" :class="{'border-t': question.visible}">
                        <p class="text-base my-2 md:text-lg">{{ question.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    props:['questions'],
    data() {
        return{
            panels:null
        }
    },
    methods:{
        questionClicked(i) {
            this.$emit('q-c',i)
            this.panels = document.querySelectorAll('.panel')
            this.panels.forEach((p,index) => {
                if (index === i) {
                    if (p.style.maxHeight) {
                        p.style.maxHeight=null;
                        console.log('empty');
                    }else{
                        p.style.maxHeight = (p.scrollHeight) + "px"
                        console.log('full')
                        console.log(p.style.maxHeight);
                    }
                }else{
                    p.style.maxHeight=null;
                }
            });
        }
    }
}
</script>

<style>

</style>