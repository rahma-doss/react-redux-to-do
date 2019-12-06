import React from 'react'
import { connect } from 'react-redux'
import { Removetodo, UndoTodo,EditTodo } from '../actions/actions'
import './component.css'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            text: this.props.todo.text,
            id: this.props.todo.id,
            completed: this.props.todo.completed
        }
    }
    handleDisable=()=>{
        if(!this.state.disabled){
            this.props.edit(this.state)
            this.setState({disabled: true})
        }else{
            this.setState({disabled: !this.state.disabled})
        }

    }
    handlechange =(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
                <div key={this.state.id}>
                    <input className={this.props.todo.completed? 'crossed': undefined} onChange={this.handlechange}
                    disabled={this.state.disabled? true:false} type='text' value={this.state.text} />
                    <button onClick ={()=>this.props.undo(this.state.id)}>{this.props.todo.completed ? 'Undo' : 'Complete'}</button>
                    <button  onClick={this.handleDisable}>Edit</button>
                    <button onClick={() => this.props.remove(this.state.id)}>Delete</button>
                </div>
        )
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        remove: texte => dispatch(Removetodo(texte)),
        undo: Complete => dispatch(UndoTodo(Complete)),
        edit : todo => dispatch(EditTodo(todo))
    }
}

export default connect(null, mapDispatchToprops)(Edit)