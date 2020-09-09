<template>
  <div class="hello">
		<div>这是头部</div>
		<slot name="left"></slot>
		<slot name="right"></slot>
		<div>这是尾部</div>
  </div>
</template>

<script>
export default {
	name: 'layout1',

}
</script>

 