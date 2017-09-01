<template>
<div>
	<h1> Theme 1 </h1>
<component is="navbar"> </component>
 <component is="banner"> </component>
<component is="about"> </component>
 <component
    is="countdown-timer" deadline="August 1, 2017">
</component>
<component
    is="countdown-normal">
</component> 
 <component is="stakeholders"> </component>
<component is="speakers"> </component>
<component is="networking"> </component>
<component is="testimonial"> </component>
<component is="program"> </component>
<component is="ticketing"> </component>
<component is="register"> </component>
<component is="exhibitor"> </component>
<component is="sponsors"> </component>
 <component is="galleryimg"> </component>
<component is="livevideo"> </component>
<component is="faqs"> </component> 
<component is="upcomingevents"> </component>  
<component is="featsessions"> </component>
<!-- <component is="downloadapp"> </component> -->
<!-- <component is="blogs"> </component>
<component is="swp"> </component>
<component is="swtai"> </component>
<component is="swi"> </component>
<component is="switi"> </component>
<component is="swiat"> </component>
<component is="swl"> </component>
<component is="swt"> </component>
<component is="accomo"> </component>
<component is="contact"> </component>
<component is="social"> </component>
<component is="footercstm"> </component> -->

</div>
</template>

<script>
/* eslint-disable */
import About from './components/about.vue';
import Banner from './components/banner.vue';
import Navbar from './components/navbar.vue';
import Countdowntimer from './components/countdown-timer.vue';
import Countdownnormal from './components/countdown-normal.vue';
import Stakeholders from './components/stakeholders.vue'
import Speakers from './components/speakers.vue'
import Networking from './components/networking.vue'
import Testimonial from './components/testimonial.vue'
import Program from './components/program.vue'
import Ticketing from './components/ticketing.vue'
import Register from './components/registerhere.vue'
import Exhibitors from './components/exhibitors.vue'
import Sponsors from './components/sponsors.vue'
import Galleryimg from './components/galleryimg.vue'
import Livevid from './components/livevideo.vue'
import Faqs from './components/faqs.vue'
import Upcomingevents from './components/upcomingevents.vue'
import Featsessions from './components/featsession.vue'
// import VueRouter from 'vue-router';
// import Downloadapp from './components/downloadapp.vue'
// import Blogs from './components/blogs.vue'
// import Swp from './components/swp.vue'
// import Swtai from './components/swtai.vue'
// import Swi from './components/swi.vue'
// import Switi from './components/switi.vue'
// import Swiat from './components/swiat.vue'
// import Swl from './components/swl.vue'
// import Swt from './components/swt.vue'
// import Accomodation from './components/accomodation.vue'
// import Contact from './components/contact.vue'
// import Social from './components/social.vue'
// import Footercstm from './components/footercustom.vue'
// import Countdown from './theme/theme1/components/countdown.vue'
export default{
	components :{
		'navbar': Navbar,
		'banner' : Banner,
		'about' : About,
		'countdown-timer' : Countdowntimer,
		'countdown-normal' : Countdownnormal,
		'stakeholders': Stakeholders,
		'speakers' : Speakers,
		'networking' : Networking,
		'testimonial' : Testimonial,
		'program' : Program,
		'ticketing' : Ticketing,
		'register' : Register,
		'exhibitor' : Exhibitors,
		'sponsors' : Sponsors,
		'galleryimg' : Galleryimg,
		'livevideo' : Livevid,
		'faqs' : Faqs,
		'upcomingevents' : Upcomingevents,
		'featsessions' : Featsessions

	}
}
</script>

<style>
 
/* EVENTR CSS 

	1. CORE CSS
	2. NAVBAR
	3. HIGHLIGHT 
	4. INFO 
	5. SPEAKERS
	6. PROGRAM
	7. DOWNLOAD
	8. VENUE
	9. FUNFACTS
	10. REGISTER
	11. GALLERY
	12. TESTIMONIAL
	13. SPONSORS
	14. FOOTER
	15. MISC.
 
 */
 @import url('https://fonts.googleapis.com/css?family=Montserrat');
 

/* CORE CSS */

body {
	color:#666666;
	font-family:'Open Sans';
	font-size:14px;
	font-weight:400;
	line-height:23px;
	overflow-x:hidden;
}

h1, h2, h3, h4, h5, h6 {
	color:#262626;
}

h2 {
	color:#262626;
	font-family:'montserrat';
	font-size:40px;
}

h3 {
	font-family:'montserratregular';
	font-size:28px;
	letter-spacing:-2px;
	color:#262626;
	line-height:28px;
}

h4 {
	font-family:'montserratregular';
	font-size:18px;
	letter-spacing:1px;
}

h5 {
	font-family:'montserratlight';
}

section{
	padding-bottom: 20px;
	padding-top: 20px;
}

p {
    margin: 0 0 0px;
}

.uppercase {
	text-transform:uppercase;
	margin-top : 1%;
}

.no-padding {
	padding:0;
}

.mfp-bg {
	background:#ffffff;
}

.lead {
	color:#999999;
	text-align: justify;
}

a {
	outline:none;
}

.owl-theme .owl-controls .owl-page span {
	background:#fac42b;
}

.centering{
}

.centering hr{
	border: 2px solid #FAC42B;
	width: 75px;
}

@media only screen 
and (min-width: 330px)
and (max-width: 650px){
	h2{
		font-size: 18px;
	}
	.lead{
		font-size: 13px !important;
	}
}

@media only screen 
and (min-width: 768px)
and (max-width: 1024px){
	h2{
		font-size: 22px;
	}
}
</style>
