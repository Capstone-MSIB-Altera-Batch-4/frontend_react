import { Oval } from "react-loader-spinner"
import "./Loader.css"

const Loader = (props) => {
    return (
        <div className="loader-container">
            <div className="overlay" />
            <div className="loader">
                <Oval
                    // height={props.height}
                    // width={props.width}
                    color={props.color}
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor={props.secondaryColor}
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        </div>
    )
}
export default Loader