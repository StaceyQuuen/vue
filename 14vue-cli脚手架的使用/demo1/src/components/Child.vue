<template>
  <div class="hello">
	<button @click="clickFn">将小明改成小红</button>
  </div>
</template>

<script>
export default {
	name: 'Child',
	methods: {
		clickFn: function(){
			this.$emit('changeParent','小红')
		}
	}
}
</script>

 