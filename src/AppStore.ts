import { observable, action, decorate, toJS } from 'mobx'
import InitData from './api/data-1.json'
import { IRecord } from './types'

export class AppStore {
  @observable data: Array<IRecord> = []

  constructor(initData: Array<IRecord>) {
    this.updateData(initData)
  }

  @action
  deleteItem = (index: number): void => {
    const newData = [...this.data]
    newData.splice(index, 1)
    this.data = newData
  }

  @action
  updateData = (newData: Array<IRecord>): void => {
    this.data = newData
  }
}

export default new AppStore(InitData)
