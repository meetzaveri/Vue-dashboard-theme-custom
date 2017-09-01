<template>
 <section id="swi">
        <div class="main">
            <div class="container-fluid">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="centering">
                        <h2>SECTION WITH IMAGES</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom_div">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                        </div>
                        <div class="text-part">
                            <h3>CRAZYLOREM</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                        </div>
                        <div class="text-part">
                            <h3>CRAZYLOREM</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                        </div>
                        <div class="text-part">
                            <h3>CRAZYLOREM</h3>
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
/* SECTION WITH IMAGES */

#swi .centering h2{
	text-align: center;
}


@media only screen
and (min-width: 768px)
and (max-width: 1385px){
	#swi .custom_div{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#swi .col-lg-4{
	padding: 0;
	width: 29%;
	}

}

@media only screen
and (min-width: 325px)
and (max-width: 600px){
	#swi .img-part{
		padding: 20px;
	}
	#swi .text-part h3{
		text-align: center;
	}
}
</style>