<script lang="ts">
import { defineComponent } from "vue"
import { mapActions, mapState } from "pinia"
import { useActiveTasksStore } from "@/stores/activeTasks.js"
import { useDeletedTasksStore } from "@/stores/deletedTasks.js"
export default defineComponent({
	data() {
		return {
			...mapState(useActiveTasksStore, []),
			...mapActions(useDeletedTasksStore, [])
		}
	},
	methods: {
		...mapActions(useActiveTasksStore, ["addTask"]),
		...mapActions(useDeletedTasksStore, [])
	}
})
</script>

<template>
	<RouterView />
</template>

<style scoped></style>
