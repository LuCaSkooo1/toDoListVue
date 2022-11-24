import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import mocks from "@/plugins/w/moxios"
import w from "@/plugins/w/w"

import "./assets/main.css"

const app = createApp(App)
	.use(w)
	.use(mocks, {
		routes: {
			"GET tasks/project/(id)": true,
			"POST tasks/project/create": true
		}
	})

app.use(router)

app.mount("#app")
