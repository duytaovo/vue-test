import { App } from 'vue'

const sharedComponents = [
]

export const registerSharedComponents = (app: App) => {
  // eslint-disable-next-line
  sharedComponents.forEach((c: any) => app.component(c.name, c))
}
