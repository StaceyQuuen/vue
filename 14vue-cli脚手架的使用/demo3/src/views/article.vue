<template>
  	<div class="article">
    		<h1>This is an article page</h1>
		{{$route.params.id}}
 	</div>
</template>
<script>
 	export default {
  		mounted() {
   			console.log(this);
  		}
	 }
</script>



