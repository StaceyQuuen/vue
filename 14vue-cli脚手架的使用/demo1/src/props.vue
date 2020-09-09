<template>
  <div id="app">
	<HelloWorld user="小明" :brief="brief"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data: function(){
		return {
			brief: {
				title: '爱你一万年',
				desc: '舒淇'
			}
		}
  },
   components: {
		HelloWorld
   }
}
</script>

