import { Gear, Search, Whatsapp } from "react-bootstrap-icons"
import FAQCard from "../../component/Cards/FAQCard/FAQCard"
import { FAQcards } from "../../data/DummyData"
import "./Help.style.css"
// import TextField from "../../element/Textfield/Textfield"
// import Button from "../../element/Button/Button"


const Help = () => {

    return (
        <>

            <div className="faq-section">
                <h3 className="pt-4 ps-3"><Gear className="me-2" /> Help</h3>
                <div className="d-flex align-items-center justify-content-center my-5">
                    <div>
                        <h2 className="text-center mb-3"> Hello, how can we help?</h2>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white border-0">
                                <Search />
                            </span>
                            <input type="text" className="form-control border-0" placeholder="Search" />
                            <button className="btn btn-primary" type="button">Search</button>
                        </div>
                    </div>
                </div>

                <div className="faqcard-section ps-3 mt-3">
                    <div className="faqcard-row">
                        {FAQcards.map((card, index) => (
                            <div className="faqcard" key={index}>
                                <FAQCard title={card.title} desc={card.desc} />
                            </div>
                        ))}
                    </div>
                    <div className="faqcard-row">
                        {FAQcards.map((card, index) => (
                            <div className="faqcard" key={index}>
                                <FAQCard title={card.title} desc={card.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 ps-5 pt-5">
                    <h2 className="faq-h2 pb-4">Still Have Question?</h2>
                    <h5 className="faq-h5">Can’t find the answer you’re looking for? Please chat to aour friendly team.</h5>
                    <h5 className="pt-4"><Whatsapp /></h5>
                </div>
                <div className="col-8 ps-5 pt-5">
                    <input type="text" className="form-control w-100" placeholder="Subject" />
                    <textarea className="form-control mt-3" placeholder="Description" rows="7"></textarea>
                    <div className="text-end">
                        <button className="btn text-white mt-4" type="button">Submit</button>
                    </div>

                </div>
            </div>
        </>



    )
}
export default Help