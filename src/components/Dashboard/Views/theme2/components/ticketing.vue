<template>

    <section class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="tickets">
        <div class="main">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 centering">
                        <h2 class="uppercase text-center">TICKETS</h2>
                        <hr>
                    </div>

                    <div class="col-lg-12">
                        <!-- PRICE TABLES -->
                        <div id="price-tabs">
                            <!-- id ="price-carousel">
                        and remove col-lg-4 divs
                        -->
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding">
                                <div class="price-table early-bird">
                                    <div class="icon">
                                        <i class="pe-5x pe-7s-wristwatch"></i>
                                    </div>

                                    <div class="table-header">
                                        <div>
                                            <p class="price">$150</p>
                                        </div>
                                        <div class="price-tab-btn">
                                            <h3>Early Bird</h3>
                                        </div>

                                    </div>
                                    <hr>
                                    <p>
                                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding">
                                <div class="price-table standart">
                                    <div class="icon">
                                        <i class="pe-5x pe-va pe-7s-ribbon"></i>
                                    </div>

                                    <div class="table-header">
                                        <div>
                                            <p class="price">$150</p>
                                        </div>
                                        <div class="price-tab-btn">
                                            <h3>Early Bird</h3>
                                        </div>

                                    </div>

                                    <hr>
                                    <p>
                                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding">
                                <div class="price-table vip">
                                    <div class="icon">
                                        <i class="fa fa-plus"></i>
                                    </div>

                                    <div class="table-header">
                                        <div>
                                            <p class="price">$150</p>
                                        </div>
                                        <div class="price-tab-btn">
                                            <h3>Early Bird</h3>
                                        </div>

                                    </div>

                                    <hr>
                                    <p>
                                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit AMET Lorem ipsum dolor sit sit amet amet amet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center register-tab">
                        <a class="button button-small button-line-dark html-popup" href="register.html">register now</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<script>
/* eslint-disable */
</script>

<style>


/* TICKETING */

#tickets {
	background:#f5f5f5;
	border-bottom:1px solid #f0f0f0;
	padding:40px 20px;
}

#tickets #price-tabs {
	margin:20px 0 40px 0;
}

#tickets .price-table {
	color:#ffffff;
	background:#fac42b;
	padding:20px;
	line-height:1;
	font-weight:300;
	position:relative;
	overflow:hidden;
}

#tickets .no-padding{
	padding: 0;
}

#tickets .price-table p{
	font-size: 15px;
	padding: 20px;
}

#tickets .price-table hr{
	border: 1px dotted #fff;
}

#tickets .early-bird {
	background:#fac42b;
}

#tickets .standart {
	background:#fcba00;
}

#tickets .vip {
	background:#f0b202;
}

#tickets .register-tab{
	padding: 45px;
}

#tickets .price-table .icon {
	color:rgba(255,255,255, 0.4);
	position:absolute;
	bottom:-50px;
	right:-50px;
	display:block;
	font-size:40px;	
}

#tickets .price-table .price {
	color:#444444;
	font-family:'montserratbold';
	font-size:50px;
	padding: 20px 0px;
	font-weight:400;
}

#tickets .price-table h3 {
	color:#ffffff;
	background:#262626;
	font-family:Open Sans;
	font-weight:400;
	font-size:10px;
	letter-spacing:2px;
	border-radius:30px;
	text-transform:uppercase;
	padding:5px 40px;
	margin:0;
}

#tickets .table-header{
	display: flex;
}

#tickets .table-header .price-tab-btn{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 0px 0px 50px;
}

#tickets .price-table .desc li {
	font-family:'montserratlight';
	line-height:2;
	border-bottom:1px dotted;
	border-color:rgba(255,255,255, 0.7);
}

#tickets .price-table .desc li:last-child {
	border-bottom:none;
}

@media only screen 
and (max-width: 1125px)
and (min-width: 993px){
	#tickets .price-table h3 {
    padding: 10px 25px;
}
#tickets .table-header .price-tab-btn {
    padding: 0px 0px 0px 30px;
}
}

@media only screen 
and (max-width: 992px)
and (min-width: 800px){
	#tickets .price-table h3 {
    padding: 10px 10px;
}
#tickets .price-table .price {
    padding: 15px 0px;
    font-size: 30px;
    font-weight: 400;
}
#tickets .table-header .price-tab-btn {
    padding: 0px 0px 0px 20px;
}
#tickets .price-table p {
    font-size: 14px;
    padding: 20px;
}
}

@media only screen 
  and (min-width: 768px) 
  and (max-width: 1024px)  {

  		#tickets .price-table h3 {
    padding: 5px 10px;
        font-weight: 300;
    font-size: 12px;
}
#tickets .price-table .price {
    padding: 15px 0px;
    font-size: 30px;
    font-weight: 400;
}
#tickets .table-header .price-tab-btn {
    padding: 0px 0px 0px 20px;
}
#tickets .price-table p {
    font-size: 14px;
    padding: 10px;
}
#tickets .price-table .icon {
    color: rgba(255,255,255, 0.4);
    position: absolute;
    bottom: -40px;
    right: -50px;
    display: block;
    font-size: 30px;
}

#tickets .table-header .price-tab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 40px;
}
#tickets .price-table {
    color: #ffffff;
   
    padding: 9px;
    line-height: 1;
    font-weight: 300;
    position: relative;
    overflow: hidden;
}
#tickets .price-table h3 {
    color: #ffffff;
    background: #262626;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 2px;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 5px 9px;
    margin: 0;
}


}

@media only screen 
  and (min-width: 330px) 
  and (max-width: 650px) {
  	#tickets .price-table h3{
  	 padding: 5px 9px;
  	}
  	#tickets .table-header .price-tab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 80px;
	}
	#tickets .price-table .price{
		font-size: 32px;
  	}
}

</style>