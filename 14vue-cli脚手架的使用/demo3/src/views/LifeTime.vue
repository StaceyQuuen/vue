<template>
  <div class="LiftTime">
    <h1>This is an LifeTime page</h1>
  </div>
</template>
<script>
	export default {
		beforeCreate() {
			console.log('创建之前')
		},
		created() {
			console.log('创建之后')
		},
		beforeMount(){
			console.log('挂载之前')
		},
		mounted() {
			console.log(this);
		},
		beforeUpdate(){
			console.log('更新之前')
		},
		updated(){
			console.log('更新之后')
		},
		beforeDestroy(){
			console.log('销毁之前')
		},
		destroyed(){
			console.log('销毁之后')
		},
		
		
		beforeRouteEnter(to,from,next){
			console.log('在进入之前');
			if(to.path=='/LifeTime'){
				next('/noPage')
			}else {
				next();
			}
		},
		beforeRouteLeave(to,from,next){
			console.log('在离开路由时');
			next();
		},
		beforeRouteUpdate(to,from,next){
			console.log('在路由更新时');
			next('');
		}
	}
</script>
