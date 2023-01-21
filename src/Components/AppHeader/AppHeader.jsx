import "./AppHeader.css"

const AppHeader = ({allPosts, liked}) => {
    return(
        <div className="app-header d-flex">
            <h1>Diyorbek Ismatov</h1>
            <h2>{allPosts} posts ,like {liked}</h2>
        </div>
    )
}
export default AppHeader