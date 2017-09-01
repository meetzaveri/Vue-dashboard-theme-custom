<template>
<nav id="nav-primary" class="navbar navbar-custom" role="navigation" style="">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="index.html"><img src="http://i.imgur.com/x4aCDR6.png" alt="logo"></a>
                <!-- <a href="index.html"><img src="img/startupfair.png" alt="logo"></a>
              <a href="index.html"><img src="img/startupfair.png" alt="logo"></a> -->
            </div>

            <div class="collapse navbar-collapse" id="nav">
                <ul class="nav navbar-nav navbar-right uppercase">
                    <li><a data-toggle="elementscroll" href="#about">About</a></li>
                    <li><a data-toggle="elementscroll" href="#speakers">Speakers</a></li>
                    <li><a data-toggle="elementscroll" href="#program">Program</a></li>
                    <li><a data-toggle="elementscroll" href="#venue">Venue</a></li>
                    <li><a data-toggle="elementscroll" href="#register">Register</a></li>
                    <li><a data-toggle="elementscroll" href="#gallery">Gallery</a></li>
                    <li><a data-toggle="elementscroll" href="#sponsors">Sponsors</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">More<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Custom 1</a>
                            </li>
                            <li>
                                <a href="#">Custom 2</a>
                            </li>
                            <li>
                                <a href="#">Custom 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </nav>  
</template>

<script>
</script>

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

    @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local("Open Sans Regular"), local("OpenSans-Regular"), url("http://fonts.gstatic.com/s/opensans/v14/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
    
/* NAVBAR */

.navbar-custom {
	font-family:'Open sans';
	font-size:12px;
	font-weight:400;
	padding: 10px;
	letter-spacing:1px;
	background:#fff !important;
	margin-bottom:0;
	border-radius:0;
	z-index:1041;
	width:100%;
	-webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
  -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

/* .navbar-header{
	display: flex;
} */
.navbar-header img{

}

.nav>li>a {
    position: relative !important;
    display: block !important;
    padding: 10px 16px !important;
    font-size: 10px ;
}

.navbar-custom a {
	color:#000 !important;
}

.navbar-custom .navbar-nav > li > a:hover {
	color:#fac42b;
	background:transparent;
}

.navbar-custom .navbar-nav > li > a:active,
.navbar-custom .navbar-nav > li > a:focus {
	color:#fac42b;
	background:transparent;
}

.navbar-custom .icon-bar {
	background:#fac42b;
}

.sticky-wrapper {
	position:absolute;
	width:100%;
	padding-top:0px;
}

.sticky-wrapper a {
	color:#ffffff;
}

.is-sticky .navbar-custom {
	width:100%;
	background:#262626;
	-webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
  	-moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
	transition: background .5s ease-in-out,padding .5s ease-in-out;
}




.is-sticky a {
	color:#ffffff;
}

/* Media Queries */

@media only screen
and (max-width: 1125px){
.custom_nav_part{
	display: flex;
}
}

@media only screen
and (max-width: 864px){
.nav>li>a{
		font-size: 10px !important;
    padding: 8px !important;
}
}

/* navbar effect */

.navbar-custom a {
	padding: 8px 0;
}

.navbar-custom .navbar-nav > li > a::after {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 4px;
	background: rgba(0,0,0,0.1);
	content: '';
	opacity: 0;
	-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
	-moz-transition: opacity 0.3s, -moz-transform 0.3s;
	transition: opacity 0.3s, transform 0.3s;
	-webkit-transform: translateY(10px);
	-moz-transform: translateY(10px);
	transform: translateY(10px);
}

.navbar-custom .navbar-nav > li > a:hover::after,
.navbar-custom .navbar-nav > li > a:focus::after {
	opacity: 1;
	-webkit-transform: translateY(0px);
	-moz-transform: translateY(0px);
	transform: translateY(0px);
}

</style>
