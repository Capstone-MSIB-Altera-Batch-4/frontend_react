import "./Textfield.css"

const TextField = (props) => {
    return (
        <div id="textfield">
            <label htmlFor={props.htmlFor} className="form-label">
                {props.label}
            </label>
            <div class="input-group">
                <input
                    className={props.className}
                    type={props.type}
                    id={props.id}
                    name={props.name}
                    style={props.style}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                />
                <button
                    onClick={props.onClearInput}
                    type="button"
                    className="clear-button">
                    <span className="times-sign">&times;</span>
                </button>
            </div>

        </div>
    )
}
export default TextField