import React from "react"
import "./PostAddForm.css"


export default class PostAddForm extends React.Component {
    state = {
        firstName: "",
        
    }

    onValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.firstName.length > 0) {
            this.props.onAdd(this.state.firstName)
        }
        this.setState({firstName: ''})
    }

    render() {
        const {firstName} = this.state
        return (
            <form className=" bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input 
                type="text"
                placeholder="What are you thinking about?"
                className="form-control new-post-label"  
                name="firstName"
                value={firstName}
                onChange={this.onValueChange}/>

                
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary"
                    >
                    Add Post
                </button>
            </form>
        )
    }
}
