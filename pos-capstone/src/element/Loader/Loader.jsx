import { Oval } from "react-loader-spinner"

const Loader = (props) => {
    return (
        <Oval
            height={props.height}
            width={props.width}
            color={props.color}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor={props.secondaryColor}
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    )
}
export default Loader