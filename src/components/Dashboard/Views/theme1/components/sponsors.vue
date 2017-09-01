<template>
  <section id="sponsors">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="centering">
                        <h2 class="uppercase">sponsors</h2>
                        <hr>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-centering">
                            <h4>Organizers</h4>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-outer">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-outer">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-centering">
                            <h4>Sponsor</h4>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-outer">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                        </div>

                        <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 sp-outer">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                        </div> -->
                        </div>

                    </div>

                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>Community Partners</h4>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                    </div>  
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="sponsor">
                                <img class="img-responsive" src="https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/sponsor/logo/thumb/1236_1447076151.png" alt="">
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
/* eslint-disable */
export default{
    data (){
        return{
            organizers:[
                {name:'Icreate'},
                {name:'Venture studio'},
                 ],
            sponsor:[
                {name:'gvfl'},
                
            ],
            communitypartners:[
                {name:'tie'},
                {name:'headstart'},
                {name:'gbg'},
                {name:'echai'}
            ],
        }
    }
}
</script>

<style>
    
/* SPONSORS */

#sponsors h2{
	text-align: center;
}

#sponsors {
	margin:30px 0;
	padding:70px 0 90px 0;
}

.sp-centering h4{
    text-align: center;
}

.sponsor img {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
}

#sponsors .sp-outer{
padding:20px 5px;
}

.sponsor {
	border:2px solid #fac42b;
	margin:0 5px;
	padding:10px;
	text-align:center;
}

#sponsors-carousel:first-child {
	margin-left:0;
}

#sponsors-carousel:last-child {
	margin-right:0;
} 

#sponsors i {
	color:#fac42b;
}


@media only screen 
  and (min-width: 768px) 
  and (max-width: 1024px){
  	#sponsors i {
  		padding: 0;
		}
  }

/* SPONSORS */

#community-partners h2{
	text-align: center;
}

#community-partners {
	margin:30px 0;
	padding:70px 0 90px 0;
}

#community-partners .sponsor {
	border:2px solid #fac42b;
	margin:0 5px;
	padding:10px;
	text-align:center;
}

#community-partners #community-partners-carousel:first-child {
	margin-left:0;
}

#community-partners #community-partners-carousel:last-child {
	margin-right:0;
} 

#community-partners #sponsors i {
	color:#fac42b;
}

</style>