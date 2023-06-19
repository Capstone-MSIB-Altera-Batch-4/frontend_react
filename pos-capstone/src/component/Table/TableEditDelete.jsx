import React, { useCallback, useEffect, useState } from "react";
import TableAction from "./TableAction";
import { Link, useLocation } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import Snackbar from "../../element/Snackbar/Snackbar";
import "./Table.css";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../config/redux/actions/memberActions";
import { deleteCashier } from "../../config/redux/actions/cashierActions";

const TableEdit = ({ columns, data, editPageLink, deleteConfirmFor }) => {

  const dispatch = useDispatch();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [id, setId] = useState("")


  const ActionSuccess = (id) => {
    console.log(id)
    if (deleteConfirmFor == "Member") {
      dispatch(deleteMember(id));
    } else if(deleteConfirmFor == "Employee") {
      dispatch(deleteCashier(id));
    }


    setShowConfirmModal(false);
    setShowSnackbar(true);
  }

  if (showSnackbar) {
    setTimeout(() => {
      setShowSnackbar(false);
    }, 1000);
  }

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
