import { defineStore } from "pinia"
export const useDeletedTasksStore = defineStore({
	id: "deleted",
	state: () => ({
		tasks: [{ name: "ist do skoly", deleted: true }]
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
