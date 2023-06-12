import { Book } from "react-bootstrap-icons"
import './FAQCard.style.css'

const FAQCard = (props) => {
    return (
        <div className="FAQcard mb-3" style={{
            width: '450px',
            height: '200px'
        }}>
            <div className="mb-2">
                <h5 className="d-inline mb-3 me-2 ">
                    <Book />
                </h5>

                <h5 className="d-inline pt-3">
                    {props.title}
                </h5>
            </div>

            <p className="FAQcard-text">
                {props.desc}
            </p>
        </div>

    )
}
export default FAQCard