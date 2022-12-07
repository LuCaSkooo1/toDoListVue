import { defineStore } from "pinia"
export const useActiveTasksStore = defineStore("ActiveTasksStore", {
	state: () => {
		return {
			tasks: []
		}
	},
	getters: {
		getTask: (state) => state.tasks
	},
	actions: {
		addTask(task) {
			this.tasks.append(task)
		}
	}
})
