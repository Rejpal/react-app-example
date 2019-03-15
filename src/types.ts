export interface RecordData {[key: string]: string}

export interface IKids {[key: string]: { records: Array<IRecord>}}

export interface IRecord {
  data: RecordData
  kids: IKids
}
