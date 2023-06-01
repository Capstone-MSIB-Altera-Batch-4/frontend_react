import "./ShowPassword.css"

const ShowPassword = (props) => {
    return (
        <button
            type="button"
            className="show-password"
            onClick={props.onClick}
        >
            {props.label}
        </button>
        
    )
}
export default ShowPassword