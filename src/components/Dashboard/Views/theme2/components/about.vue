
<template>
 <!-- About -->
    <section id="abost">
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-12 text-center">
                            <div id="foo" class="centering">
                                <h2>ABOUT US</h2>
                                <hr>
                            </div>
                            <p class="lead">Sed condimentum tempus auctor. Etiam euismod dapibus odio eu congue.Maecenas eros lacus, tempus et pulvinar ac, commodo eget lacus. Curabitur ex non mi suscipit varius.Phasellus ante lorem, sollicitudin quis erat sit amet, ultrices purus.</p>
                            <p class="lead">Sed condimentum tempus auctor. Etiam euismod dapibus odio eu congue.Maecenas eros lacus, tempus et pulvinar ac, commodo eget lacus. Curabitur ex non mi suscipit varius.Phasellus ante lorem, sollicitudin quis erat sit amet, ultrices purus.</p>
                            <p class="lead">Sed condimentum tempus auctor. Etiam euismod dapibus odio eu congue.Maecenas eros lacus, tempus et pulvinar ac, commodo eget lacus. Curabitur ex non mi suscipit varius.Phasellus ante lorem, sollicitudin quis erat sit amet, ultrices purus.</p>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                            <a id="loadmore" class="button button-small button-line-dark">Event Proceedings</a>
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

/* INFO */

/* @import url('https://fonts.googleapis.com/css?family=Montserrat'); */

/* body {
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
} */


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

.button {
	font-family:'montserratregular';
	font-size: 17px;
	text-transform: uppercase;
	border: none;
	padding: 5px 15px;
	display: inline-block;
	position: relative;
	outline: none;
	cursor: pointer;
	-webkit-transition: all 0.3s;
	   -moz-transition: all 0.3s;
			transition: all 0.3s;
}

.button:after {
	content: '';
	position: absolute;
	z-index: -1;
	-webkit-transition: all 0.3s;
	   -moz-transition: all 0.3s;
	        transition: all 0.3s;
}

.button-xsmall {
	padding:2px 7px;
	font-size:11px;
	letter-spacing:1px;
}

.button-small {
	padding:5px 30px;
	font-size:13px;
	letter-spacing:1px;
}

.button-big {
	padding:10px 18px;
	font-size:21px;
}

.button-line-light {
	color:#ffffff;
	background:transparent;
	border:2px solid #ffffff;
}

.button-line-light:hover,
.button-line-light:active {
	color: #262626;
	background: #ffffff;
	text-decoration:none;
}

.button-line-dark {
	color:#262626;
	background:transparent;
	border:2px solid #262626;
}

.button-line-dark:hover,
.button-line-dark:active {
	color: #ffffff;
	background: #262626;
	text-decoration:none;
}


#about {
	padding:70px 0 90px 0;
}

#about i {
	color:#fac42b;
	margin-bottom:10px;
}

#about .custom-btn{
	border: 1px solid #000;
}

#about .cust-cen{
	display: flex;
	align-items: center;
	justify-content: center;
}

.feature {
	margin:50px 0 0 0;
}

</style>
