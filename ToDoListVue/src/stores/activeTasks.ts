import { defineStore } from "pinia"
export const useActiveTasksStore = defineStore({
	id: "active",
	state: () => ({
		tasks: [{ name: "ist von", deleted: false }]
	}),
	getters: {
		getTask: (state) => state.tasks
	},
	actions: {
		delete(task) {
			this.tasks.deleted = true
		}
	}
})
