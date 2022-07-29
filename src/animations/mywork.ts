export default {
  onEnter: (el: HTMLElement, done: () => void) => {
    setTimeout(done, 10)
  },
  onLeave: (el: HTMLElement, done: () => void) => {
    setTimeout(done, 10)
  }
}
