<template>
	<div class="container">
		<h1>Add Your Task!</h1>
		<p>
			1. type your task<br />2. Click Add<br />3. Click on task for
			deleting it
		</p>

		<input
			id="taskBar"
			type="text"
			name="TaskBar"
			placeholder="Type your task here" />
		<div class="buttons">
			<button class="btn" @click="addTask()">Add</button>
			<button class="btn" @click="$router.push({ path: '/deleted' })">
				Deleted tasks
			</button>
		</div>

		<h2>Tasks:</h2>
		<div class="taskList" v-for="task in tasks" :key="task.id">
			<Task :task="task" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Task from "@/components/Task.vue"
import { mapStores } from "pinia"
import { useActiveTasksStore } from "@/stores/tasksStore"

export default defineComponent({
	components: {
		Task
	},

	computed: {
		...mapStores(useActiveTasksStore)
	},

	data() {
		return {
			response: null,
			tasks: []
		}
	},
	async mounted() {
		try {
			this.tasks = this.tasks.concat(this.activeStore.tasks)
			console.log(this.tasks)
		} catch (error) {
			console.error(error)
		}
	},
	methods: {
		async addTask() {
			let taskBar = document.getElementById("taskBar") as HTMLInputElement
			let taskBarValue = (
				document.getElementById("taskBar") as HTMLInputElement
			).value
			if (taskBarValue != "" && taskBarValue != " ") {
				this.tasks.push({ name: taskBarValue, removed: false })
				this.activeStore.addTask({ name: taskBarValue, removed: false })
				taskBar.value = ""
			} else {
				alert("type task!")
			}
		}
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
input {
	margin-top: 30px;
	width: 400px;
	height: 50px;
	border-radius: 50vw;
	padding-left: 15px;
	font-size: 1rem;
}

.buttons {
	display: flex;
	justify-content: space-between;
	width: 40%;
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

h2 {
	margin-top: 30px;
}

p {
	margin-top: 10px;
	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
}
</style>
