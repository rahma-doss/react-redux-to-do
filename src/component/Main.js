import React from 'react'
import { connect } from 'react-redux'
import Edit from './Edit'
class Main extends React.Component {
    edit = () => {
        this.props.EditTodo(this.state);
      };
    render() {
        return (
            <div>
                {this.props.todos.map((el, index) =>  <Edit todo={el}/>)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todosReducer
    }
}
export default connect(mapStateToProps)(Main)