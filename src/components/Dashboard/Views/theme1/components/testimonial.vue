<template>
  <section id="testimonial">
       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="centering">
                            <h2>TESTIMONIAL</h2>
                            <hr>
                        </div> 

    <slick ref="slick" :options="slickOptions">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="item">
                                <div class="slider-part">
                                    <img class="img-circle" src="http://i.imgur.com/igriRpr.png" alt="">
                                    <div class="slider-inner-part">
                                        <p class="name">Mr. Jatin Chaudhary</p>
                                        <span>
                                    Co-founder & Salesman,
                                    @eChaiventures
                                     </span>
                                    </div>
                                </div>
                                <div class="custom_para">
                                    <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies.Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                             <div class="item">
                                <div class="slider-part">
                                    <img class="img-circle" src="http://i.imgur.com/igriRpr.png" alt="">
                                    <div class="slider-inner-part">
                                        <p class="name">Todd Stone</p>
                                        <span>
                                    Co-founder & Salesman,
                                    @eChaiventures
                                     </span>
                                    </div>
                                </div>
                                <div class="custom_para">
                                    <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies.Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                                </div>
                            </div> 
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                             <div class="item">
                                <div class="slider-part">
                                    <img class="img-circle" src="http://i.imgur.com/igriRpr.png" alt="">
                                    <div class="slider-inner-part">
                                        <p class="name">Todd Stone</p>
                                        <span>
                                    Co-founder & Salesman,
                                    @eChaiventures
                                     </span>
                                    </div>
                                </div>
                                <div class="custom_para">
                                    <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies.Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                                </div>
                            </div> 
                    </div>
    </slick> 
    <div class="splash-img">
                            <div class="img-part img-responsive">
                                <img src="http://i.imgur.com/PubHlXb.png">
                            </div>
                        </div>
       </div>
  </section>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import Slick from 'vue-slick';

export default{
     data() {
        return {
            slickOptions: {
            infinite: false,
            speed: 300,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
                // Any other options that can be got from plugin documentation
            },
        }
    },
    components: { 'slick': Slick },
methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick();
        },
    },
    }
</script>

<style>

/* button.slick-next{
        position: static;
 

} 

button.slick-prev{
       position: static;


}  */



/* TESTIMONIAL */



#testimonial {
	background-repeat: no-repeat;
	background-attachment:fixed;
	background-position: center;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	color:#ffffff;
	padding:0;
}

#testimonial h2{
	text-align: center;
}

#testimonial .slider-part{
	display: flex;
 padding: 20px 20px 20px 0px;
}

#testimonial .slider-inner-part{
	color: #000;
}

#testimonial .testimonial-inner {
 
	padding:50px 40px 30px 40px;
	min-height:400px;
}

#testimonial-carousel img {
	border:2px solid #ffffff;
	margin:0 0 20px 0;
}

#testimonial .lead {
	color:#262626;
	padding: 25px;
    font-size: 20px;
}

#testimonial .custom_para{
	background: #F5F5F5;
}

#testimonial .name {
	color:#000;
	font-family:'montserratbold';
	font-size:12px;
	letter-spacing:2px;
	text-transform:uppercase;
	padding: 10px 10px 0px 10px;
	align-self: center;
}

#testimonial .slider-inner-part{
	display: block;	
	width: 205px;
	margin-left: 15px;
}

#testimonial .slider-inner-part span{
	font-size: 14px;	
	padding: 10px 10px 10px 10px;
}

#testimonial .owl-theme .owl-controls {
  text-align: left;
}

#testimonial .img-part{
	width: 100px;
	height: 100px;
	position: absolute;
	bottom: 15px;
	z-index: -1;
	right: -30px;
}

#testimonial .item{
	padding: 10px;
}

#testimonial .img-part img{
	max-width: 100%;
	max-height: 100%;
}

@media only screen 
  and (min-width: 330px) 
  and (max-width: 650px){
	#testimonial .testimonial-inner {
    max-height: 600px;
}
}

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation:portrait) {
  	#testimonial .img-part {
    width: 75px;
    height: 100px;
    position: absolute;
    bottom: 35px;
    z-index: -1;
    right: 0px;
	}	
}
</style>