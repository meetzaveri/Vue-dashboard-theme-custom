<template>
 <!-- SECTION WITH ICON, TEXT AND IMAGES -->

    <section id="switi">
        <div class="main">
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="centering">
                        <h2>SECTION WITH ICON, TEXT AND IMAGES</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                            <div class="icon-part">
                                <img class="img-responsive" src="http://i.imgur.com/UpbvMKJ.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="img-part">
                            <img class="img-responsive" src="http://i.imgur.com/UXPi5XM.png">
                            <div class="icon-part">
                                <img class="img-responsive" src="http://i.imgur.com/UpbvMKJ.png">
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

/* SECTION WITH ICON, TEXT AND IMAGES */

#switi .icon-part{
	position: absolute;
    bottom: 0;
    left: 37%;
    top: 40%;
}

#switi .icon-part {
    position: absolute;
    bottom: 0;
    left: 37%;
    top: 40%;
}

@media only screen
and (min-width: 768px)
and (max-width: 1024px){
	#switi .centering h2{
		    font-size: 22px;
    text-align: center;
	}
	
}

@media only screen
and (min-width: 325px)
and (max-width: 600px){
	#switi .img-part{
		padding: 20px;
	}
	#switi .icon-part {
    position: absolute;
    bottom: 0;
    left: 29%;
    top: 33%;
	}
}

</style>