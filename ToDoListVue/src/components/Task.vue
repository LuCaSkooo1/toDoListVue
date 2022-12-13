<template>
	<div class="task">
		<h3 v-if="task.removed == false" @click="deleteTask(task)">
			{{ task.name }}
		</h3>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
import { mapStores } from "pinia"
import { useActiveTasksStore } from "@/stores/activeTasks.js"
import { useDeletedTasksStore } from "@/stores/deletedTasks.js"
export default defineComponent({
	props: {
		task: Object as PropType<{ removed: boolean; name: string }>
	},

	computed: {
		...mapStores(useActiveTasksStore, useDeletedTasksStore)
	},

	methods: {
		deleteTask(task) {
			const tasks = JSON.parse(localStorage["tasks"] || "[]")
			const deletedTasks = JSON.parse(
				localStorage["deletedTasks"] || "[]"
			)
			task.removed = true
			deletedTasks.push(task)
			tasks.splice(tasks.indexOf(task), 1)
			localStorage["deletedTasks"] = JSON.stringify(deletedTasks)
			localStorage["tasks"] = JSON.stringify(tasks)
			this.activeStore.delete(task)
		}
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
