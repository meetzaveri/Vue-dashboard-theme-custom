<template>
<section id="countdown">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 c-padding">
       <slick ref="slick" :options="slickOptions">

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 custom-str">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="icon-part">
                <i class="fa fa-calendar"></i>
            </div>   
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 no-padding"> 
            <div class="block-text">
                <p class="digit">{{ days | twoDigits }}</p>
                <p class="text">Days</p>
            </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 custom-str">
           <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="icon-part">
                <i class="fa fa-calendar"></i>
            </div>   
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 no-padding">
            <div class="block-text">
                <p class="digit">{{ hours | twoDigits }}</p>
                <p class="text">Hours</p>
            </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 custom-str">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="icon-part">
                <i class="fa fa-calendar"></i>
            </div>   
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 no-padding">
            <div class="block-text">
                <p class="digit">{{ minutes | twoDigits }}</p>
                <p class="text">Minutes</p>
            </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 custom-str">
            
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="icon-part">
                <i class="fa fa-calendar"></i>
            </div>   
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 no-padding">
            <div class="block-text">
                <p class="digit">{{ seconds | twoDigits }}</p>
                <p class="text">Seconds</p>
            </div>
            </div>
        </div>
        </slick>
    </div>
       
</section>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import Slick from 'vue-slick';

Vue.filter('twoDigits', (value) => {
    if ( value.toString().length <= 1 ) {
        return '0'+value.toString()
    }
    return value.toString()
});

export default {

props: ['deadline'],

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            slickOptions: {
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

     // All slick methods can be used too, example here
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

    mounted() {
                this.date = Math.trunc(Date.parse(this.deadline) / 1000)

    setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000)
    },

    components: { 'slick': Slick },

    computed: {
    seconds() {
        return (this.date - this.now) % 60;
    },

    minutes() {
        return Math.trunc((this.date - this.now) / 60) % 60;
    },

    hours() {
        return Math.trunc((this.date - this.now) / 60 / 60) % 24;
    },

    days() {
        return Math.trunc((this.date - this.now) / 60 / 60 / 24);
    }
    }

    /* Computed properties will be here */
}
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.custom-str{
    display: flex;
}

.c-padding{
    padding: 40px;
}

.no-padding{
    padding:0;
}

#countdown .icon-part{
    border-right:1px solid #000;
    padding: 14px 2px;
}

.icon-part i{
   font-size:30px;
}

.block-text {
    margin-right:50%;
}

.text {
    color: #000;
    font-size: 16px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #000;
    font-size: 40px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    text-align: center;
}


#countdown button.slick-prev{
       position: absolute;
    bottom: 0px;
    left: 41%;

} 

@media only screen
and (max-width:667px)
and (min-width:335px){
    #countdown button.slick-prev{
       position: absolute;
    bottom: 0px;
    left: 30%;

} 
}


#countdown button.slick-next{
        position: absolute;
    bottom: 0px;
    left: 52%;

} 
</style>
