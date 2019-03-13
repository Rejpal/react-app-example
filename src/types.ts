export interface RecordData {[key: string]: string}

export interface IRecord {
  data: RecordData
  kids: {[key: string]: { records: Array<IRecord>}}
}
