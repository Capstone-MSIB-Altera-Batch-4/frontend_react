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
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../config/redux/actions/memberActions"

const Memberships = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members.data);

  useEffect(() => {
    dispatch(fetchMembers(1));
  }, [dispatch]);


  const [filterValue, setFilterValue] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);
  // const [members, setMembers] = useState(membershipsData)


  // let filterData = JSON.parse(localStorage.getItem('member'));

  const state = useLocation();

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar]);

  // show data
  // useEffect(() => {
  //   // setMembers(filterData);
  // }, [filterData]);



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
          <FilterForm
            data={members}
            onShow={onShow}
            options={["Gold", "Silver", "Bronze"]}
            filterFor="member"
            dropdownLabel="Level"
          />
        </div>
        <div className="mt-4">
          <TableEdit
            columns={membershipsHeader}
            data={members}
            editPageLink={"editmembership"}
            deleteConfirmFor="Member"
          />
        </div>
      </div>

      {/* MODAL & SNACKBAR */}
      <div></div>
      {showSnackbar && state.state !== null ? (
        <Snackbar
          setSnackbar={showSnackbar}
          action={state.state.action}
          variant={state.state.variant}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Memberships;