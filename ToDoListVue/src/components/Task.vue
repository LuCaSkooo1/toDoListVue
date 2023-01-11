<template>
	<div class="task">
		<h3 v-if="task.removed == false" @click="deleteTask(task)">
			{{ task.name }}
		</h3>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
export default defineComponent({
	props: {
		task: Object as PropType<{ removed: boolean; name: string }>
	},

	computed: {},

	methods: {
		deleteTask(task) {}
	}
})
</script>
<style>
.task {
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	transition: all 300ms;
}

.task:hover {
	color: #fff;
	cursor: pointer;
}
</style>
