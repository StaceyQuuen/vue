<template>
  <div id="app">
		<layout>
			<div>左边</div>
			<div>右边</div>
		</layout>
		<br>
		<layout1>
			<template v-slot:left>
				<div>左边</div>
			</template>
			<template v-slot:right>
				<div>右边</div>
			</template>			
		</layout1>
  </div>
</template>

<script> 
import layout from './components/layout.vue'
import layout1 from './components/layout1.vue'
export default {
  name: 'App',
  data: function(){
		return {
		}
  },
   components: {
		layout,layout1
   }, 
}
</script>

