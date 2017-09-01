<template>
<section id="live-streaming">
        <div class="main">
            <div class="container">
                <div>
                    <div class="centering">
                        <h2>LIVE STREAMING</h2>
                        <hr>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 main_vid_sec">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div id="London" class="tabcontent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="video-tab">
                                    <iframe src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>
                                </div>
                            </div>
                        </div>
                        <!-- <div id="Paris" class="tabcontent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="video-tab">
                                    <iframe src="https://www.youtube.com/embed/JaF-fq2Zn7I"></iframe>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div id="Tokyo" class="tabcontent">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="video-tab">
                                    <iframe src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom_padding">

                        <!-- <div class="tab">
                            <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">Session 1</button>
                            <button class="tablinks" onclick="openCity(event, 'Paris')">Session 2</button>
                            <button class="tablinks" onclick="openCity(event, 'Tokyo')">Session 3</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
// export default{
    // data 

    //  methods: function(evt, cityName) {
    //         var i, tabcontent, tablinks;
    //         tabcontent = document.getElementsByClassName("tabcontent");
    //         for (i = 0; i < tabcontent.length; i++) {
    //             tabcontent[i].style.display = "none";
    //         }
    //         tablinks = document.getElementsByClassName("tablinks");
    //         for (i = 0; i < tablinks.length; i++) {
    //             tablinks[i].className = tablinks[i].className.replace(" active", "");
    //         }
    //         document.getElementById(cityName).style.display = "block";
    //         evt.currentTarget.className += " active";
    //     }

    //     // Get the element with id="defaultOpen" and click on it
    //     document.getElementById("defaultOpen").click();
    // }
</script>

<style>
/* LIVE STREAMING */
#live-streaming{
	background: #F5F5F5;
}

#live-streaming .video-tab{
height: 100%;
    padding: 0px 20px;

}

#live-streaming .centering hr {
    border: 2px solid #FAC42B;
    width: 75px;
    position: absolute;
    margin:0;
}

#live-streaming iframe{
	width: 600px;
	height: 400px;
}
#live-streaming .tab {
    float: left;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    padding: 20px;
}

#live-streaming .custom_padding{
	padding: 0px 50px;
	margin-top: -1%;
}

/* Style the buttons inside the tab */
#live-streaming div.tab button {
    display: block;
    background-color: inherit;
    color: black;
    padding:10px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 17px;
}

#live-streaming .main_vid_sec{
	margin-top: 5%;
	display: grid;
	align-items: center;
	justify-content: center;
}

/* Change background color of buttons on hover */
#live-streaming div.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current "tab button" class */
#live-streaming div.tab button.active {
    background-color: transparent;
    font-size: 27px;
    border-bottom: 2px solid #FAC42B;
}

/* Style the tab content */
#live-streaming .tabcontent {
    width: 100%;
    border-left: none;
    height: auto;
}

</style>
