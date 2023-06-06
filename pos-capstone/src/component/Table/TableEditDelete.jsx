import React, {useState} from "react";
import TableAction from "./TableAction";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import Snackbar from "../../element/Snackbar/Snackbar";
import "./Table.css";

const TableEdit = ({ columns, data, editPageLink, deteleConfirm }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const ActionSuccess = () => {
    setShowConfirmModal(false);
    setShowSnackbar(true)
  }

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
            <Link onClick={() => setShowConfirmModal(true)} style={{ color: "red" }}>
              <Trash />
            </Link>
            <div className="delete-confirm-modal">
              <ConfirmModal
                show={showConfirmModal}
                handleClose={() => setShowConfirmModal(false)}
                confirmFor={"delete"}
                role={"Product"}
                id={data.id}
                action={() => ActionSuccess()}
              />
            </div>
          </div>
        )}
      />
      {showSnackbar ? (
          <Snackbar setSnackbar={showSnackbar} action={"delete"} variant={"success"}/>
        ) : (
          ""
        )}
    </div>
  );
};

export default TableEdit;

