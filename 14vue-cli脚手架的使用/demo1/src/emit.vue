<template>
  <div id="app">
	<h1>欢迎你{{username}}</h1>
	<Child @changeParent="editUsername"></Child>
  </div>
</template>

<script> 
import Child from './components/Child.vue'
export default {
  name: 'App',
  data: function(){
		return {
			username: '小明'
		}
  },
   components: {
		Child
   },
   methods: {
		editUsername: function(even){
			this.username = even
		}
   },
}
</script>

