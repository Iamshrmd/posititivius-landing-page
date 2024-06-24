<script>
import Navbar from './components/Navbar.vue';
import HeaderPage from './components/Header.vue';
import Services from './components/Services.vue';
import CaseStudies from './components/CaseStudies.vue';
import Questions from './components/Questions.vue';
import Team from './components/Team.vue';
import Slider from './components/Slider.vue';
import Contact from './components/Contact.vue';


export default {
  components : {Navbar, HeaderPage, Services , CaseStudies , Questions, Team, Contact , Slider},
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
      ],
      teamItems:[
        {
          name:"John Smith",
          title:"CEO and Founder",
          des:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
          img:""
        },
        {
          name:"Jane Doe",
          title:"Director of Operations",
          des:"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
          img:""
        },
        {
          name:"Michael Brown",
          title:"Senior SEO Specialist",
          des:"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
          img:""
        },
        {
          name:"Emily Johnson",
          title:"PPC Manager",
          des:"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
          img:""
        },
        {
          name:"Brian Williams",
          title:"Social Media Specialist",
          des:"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
          img:""
        },
        {
          name:"Sarah Kim",
          title:"Content Creator",
          des:"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
          img:""
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
    <Team :teamItems="teamItems"/>
    <Slider/>
    <Contact/>
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
