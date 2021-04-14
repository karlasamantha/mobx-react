import { makeAutoObservable } from 'mobx'

class CountStoreClass {
  count: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    console.log(this.count)
    this.count++
  }

  decrement() {
    if (this.count < 0) {
      this.count = 0
    }
    this.count--
  }
}

export const CountStore = new CountStoreClass()
