import { useState, useEffect } from "react"
import PageTitle from "../../element/PageTitle/PageTitle"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton"
import filterIcon from '../../assets/icon/Filter.svg'
import FilterForm from "../../component/FilterForm/FilterForm"
import TableEdit from "../../component/Table/TableEditDelete"
import { membershipsHeader } from "../../data/HeaderTableData"
import { membershipsData } from "../../data/DummyData"
import { useLocation } from "react-router-dom"
import Snackbar from "../../element/Snackbar/Snackbar"

const Memberships = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [onShow, setOnShow] = useState(false)

    console.log("Snackbar", showSnackbar)
  
    let { state } = {
      state: {
        showSnackbar: false,
        action: "",
        variant: "",
      },
    };

    state = useLocation();

    console.log("State", state);

    if (state.state !== null && state.state.showSnackbar === true) {
      useEffect(() => {
        setShowSnackbar(true);
      }, [showSnackbar]);
    }

    return (
      <div className="memberships-page container container-fluid row mx-auto">
        <div className="col">
          <div className="my-5">
            <PageTitle title="Membership" />
          </div>
          <div className="d-flex justify-content-end">
            <SecondaryButton
              type="button"
              databstoggle="collapse"
              databstarget="#filter"
              label={<img src={filterIcon} />}
              onClick={() => setOnShow(!onShow)}
            />
          </div>
          <div className="collapse" id="filter">
            <FilterForm data={membershipsData} onShow={onShow} options={["Sushi", "Ramen", "React"]} filterFor="member" dropdownLabel="Level"/>
          </div>
          <div className="mt-4">
            <TableEdit
              columns={membershipsHeader}
              data={membershipsData}
              editPageLink={"editmembership"}
            />
          </div>
        </div>

        {/* MODAL & SNACKBAR */}
        <div>
        </div>
        {showSnackbar ? (
          <Snackbar setSnackbar={showSnackbar} action={state.state.action} variant={state.state.variant}/>
        ) : (
          ""
        )}
      </div>
    );
}

export default Memberships;