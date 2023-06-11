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

  // console.log("Snackbar", showSnackbar)

  // let { state } = {
  //   state: {
  //     showSnackbar: false,
  //     action: "",
  //     variant: "",
  //   },
  // };

  const state = useLocation();

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar]);

  // console.log("State", state);

  // if (state.state !== null && state.state.showSnackbar === true) {
  //   useEffect(() => {
  //     setShowSnackbar(true);
  //   }, [showSnackbar]);
  // }

  return (
    <div className="memberships-page row mx-auto px-4">
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
          <FilterForm data={membershipsData} onShow={onShow} options={["Sushi", "Ramen", "React"]} filterFor="member" dropdownLabel="Level" />
        </div>
        <div className="mt-4">
          <TableEdit
            columns={membershipsHeader}
            data={membershipsData}
            editPageLink={"editmembership"}
            deleteConfirmFor="Member"
            
          />
        </div>
      </div>

      {/* MODAL & SNACKBAR */}
      <div>
      </div>
      {showSnackbar && state.state !== null ? (
        <Snackbar
          setSnackbar={showSnackbar}
          action={state.state.action}
          variant={state.state.variant} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Memberships;