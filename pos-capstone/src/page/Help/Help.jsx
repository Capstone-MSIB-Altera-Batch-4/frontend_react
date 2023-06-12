import { Gear, Search, Whatsapp } from "react-bootstrap-icons"
import FAQCard from "../../component/Cards/FAQCard/FAQCard"
import { FAQcards } from "../../data/DummyData"
import "./Help.style.css"
import PageTitle from "../../element/PageTitle/PageTitle"
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"

const Help = () => {

    return (
        <div>
            <div className="faq-section">
                <div className="pt-5 ps-3">
                    <PageTitle
                        title={<><Gear className="ms-3 me-3" /> Help</>}
                    />
                </div>

                <div className="d-flex align-items-center w-100 justify-content-center my-5">
                    <div>
                        <h2 className="text-center mb-3"> Hello, how can we help?</h2>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white border-0">
                                <Search />
                            </span>
                            <input type="text" className="form-control w-1 border-0 rounded" placeholder="Search" />
                            <PrimaryButton className="btn ms-1" label={<Search />} type="button"></PrimaryButton>
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
            <div className="row mb-3 me-0">
                <div className="col-lg-3 col-md-6 col-sm-12 ps-5 pt-5">
                    <h2 className="faq-h2 pb-4">Still Have Question?</h2>
                    <h5 className="faq-h5">Can’t find the answer you’re looking for? Please chat to our friendly team.</h5>
                    <h5 className="pt-4"><Whatsapp /></h5>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 px-5 pt-5">
                    <input type="text" className="form-control w-100" placeholder="Subject" />
                    <textarea className="form-control mt-3" placeholder="Description" rows="7"></textarea>
                    <div className="text-end">
                        <PrimaryButton className="btn text-white mt-4" type="button" label="Submit" />
                    </div>

                </div>
            </div>
        </div>



    )
}
export default Help