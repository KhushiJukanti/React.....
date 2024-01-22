import { useState } from "react"
function GroupModal(props) {
    const [groupName, setGroupName] = useState("")
    const onFiledChange = (e) => {
        setGroupName(e.target.value)
    }
    const createGroup = ()=>{
        props.createGroup(groupName)
    }
    return (
        <div className="modal" tabindex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Group</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label class="form-label">Group Name</label>
                            <input class="form-control" type="text" value={groupName} placeholder="enter group name" onChange={(e) => onFiledChange(e)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.onClose()}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={()=>createGroup()}>create group</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupModal