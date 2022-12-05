<script setup lang="ts">
import { useActiveTasksStore } from "@/stores/activeTasks.js"
import { useDeletedTasksStore } from "@/stores/deletedTasks.js"

useActiveTasksStore()
useDeletedTasksStore()
</script>

<template>
	<div></div>

	<RouterView />
</template>

<style scoped></style>
