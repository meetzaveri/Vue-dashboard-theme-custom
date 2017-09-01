<template>

<!-- REGISTER HERE -->
    <section id="reg-here">
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="centering">
                            <h2>REGISTER<small style="color:#fff">HERE</small></h2>
                            <hr>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <input type="text" placeholder="First Name*" name="fname">
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <input type="text" placeholder="Last Name*" name="lname">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="text" placeholder="Email*" name="email">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <select>
                                    <option value="" selected disabled>Country</option>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                    <option value="">C</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="reg-name">
                                    Will you attend?
                                </div>
                                <div class="radio-inputs">
                                    <input type="radio" name="">Yes
                                    <input type="radio" name="">No
                                    <input type="radio" name="">Maybe
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="reg-name">
                                    Preferred Seating:
                                </div>
                                <div class="checkbox-inputs">
                                    <div>
                                        <input type="checkbox" name="">Front row
                                    </div>
                                    <div>
                                        <input type="checkbox" name="">Second row
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 reg-input">
                                <div class="reg-name">
                                    Select Your Ticket Range:
                                </div>
                                <div class="reg-inputs">
                                    <p>
                                        <input id="amount" readonly="" type="text">
                                    </p>
                                    <div class="custom-padding">
                                        <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-main-slider">
                                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div><span tabindex="0" class="ui-slider-handle ui-custom-handling-1 ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default ui-custom-handling-2" style="left: 40.6%;"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 time-span">

                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 time-span-inner"> <span>Arrival Date :</span>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="">

                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 time-span">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 time-span-inner"> <span>Time :</span>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="inner-cap">
                                <a class="button button-small button-line-light" target="_blank">Register now</a>
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



input[type="text"],
input[type="email"],
select,
textarea {
	font-size:16px;
	font-family:inherit;
	width:100%;
	min-height:30px;
	padding:12px 10px;
	text-transform:uppercase;
	border:0;
	border:1px solid #999999;
	margin-bottom:20px;
	outline:none;
} 

/* REGISTER HERE */
#reg-here{
	background: #262626;
}

#reg-here .centering h2{
	text-align: center;
	color: #fff;
}

#reg-here .reg-name{
	color: #fff;
	font-size: 15px;
	padding: 10px;
}

#reg-here .time-span{
	padding: 10px;
}

#reg-here .reg-inputs{
	padding: 20px;
}

#reg-here .time-span{
	color: #fff;
}

#reg-here .time-span input{
	margin-bottom: 0;
}

#reg-here .time-span-inner {
	display: flex;
	align-items: center;
	justify-content: center;
}

#reg-here .time-span-inner{
	text-align: right;
}

#reg-here .time-span{
	display: flex;
}

#reg-here .radio-inputs input{
	width: 35px;
}

#reg-here .checkbox-inputs input{
	width: 35px;
}

#reg-here .ui-custom-handling-1{
	border-radius: 50px;
    font-size: 13px;
    background: #FAC42B;
    top: -6px;
    border: 0px;
}

#reg-here .ui-custom-handling-2{
	border-radius: 50px;
    font-size: 13px;
    background: #FAC42B;
    border: 0px;
	top: -5px;
}

#reg-here .checkbox-inputs div{
	font-size: 16px;
	color: #fff;
}

#reg-here .reg-input input{
	border:0; 
	color:#f6931f; 
	font-weight:bold;
	background: transparent;
	padding: 0;
    margin: 0;
    font-size: 13px;
}

#reg-here .ui-main-slider{
	border: 0px transparent;
}

#reg-here .custom-padding{
	padding: 5px;
}

#reg-here .ui-widget {
    font-family: Arial,Helvetica,sans-serif;
    font-size: 6px;
    width: 25%;
}

#reg-here .inner-cap{
	padding-top:2%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.ui-slider-horizontal .ui-slider-range {
    top: 0;
   background: #FAC42B;
    height: 100%;
}

@media only screen 
  and (min-width: 330px) 
  and (max-width: 650px){
  	#reg-here .time-span {
  		padding: 10px;
  	}
  	#reg-here .time-span-inner{
  		padding: 10px;
  	}
  	#reg-here .ui-widget {
    font-family: Arial,Helvetica,sans-serif;
    font-size: 6px;
    width: 100%;
	}


  }
</style>
