
<template>
 <!-- Funfacts -->
    <section id="funfacts">
        <div class="funfacts-inner">
            <div class="container">
                <div class="row">

                    <h2 class="hidden">funfacts</h2>

                    <div class="col-lg-10 col-lg-offset-1">
                        <div id="funfacts-carousel">

                            <div class="item">
                                <i class="pe pe-4x pe-7s-world"></i>
                                <div class="desc">
                                    <p class="number">72</p>
                                    <p class="description">countries</p>
                                </div>
                            </div>

                            <div class="item">
                                <i class="pe pe-4x pe-7s-micro"></i>
                                <div class="desc">
                                    <p class="number">38</p>
                                    <p class="description">speakers</p>
                                </div>
                            </div>

                            <div class="item">
                                <i class="pe pe-4x pe-7s-display2"></i>
                                <div class="desc">
                                    <p class="number">126</p>
                                    <p class="description">programs</p>
                                </div>
                            </div>

                            <div class="item">
                                <i class="pe pe-va pe-4x pe-7s-id"></i>
                                <div class="desc">
                                    <p class="number">495</p>
                                    <p class="description">attenders</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>  
</template>


<style>


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
	font-family:'montserratbold';
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


#countdown {
	margin-top:0;
}

#countdown .countdown_amount {
	color:#666666;
	font-family:'montserratregular';
	font-size:40px;
	text-align:left;
	line-height:50px;
	text-align:center;
}

#countdown .countdown_section {
	color:#262626;
	font-family:'montserratbold';
	font-size:13px;
	text-align:left;
	line-height:10px;
	letter-spacing:0;
	text-align:center;
}



/* FUNFACTS */

#funfacts  {
	background-image: url(../img/bg-funfacts.png);
	background-repeat: no-repeat;
	background-attachment:fixed;
	background-position: center;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	height:310px;
	position:relative;
	padding:0;
}

.funfacts-inner {
	color:#ffffff;
	background:rgba(0,0,0, 0.5);
	position:absolute;
	width:100%;
	height:100%;
}

#funfacts .item {
	margin:100px 0 0 0;
	display:table;
}

#funfacts i {
	float:left;
	border-right:1px solid #ffffff;
	padding:20px 20px 20px 0;
}

#funfacts .desc {
	padding-left:20px;
	display:table-cell;
	vertical-align:middle;
}

#funfacts .number {
	font-family:'montserratbold';
	font-size:40px;
	font-weight:700;
	margin-top:15px;
	margin-bottom:0;
	line-height:1;
}

#funfacts .description {
	font-size:12px;
	font-weight:400;
	letter-spacing:2px;
	text-transform:uppercase;
}
</style>
