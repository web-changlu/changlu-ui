import type { App, Plugin } from 'vue'
import WordCloud from './src/main.vue'

WordCloud.install = (app: App) => {
    app.component(WordCloud.name, WordCloud)
}
export default WordCloud