import React, { useState, useEffect } from "react";
import PageTitle from "../../element/PageTitle/PageTitle";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import filterIcon from "../../assets/icon/Filter.svg";
import TableEdit from "../../component/Table/TableEditDelete";
import { membershipsHeader } from "../../data/HeaderTableData";
import { useLocation } from "react-router-dom";
import Snackbar from "../../element/Snackbar/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../config/redux/actions/memberActions";
import SearchBar from "../../element/SearchBar/SearchBar";
import Dropdown from "../../element/Dropdown/Dropdown";

const Memberships = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members.data);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [onShow, setOnShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Gold", "Silver", "Bronze"];
  const state = useLocation();

  useEffect(() => {
    dispatch(fetchMembers(1));
  }, [dispatch]);

  useEffect(() => {
    handleFilter();
  }, [selectedOption, members, searchInput]);

  useEffect(() => {
    if (state.state !== null && state.state.showSnackbar === true) {
      setShowSnackbar(true);
    }
  }, [showSnackbar, state.state]);

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
                placeholder="Select member"
                options={options.map((option) => (
                  <li key={option}>
                    <button
                      className="dropdown-item"
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
      </div>
      {showSnackbar && state.state !== null && (
        <Snackbar
          setSnackbar={showSnackbar}
          action={state.state.action}
          variant={state.state.variant}
        />
      )}
    </div>
  );
};

export default Memberships;
