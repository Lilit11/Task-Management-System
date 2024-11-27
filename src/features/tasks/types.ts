export enum IStatus {
  pending = "pending",
  inProgress = "in progress",
  completed = "completed",
}

export interface ITask {
  id: string
  text: string
  status: IStatus
  date: string
}

export interface IState {
  tasks: ITask[]
}
