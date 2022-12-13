import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const useActiveTasksStore = defineStore({
	id: "active",
	state: () => {
		return {
			tasks: useStorage("tasks", [])
		}
	},
	getters: {},
	actions: {
		delete(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		},
		addTask(task) {
			this.tasks.push(task)
		}
	}
})
