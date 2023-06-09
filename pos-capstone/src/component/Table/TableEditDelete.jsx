import React, {useCallback, useEffect, useState} from "react";
import TableAction from "./TableAction";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import Snackbar from "../../element/Snackbar/Snackbar";
import "./Table.css";

const TableEdit = ({ columns, data, editPageLink, deleteConfirmFor }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [id, setId] = useState("")

  const ActionSuccess = () => {
    setShowConfirmModal(false);
    setShowSnackbar(true);
  }

  // if (showSnackbar) {
  //   setShowSnackbar(false);
  // }

  console.log("SB", showSnackbar)

  // useEffect(() => {
  //   if (state.state !== null && state.state.showSnackbar === true) {
  //     setShowSnackbar(true);
  //   }
  // }, [showSnackbar]);

  const confirmDelete = (id) => {
    setId(id)
    setShowConfirmModal(true)
  };

  return (
    <div>
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        pageSize={10}
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
          action={() => ActionSuccess()}
        />
      </div>
      {showSnackbar && state.state !== null ? (
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
