


<template>
  <section>
        <div @click="clicked" class="flex items-center justify-center flex-col gap-x-5 md:flex-row gap-y-5 md:justify-start my-10">
            <h2 class="bg-[#b9ff66] rounded-md text-center px-2 text-4xl font-medium font-normal md:text-4xl">Testimonials</h2>
            <p class="text-base font-normal md:text-lg md:w-1/2">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
        </div>
        <swiper v-if="pageWidth < 1200"
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper w-full h-[500px]"
  >
    <swiper-slide class="w-full">
      <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-3/4 p-8 rounded-3xl">
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
            <p class="text-base">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-3/4 p-8 rounded-3xl">
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
            <p class="text-base">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">Jane Doe</h3>
            <label class="text-lg">Marketing Director at XYZ Corp</label>
          </div>
        </div>
      </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-3/4 p-8 rounded-3xl">
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
            <p class="text-base">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">Michael Brown</h3>
            <label class="text-lg">Director of Operations</label>
          </div>
        </div>
      </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-3/4 p-8 rounded-3xl">
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
            <p class="text-base">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">Emily Johnson</h3>
            <label class="text-lg">PPC Manager</label>
          </div>
        </div>
      </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-[400px] w-full">
        <div class="h-full flex flex-col overflow-hidden">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-3/4 p-8 rounded-3xl flex">
            <p class="text-base">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">Brian Williams</h3>
            <label class="text-lg">Social Media Specialist</label>
          </div>
        </div>
      </div>
      </div>
    </swiper-slide>
  </swiper>

  <swiper v-if="pageWidth >= 1200"
    :slidesPerView="2"
    :spaceBetween="30"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper flex"
  >
    <swiper-slide>
      <div class="h-[400px]  w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-10 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px]  w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-sm z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px] w-full">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="h-[400px] w-full mt-b-auto">
        <div class="h-full">
          <div class="relative z-5 border bordee-solid border-[#B9FF66] h-1/2 p-8 rounded-3xl">
            <p class="text-base z-20 absolute left-0">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
            <div class="w-10 h-10 border-b border-r border-[#B9FF66] bg-[#191A23] z-10 absolute -bottom-5 rotate-45"></div>
          </div>
          <div class="mt-5">
            <h3 class="text-[#B9FF66] text-lg">John Smith</h3>
            <label class="text-base">CEO and Founder</label>
          </div>
        </div>
      </div>
    </swiper-slide>

  </swiper>


  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data(){
    return{
      pageWidth: window.innerWidth
    }
  },
  methods: {
    clicked(){
      console.log(this.pageWidth);
    }
  },
  components: {
    Swiper, SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 45px;
  padding: 30px 30px 60px 30px;
  background: #191A23;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #191A23;
  color: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative
}
.swiper-button-next{
 content: url("../assets/imgs/Group 115.png");
 width: 20px;
 height: 20px;
 top: 90%;
 cursor: pointer;
}
.swiper-button-prev{
 content: url("../assets/imgs/Group -115.png");
 width: 20px;
 height: 20px;
 top: 90%;
 cursor: pointer;
}
.swiper-pagination-bullets{
   bottom: 10% !important;
   width: 50% !important;
   margin: 0 25% !important;
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.swiper-pagination-bullet{
  background-image: url("../assets/imgs/Vector.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
}
.swiper-pagination-bullet-active{
  background-image: url("../assets/imgs/Vector-active.png");
}

</style>