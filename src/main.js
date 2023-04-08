import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI"
import router from '@/router/router'
import directives from './directives'
import store from '@/store'


const app = createApp(App) // функция возвращает экземпляр приложения
// вот эта шняга позволяет глобально объявлять компоненты чтобы их не импортить потом каждый раз
components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount("#app")
