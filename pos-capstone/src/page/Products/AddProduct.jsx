import React, { useState } from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import ConfirmModal from "../../component/Modal/ConfirmModal/ConfirmModal";
import InputCategoryModal from "../../component/Modal/InputCategoryModal/InputCategoryModal";

const AddProduct = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  return (
    <div className="col">
      <div className="row container-fluid col-md-8 col-sm-4 mx-auto">
        <div className="my-4 pt-5 text-center">
          <PageTitle title="Add Product" />
        </div>
        <ProductForm openInputModal={() => setShowCategory(true)} />
        <div className="d-flex gap-5 justify-content-center my-5">
          <Link to="/products">
            <SecondaryButton
              type="button"
              databstoggle="collapse"
              databstarget="#filter"
              label="Cancel"
            />
          </Link>
          <PrimaryButton
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="px-4"
            label="Save"
          />
        </div>
      </div>

      {/* MODAL */}
      <div>
        <ConfirmModal
          show={showConfirmModal}
          handleClose={() => setShowConfirmModal(false)}
          confirmFor={"add"}
        />
      </div>
      <div>
        <InputCategoryModal
          show={showCategory}
          handleClose={() => setShowCategory(false)}
        />
      </div>
    </div>
  );
};

export default AddProduct;
