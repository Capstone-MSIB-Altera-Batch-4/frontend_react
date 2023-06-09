import { useState, useEffect } from "react";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import { Plus } from "react-bootstrap-icons";
import personIcon from "../../assets/icon/personfill.svg";
import filterIcon from "../../assets/icon/Filter.svg";
import FilterForm from "../../component/FilterForm/FilterForm";
import TableEdit from "../../component/Table/TableEditDelete";
import { employeeHeader } from "../../data/HeaderTableData";
import { employeeData } from "../../data/DummyData";
import { Link, useLocation } from "react-router-dom";
import Snackbar from "../../element/Snackbar/Snackbar";
import PageTitle from "../../element/PageTitle/PageTitle";

const Cashier = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);

  console.log("Snacbar", showSnackbar);

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
    <div className="product-page container container-fluid row mx-auto">
      <div className="col">
        <div className="d-flex justify-content-start my-5">
          <div className="row mt-2">
            <div className="col-md-9">
              <PageTitle title="Cashier" />
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-end my-5">
          <div className="row">
            <div className="col-md-8">
              <input
                className="form-control bg-light h-100"
                style={{ fontSize: "14px" }}
                type="search"
                placeholder="Enter employee ID"
                aria-label="Search"
              // onChange={handleSearch}
              />
            </div>
            <div className="col-md-4">
              <PrimaryButton
                type="button"
                className="d-flex search-button"
                label={
                  <>
                    <span className="align-items-center fw-medium">Search</span>
                  </>
                }
              />
            </div>
          </div>
        </div> */}
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
        <div className="collapse" id="filter">
          <FilterForm data={employeeData} onShow={onShow} options={["Sushi", "Ramen", "React"]} />
        </div>
        <div className="my-4">
          <TableEdit
            columns={employeeHeader}
            data={employeeData}
            editPageLink={"editemployee"}
          />
        </div>
      </div>

      {/* MODAL & SNACKBAR */}
      <div></div>
      {showSnackbar ? (
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
};

export default Cashier;
