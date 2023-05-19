import "./InputErrorMessage.css"

const InputErrorMessage = (props) => {
    return (
        <small className='error-message'>
            {props.label}
        </small>
    )
}
export default InputErrorMessage