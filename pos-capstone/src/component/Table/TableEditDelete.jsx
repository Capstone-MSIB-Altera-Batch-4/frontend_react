import React, { useCallback, useEffect, useState } from "react";
import TableAction from "./TableAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import Snackbar from "../../element/Snackbar/Snackbar";
import "./Table.css";
import { useDispatch } from "react-redux";
import { deleteMember, fetchMembers } from "../../config/redux/actions/memberActions";
import { deleteCashier, fetchCashiers } from "../../config/redux/actions/cashierActions";

const TableEdit = ({ columns, data, editPageLink, deleteConfirmFor }) => {

  const dispatch = useDispatch();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [id, setId] = useState("")


  const ActionSuccess = (id) => {
    if (deleteConfirmFor == "Member") {
      dispatch(deleteMember(id));
      setTimeout(() => {
        dispatch(fetchMembers(1, 10));
      }, 500);

    } else if (deleteConfirmFor == "Employee") {
      dispatch(deleteCashier(id));
      setTimeout(() => {
        dispatch(fetchCashiers(1, 10));
      }, 500);
    }
    setShowConfirmModal(false);
    console.log(showSnackbar)
    setShowSnackbar(true)
    console.log(showSnackbar)
  }

  // if (showSnackbar) {
  //   setTimeout(() => {
  //     setShowSnackbar(false);
  //   }, 1000);
  // }

  const confirmDelete = (id) => {
    console.log(id)
    setId(id)
    setShowConfirmModal(true)
  };

  return (
    <div className="mb-5">
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        buttonComponent={(data) => (
          <div>
            <Link
              to={`${editPageLink}/${data.id}`}
              style={{ marginRight: "15%", color: "#8B8B8B" }}
            >
              <Pencil />
            </Link>
            <Link
              onClick={() => confirmDelete(data.id)}
              style={{ color: "red" }}
            >
              <Trash />
            </Link>
          </div>
        )}
      />

      {/* NAVBAR & SNACKBAR */}
      <div className="delete-confirm-modal">
        <ConfirmModal
          show={showConfirmModal}
          handleClose={() => setShowConfirmModal(false)}
          confirmFor={"delete"}
          role={deleteConfirmFor}
          id={id}
          action={() => ActionSuccess(id)}
        />
      </div>
      {showSnackbar ? (
        <Snackbar
          setSnackbar={showSnackbar}
          action={"delete"}
          variant={"success"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TableEdit;
