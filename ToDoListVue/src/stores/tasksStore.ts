import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const useActiveTasksStore = defineStore({
	id: "active",
	state: () => {
		return {
			tasks: useStorage("tasks", [])
		}
	},
	getters: {
		removed(state) {}
	},
	actions: {
		cleanUp() {
			this.tasks
				.filter((task) => task.removed == true)
				.forEach((task) => task.splice())
		},
		addTask(task) {
			this.tasks.push(task)
		}
	}
})
