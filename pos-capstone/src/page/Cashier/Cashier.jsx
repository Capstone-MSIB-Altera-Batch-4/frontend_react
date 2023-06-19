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

const Cashier = () => {
  const dispatch = useDispatch();
  const cashiers = useSelector((state) => state.cashiers.cashiers.data);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCashiers, setFilteredCashiers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Head Waiters", "Waiters", "Cashier"];
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);
  const state = useLocation();

  useEffect(() => {
    dispatch(fetchCashiers(1));
  }, [dispatch]);

  useEffect(() => {
    handleFilter();
  }, [selectedOption, cashiers, searchInput]);

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
    <div className="cashier-page row mx-auto px-4">
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
                      className={`dropdown-item${
                        option === selectedOption ? " active" : ""
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
  );
};

export default Cashier;