<template>
	<section id="banner">
		<swipe class="my-swipe">
			<swipe-item class="slide1"></swipe-item>
  			<swipe-item class="slide2"></swipe-item>
  			<swipe-item class="slide3"></swipe-item>
		</swipe>
	</section>
</template>

<script>
/* eslint-disable */
	import { Swipe, SwipeItem } from 'vue-swipe';
	require( 'vue-swipe/dist/vue-swipe.css' )

	export default{
		components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
    }
</script>

<style>
	.my-swipe {
  height: 500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

