import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const useActiveTasksStore = defineStore({
	id: "active",
	state: () => {
		return {
			tasks: useStorage("tasks", [])
		}
	},
	actions: {
		cleanUp() {
			this.tasks
				.filter((task) => task.removed == true)
				.forEach((task) =>
					this.tasks.splice(this.tasks.indexOf(task), 1)
				)
		},
		addTask(task) {
			this.tasks.push(task)
		},
		remove(task) {
			task.removed = true
			this.tasks.filter((data) => data === task)[0] = task
		}
	}
})
