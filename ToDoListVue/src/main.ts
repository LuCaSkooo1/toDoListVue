import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createStore } from "vuex"
import "./assets/main.css"

const store = createStore({
	state() {
		return {
			tasks: []
		}
	},
	mutations: {
		addTask(state, task) {
			state.tasks.push(task)
		}
	}
})

const app = createApp(App)

app.use(router)
app.mount("#app")
app.use(store)
