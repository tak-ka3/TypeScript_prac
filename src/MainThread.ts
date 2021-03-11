let worker = new Worker('WorkerScript.js')

worker.onmessage = e => {
  console.log(e.data)
}
worker.postMessage('some data')


type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserID]
  removeUserFormThread: [ThreadID, UserID]
}
type Events = {
  receivedMessage: [ThreadID, UserID, Message]
  createdThread: [ThreadID, UserID, Message]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}