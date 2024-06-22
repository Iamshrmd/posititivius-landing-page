<script>
import Navbar from './components/Navbar.vue';
import HeaderPage from './components/Header.vue';
import Services from './components/Services.vue';
import CaseStudies from './components/CaseStudies.vue';
import Questions from './components/Questions.vue';

export default {
  components : {Navbar, HeaderPage, Services , CaseStudies , Questions},
  data(){
    return{
      caseItems:[
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
      ],
      questions: [
        {
          visible:false,
          title:"Consultation",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",

        },
        {
          visible:false,
          title:"Research and Strategy Development",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          visible:false,
          title:"Implementation",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          visible:false,
          title:"Monitoring and Optimization",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          visible:false,
          title:"Continual Improvement",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          visible:false,
          title:"Reporting and Communication",
          answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
      ]
    }
  },
  methods: {
    showQanswer(i) {
      this.questions.forEach((q,index) => {
        q.visible = !q.visible ? index === i : q.visible = false
      });
      }
  }
}
</script>

<template>
  <div>
    <Navbar/>
    <HeaderPage/>
    <Services/>
    <CaseStudies :caseItems="caseItems"/>
    <Questions @q-c="showQanswer" :questions="questions"/>
  </div>
</template>

<style>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
