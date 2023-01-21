import React from "react"
import "./PostListItem.css"

export default class PostListItem extends React.Component {
     
    render() {
            const {label, onDelete, onToggleLiked, onToggleImportant, important, like} = this.props
    

            let classNames = "app-list-item d-flex justify-content-between"
            if(important) {
                classNames += " important"
            }
            if(like) {
                classNames += " like"
            }

        return(
            <div className={classNames}>
                <span className="app-list-item-label important" onClick={onToggleLiked} >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <li className="fa fa-star"></li>
                    </button>
                    <button type="button" onClick={onDelete} className="btn-trash btn-sm">
                        <li className="fa fa-trash"></li>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}