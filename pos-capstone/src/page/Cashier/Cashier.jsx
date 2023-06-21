import { useState, useEffect } from "react";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import { Plus } from "react-bootstrap-icons";
import personIcon from "../../assets/icon/personfill.svg";
import filterIcon from "../../assets/icon/Filter.svg";
import TableEdit from "../../component/Table/TableEditDelete";
import { employeeHeader } from "../../data/HeaderTableData";
import { Link, useLocation } from "react-router-dom";
import Snackbar from "../../element/Snackbar/Snackbar";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchCashiers } from "../../config/redux/actions/cashierActions";
import SearchBar from "../../element/SearchBar/SearchBar";
import Dropdown from "../../element/Dropdown/Dropdown";
import TablePagination from "../../element/TablePagination/TablePagination";
import Loader from "../../element/Loader/Loader";

const Cashier = () => {
  const dispatch = useDispatch();
  const cashiers = useSelector((state) => state.cashiers.cashiers.data);
  const loading = useSelector(state => state.cashiers.loading)
  console.log(loading)
  //ambil response pagination
  const pagination = useSelector(state => state.cashiers.cashiers.pagination);

  console.log(pagination)

  const [searchInput, setSearchInput] = useState("");
  const [filteredCashiers, setFilteredCashiers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Kepala Cashier", "Cashier"];
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);
  const [totalPage, setTotalPage] = useState(5)
  const [curPage, setCurPage] = useState(1)
  const [totalItems, setTotalItems] = useState(50)
  const [limit, setLimit] = useState(10)
  const state = useLocation();

  useEffect(() => {
    dispatch(fetchCashiers(curPage, limit));
  }, [dispatch, curPage, limit]);

  useEffect(() => {
    handleFilter();
  }, [selectedOption, cashiers, searchInput]);

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

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar]);

  const handleFilter = () => {
    let filtered = cashiers;

    if (selectedOption !== "") {
      filtered = filtered.filter(
        (cashier) => cashier.role.toLowerCase() === selectedOption.toLowerCase()
      );
    }

    if (searchInput !== "") {
      filtered = filtered.filter(
        (cashier) =>
          cashier.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          cashier.id.toString().includes(searchInput)
      );
    }

    setFilteredCashiers(filtered);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <> {loading ?
      <Loader
        secondaryColor="#B1464A"
        color="#FFF0DE"
      />
      : <div className="cashier-page row mx-auto px-4">
        <div className="col">
          <div className="d-flex gap-5 my-5">
            <img src={personIcon} style={{ width: "2em", marginTop: "-0.5em" }} />
            <PageTitle title="Employee" />
          </div>
          <div className="d-flex justify-content-between mx-auto">
            <Link to={"/cashier/addemployee"}>
              <PrimaryButton
                type="button"
                className="d-flex gap-2 align-items-center add-product-button"
                label={
                  <>
                    <Plus color="white" size={"24px"} />
                    <span className="align-items-center fw-medium">
                      Add Employee
                    </span>
                  </>
                }
              />
            </Link>
            <SecondaryButton
              type="button"
              databstoggle="collapse"
              databstarget="#filter"
              label={<img src={filterIcon} />}
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
                  label="Position"
                  id="dropdown"
                  name="dropdown"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="dropdown mt-2"
                  placeholder={
                    selectedOption !== ""
                      ? `${selectedOption}`
                      : "Select position"
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
          <div className="my-4">
            {filteredCashiers && filteredCashiers.length > 0 ? (
              <TableEdit
                columns={employeeHeader}
                data={filteredCashiers} // Menggunakan filteredCashiers sebagai data yang ditampilkan
                editPageLink={"editemployee"}
                deleteConfirmFor="Employee"
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

        {/* MODAL & SNACKBAR */}
        {showSnackbar &&
          state.state !== null && ( // Menggunakan logical AND operator untuk menampilkan Snackbar
            <Snackbar
              setSnackbar={setShowSnackbar} // Menggunakan setShowSnackbar untuk menutup Snackbar
              action={state.state.action}
              variant={state.state.variant}
            />
          )}
      </div>
    }</>


  );
};

export default Cashier;