<template>
  <div id="app">
	<h1 :style="styleObj">{{num}}</h1>
	<button @click="addNum">加</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
		return{
			num: 0,
			styleObj: {}
		}
  },
  methods: {
		addNum: function(){
			this.num++;
		}
  },
  watch: {
		num: function(newValue,oldValue){
			console.log(oldValue)
			if(newValue>10){
				console.log('新值大于10了')
				this.styleObj =  {
					backgroundColor: "red"
				}
			}
		}
  }
}
</script>

