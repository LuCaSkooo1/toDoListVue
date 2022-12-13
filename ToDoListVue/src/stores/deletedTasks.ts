import { defineStore } from "pinia"
export const useDeletedTasksStore = defineStore({
	id: "deleted",
	state: () => ({
		tasks: []
	}),
	getters: {
		getTask: (state) => state.tasks
	},
	actions: {
		clean() {
			this.tasks = []
		}
	}
})
