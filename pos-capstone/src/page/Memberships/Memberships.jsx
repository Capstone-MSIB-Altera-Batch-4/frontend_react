import { useState, useEffect } from "react"
import PageTitle from "../../element/PageTitle/PageTitle"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton"
import filterIcon from '../../assets/icon/Filter.svg'
import FilterForm from "../../component/FilterForm/FilterForm"
import TableEdit from "../../component/Table/TableEditDelete"
import { membershipsHeader } from "../../data/HeaderTableData"
import { useLocation } from "react-router-dom"
import Snackbar from "../../element/Snackbar/Snackbar"
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../config/redux/actions/memberActions"
import TablePagination from "../../element/TablePagination/TablePagination"

const Memberships = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members.data);

  //ambil response pagination
  const pagination = useSelector(state => state.members.members.pagination);

  console.log(members)
  console.log(pagination)

  //pagination state
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);
  const [totalPage, setTotalPage] = useState(5)
  const [curPage, setCurPage] = useState(1)
  const [totalItems, setTotalItems] = useState(50)
  const [limit, setLimit] = useState(10)


  //get data
  useEffect(() => {
    dispatch(fetchMembers(curPage, limit));

  }, [dispatch, curPage, limit]);


  // set value pagination
  useEffect(() => {
    if (pagination) {
      setTotalPage(pagination.total_pages);
      setCurPage(pagination.page);
      setTotalItems(pagination.total_items);
      setLimit(pagination.limit);
    }
  }, [pagination]);


  //pagination function
  const handlePrevPage = () => {
    if (curPage > 1) {
      setCurPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage < totalPage) {
      setCurPage((prevPage) => prevPage + 1);
    }
  };

  const handleRowsPerPageChange = (event) => {
    const newLimit = parseInt(event.target.value);
    setLimit(newLimit);
  };

  //snackbar

  const state = useLocation();

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar]);

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
        <TablePagination
          currentPage={curPage}
          pageCount={totalPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          prevDisable={curPage === 1}
          nextDisable={curPage === totalPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={limit}
        />
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