<template>
  <section id="download-section">
        <div class="main">
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="centering">
                        <h2>DOWNLOAD OUR APP</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 dt-tabs">
                    <div class="apple-store">
                        <a class="button button-small button-line-light" target="_blank"><i class="fa fa-apple"></i>Register now</a>
                    </div>
                    <div class="play-store">
                        <a class="button button-small button-line-light" target="_blank"><i class="fa fa-android"></i>Register now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>

/* DOWNLOAD SECTION */
#download-section {
	background: #262626;
}

#download-section h2{
	color: #fff;
	text-align: center;
}

#download-section .dt-tabs{
	display: flex;
	align-items: center;
	justify-content: center;
}

#download-section .apple-store{
	padding: 20px;
}

#download-section .apple-store i{
	padding: 10px;
    font-size: 20px;
}


#download-section .play-store{
	padding: 20px;
}

#download-section .play-store i{
	padding: 10px;
    font-size: 20px;
}

@media only screen
and (min-width: 330px)
and (max-width: 650px){
	#download-section .apple-store i{
	padding: 5px;
    font-size: 15px;
	}
	#download-section .button-small {
    	padding: 10px 11px;
    	font-size: 10px;
    	letter-spacing: 1px;
	}
	#download-section .apple-store {
    padding: 5px;
	}
	#download-section .play-store{
	padding: 5px;
	}

	#download-section .play-store i{
	padding: 5px;
    font-size: 15px;
	}
}
</style>