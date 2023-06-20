import React, { useState, useRef } from 'react'
import ConfirmModal from '../../component/Modal/ConfirmModal/ConfirmModal';
import Snackbar from '../../element/Snackbar/Snackbar';
// import InputCategoryForm from '../../component/Forms/InputCategoryForm/InputCategoryForm';
import InputCategoryModal from '../../component/Modal/InputCategoryModal/InputCategoryModal';
import Loader from '../../element/Loader/Loader';

const snackBarType = {
  success: "success",
  error: "error"
};

const Preview = () => {
  return (
    <div className='mt-5 pt-5'>
      <Loader
        secondaryColor="#B1464A"
        color="#FFF0DE"
      />

    </div>
  )

  // const [show, setShow] = useState(false);
  // const [showCategory, setShowCategory] = useState(false);
  // const snackbarRef = useRef(null);

  // const ActionSuccess = () => {
  //   setShow(false);
  //   //setiap action yg perlu snackbar pake ini
  //   snackbarRef.current.showSnackbar();
  // }

  // console.log(show)
  // return (
  //   <div className=''>
  //     <div>
  //       <button className="btn btn-primary" onClick={() => setShow(true)}>Click Me</button>
  //       <button className="btn btn-primary" onClick={() => setShowCategory(true)}>Input Category</button>
  //     </div>

  //     <InputCategoryForm />
  //     {/* ADD  */}
  //     {/* <div>
  //       <ConfirmModal
  //           show={show}
  //           handleClose={() => setShow(false)}
  //           confirmFor={"add"}
  //       />
  //     </div> */}

  //     {/* EDIT  */}
  //     {/* <div>
  //       <ConfirmModal
  //           show={show}
  //           handleClose={() => setShow(false)}
  //           confirmFor={"edit"}
  //           role={"Product"}
  //           action={}
  //       />
  //     </div> */}

  //     {/* DELETE */}
  //     <div>
  //       <ConfirmModal
  //           show={show}
  //           handleClose={() => setShow(false)}
  //           confirmFor={"delete"}
  //           role={"Product"}
  //           id={12345}
  //           action={() => ActionSuccess()}
  //       />
  //     </div>

  //     <Snackbar ref={snackbarRef} action={"delete"} variant={snackBarType.success}/>
  //     {/* modal input category */}
  //     {/* <InputCategoryModal show={showCategory} handleClose={() => setShowCategory(false)}/> */}
  //   </div>
}

export default Preview