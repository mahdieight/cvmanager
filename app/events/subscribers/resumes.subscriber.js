import resumeService from '../../helper/service/resume.service.js'
import EventEmitter from '../emitter.js'
export const events = {
    "CREATE": "New Resume",
    "DELETE": "Delete Resume",
    "UPDATE": "Update Resume Info",
    "UPDATE_STATUS": "Update Resume Status",
    "ADD_COMMENT": "add comment for resume",
    "ADD_CALL_HISTORY": "add call history for resume",
}

EventEmitter.on(events.CREATE, create)
EventEmitter.on(events.DELETE, softdelete)
EventEmitter.on(events.UPDATE, update)
EventEmitter.on(events.UPDATE_STATUS, updateStatus)
EventEmitter.on(events.ADD_COMMENT, addComment)
EventEmitter.on(events.ADD_CALL_HISTORY, addCallHistory)
EventEmitter.on(events.ADD_FILE, addFile)


function create(Resume) {
    console.log(events.DELETE + " event called", Resume)
}



function softdelete(Resume) {
    console.log(events.DELETE + " event called", Resume)
}


function update(Resume) {
    console.log(events.UPDATE + " event called", Resume)
}

function updateStatus(Resume) {
    resumeService.setProccessDuration(Resume)
}

function addComment(Resume) {
    resumeService.plusSummeryCount(Resume, 'comment')
}

function addCallHistory(Resume) {
    resumeService.plusSummeryCount(Resume, 'call_history')
}

function addFile(Resume) {
    resumeService.plusSummeryCount(Resume, 'file')
}