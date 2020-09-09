<template>
  <div id="app">
    <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
		<h1 @click="setMallname('小陈商城')">{{mall.mallname}}</h1>
		<h1 @click="setlunname('小陈论坛')">{{lunname}}</h1>
		<!-- <h3>欢迎您{{$store.state.username}}</h3>
		<h3>年龄{{$store.state.age}}</h3> -->
		<h3>欢迎您{{username}}</h3>
		<h3>年龄{{age}}</h3>
		<!-- <h3>虚岁：{{$store.getters.xuAge}}</h3> -->
		<h3>虚岁：{{xuAge}}</h3>
		<button @click='addAge(20)'>加</button>
		<ul>
			<li v-for="(item,i) in list" :key="i">{{item.name}}</li>
		</ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
	import { mapState, mapGetters,mapMutations,mapActions  } from 'vuex'
	export default{
		mounted(){     
			console.log(this.$store);
			this.$store.dispatch('getJoke');
		},
		computed: {
			...mapState(['username','age','list','mall']),
			...mapState('namespaced',['lunname']),
			...mapGetters(['xuAge'])
		},
		methods: {
			// addAge: function(){
			// 	this.$store.commit('addAge',10)
			// }
			...mapActions(['getJoke']),
			...mapMutations(['addAge','getList','setMallname']),
			...mapMutations('namespaced',['setlunname'])	
		}
	}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
