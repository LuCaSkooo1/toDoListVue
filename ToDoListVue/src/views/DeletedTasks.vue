<template>
	<div class="container">
		<h1>Deleted Tasks:</h1>
		<div class="taskList" v-for="task in this.deletedTasks" :key="task.id">
			<div class="task">
				<h3>
					{{ task.name }}
				</h3>
			</div>
		</div>
		<button class="btn" @click="$router.push({ path: '/' })">
			Active Tasks
		</button>
		<button class="btn" @click="cleanUp()">Clean Up</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapStores } from "pinia"
import { useActiveTasksStore } from "@/stores/tasksStore"

export default defineComponent({
	data() {
		return { deletedTasks: [] }
	},
	computed: {
		...mapStores(useActiveTasksStore)
	},
	mounted() {
		this.deletedTasks = this.activeStore.tasks.filter(
			(task) => task.removed == true
		)
		this.cleanUp()
	},
	methods: {
		cleanUp() {}
	}
})
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.btn {
	margin-top: 30px;
	width: 200px;
	height: 50px;
	border-radius: 50rem;
	font-family: sans-serif;
	font-size: 20px;
	background-color: #181818;
	color: #fff;
	font-weight: light;
	border: 2px solid #fff;
	transition: all 300ms;
	animation-name: pulse;
	animation-duration: 3000ms;
	animation-iteration-count: infinite;
}
@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.btn:hover {
	background-color: #fff;
	color: #252525;
}
</style>
