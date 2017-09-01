<template>
<section id="swtai">
        <div class="main">
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="centering">
                        <h2>SECTION WITH TEXT AND IMAGES</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom_des">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                            <div class="desc_part">
                                <h3>NICELILY</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                            <div class="desc_part">
                                <h3>NICELILY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
/* SECTION WITH TEXT AND IMAGES */

#swtai .centering h2{
	text-align: center;
}

#swtai .img-part{
	position: relative;
}

#swtai .desc_part{
	position: absolute;
    z-index: 1;
    bottom: 40px;
    left: 25px;
}


@media only screen
and (min-width: 768px)
and (max-width: 1024px){
	#swtai .desc-part h3{
		font-size: 17px !important;
	}
}

@media only screen
and (min-width: 325px)
and (max-width: 600px){
	#swtai .custom_mobile_res{
		padding: 20px;	
	}
	#swtai .desc_part h3{
		font-size: 20px;
	}
	#swtai .centering h2{
		font-size: 25px;
	}
	#swtai .desc_part {
    	position: absolute;
    	z-index: 1;
    	bottom: 85px;
    	left: 45px;
	}
	#swtai .img-part{
		padding: 20px;
	}
}

</style>