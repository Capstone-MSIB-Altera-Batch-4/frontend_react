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
import { fetchMembers } from "../../config/redux/actions/memberActions";
import SearchBar from "../../element/SearchBar/SearchBar";
import Dropdown from "../../element/Dropdown/Dropdown";
import TablePagination from "../../element/TablePagination/TablePagination"
import Loader from "../../element/Loader/Loader"

const Memberships = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members.data);
  const loading = useSelector(state => state.members.loading)
  console.log(loading)
  const [searchInput, setSearchInput] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Gold", "Silver", "Bronze"];

  //ambil response pagination
  const pagination = useSelector(state => state.members.members.pagination);

  //pagination state
  const [showSnackbar, setShowSnackbar] = useState();
  const [onShow, setOnShow] = useState(false);
  const [totalPage, setTotalPage] = useState(5)
  const [curPage, setCurPage] = useState(1)
  const [totalItems, setTotalItems] = useState(50)
  const [limit, setLimit] = useState(10)
  const [numbTable, setNumbTable] = useState(1)
  


  //get data
  useEffect(() => {
    dispatch(fetchMembers(curPage, limit));
    
    if (curPage > 2) {
      const numbtable =  1 + (limit * (curPage - 1)) 
      setNumbTable(numbtable)
    } else if (curPage == 1) {
      setNumbTable(1)
    }  else if (curPage == 2) {
      setNumbTable(limit + 1)
    }

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
    handleFilter();
  }, [selectedOption, members, searchInput]);

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar, state.state]);

  // console.log(showSnackbar)

  const handleFilter = () => {
    let filtered = members;

    if (selectedOption !== "") {
      filtered = filtered.filter(
        (member) => member.level.toLowerCase() === selectedOption.toLowerCase()
      );
    }

    if (searchInput !== "") {
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          member.id.toString().includes(searchInput)
      );
    }

    setFilteredMembers(filtered);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {loading ?
        <Loader
          secondaryColor="#B1464A"
          color="#FFF0DE"
        />
        :
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
                label={<img src={filterIcon} alt="Filter Icon" />}
                onClick={() => setOnShow(!onShow)}
              />
            </div>
            <div className={`collapse ${onShow ? "show" : ""}`} id="filter">
              <div className="row justify-content-between">
                <div className="col-md-4 mt-2">
                  <SearchBar
                    onShow={onShow}
                    value={searchInput}
                    handleChange={(e) => setSearchInput(e.target.value)}
                    onClearInput={() => setSearchInput("")}
                  />
                </div>
                <div className="col-md-4">
                  <Dropdown
                    htmlFor="dropdown"
                    label="Level"
                    id="dropdown"
                    name="dropdown"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="dropdown mt-2"
                    placeholder={
                      selectedOption !== "" ? `${selectedOption}` : "Select member"
                    }
                    options={options.map((option) => (
                      <li key={option}>
                        <button
                          className={`dropdown-item${option === selectedOption ? " active" : ""
                            }`}
                          type="button"
                          onClick={() => setSelectedOption(option)}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              {filteredMembers && filteredMembers.length > 0 ? (
                <TableEdit
                  numbering={numbTable}
                  columns={membershipsHeader}
                  data={filteredMembers}
                  editPageLink="editmembership"
                  deleteConfirmFor="Member"
                />
              ) : (
                <p
                  className="text-center py-2 mx-auto"
                  style={{ background: "rgb(231, 231, 231)" }}
                >
                  Data not found
                </p>
              )}
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
          {showSnackbar && state.state !== null && (
            <Snackbar
              setSnackbar={showSnackbar}
              action={state.state.action}
              variant={state.state.variant}
            />
          )}
        </div>
      }
    </>
  );
};

export default Memberships;