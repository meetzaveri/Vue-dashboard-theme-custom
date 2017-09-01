<template>
    <!-- SECTION WITH ICON AND TEXT -->

    <section id="swiat">
        <div class="main">
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="centering">
                        <h2>SECTION WITH ICON AND TEXT</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 column-extra-space">
                        <div class="cent">
                            <div class="img-part">
                                <a href="#">
                                    <img class="img-responsive" src="http://i.imgur.com/CeaiN4O.png">
                                </a>

                            </div>
                        </div>
                        <div class="headline">
                            <h4>Clickable Icon Box</h4>
                            <p>
                                Appear. Grass years Grass form said creature meat us he multiply yielding
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 column-extra-space">
                        <div class="cent">
                            <div class="img-part">
                                <a href="#">
                                    <img class="img-responsive" src="http://i.imgur.com/CeaiN4O.png">
                                </a>
                            </div>
                        </div>
                        <div class="headline">
                            <h4>Clickable Icon Box</h4>
                            <p>
                                Appear. Grass years Grass form said creature meat us he multiply yielding
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 column-extra-space">
                        <div class="cent">
                            <div class="img-part">
                                <a href="#">
                                    <img class="img-responsive" src="http://i.imgur.com/CeaiN4O.png">
                                </a>
                            </div>
                        </div>
                        <div class="headline">
                            <h4>Clickable Icon Box</h4>
                            <p>
                                Appear. Grass years Grass form said creature meat us he multiply yielding
                            </p>
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

/* SECTION WITH ICON AND TEXT  */

#swiat .img-part{
	width: 125px;
    border: 1px solid #F8DE9B;
    height: 125px;
    border-radius: 50%;
    padding: 29px;
    align-items: center;
    display: flex;	
}

#swiat .cent{
	display: grid;
	align-items: center;
	justify-content: center;
}

#swiat .centering h2{
	text-align: center;
}

#swiat h4{
	text-align: center;
}
#swiat p{
	text-align: center;
}

@media only screen
and (min-width: 768px)
and (max-width: 1024px){
	#swiat .img-part {
    width: 125px;
    border: 1px solid #F8DE9B;
    height: 125px;
    border-radius: 50%;
    padding: 20px;
    align-items: center;
    display: flex;
	}
}



@media only screen
and (min-width: 330px)
and (max-width: 650px){
	.column-extra-space{
		padding: 20px; 
	}	
}

</style>