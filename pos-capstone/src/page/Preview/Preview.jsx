import React, { useState, useRef } from 'react'
import ConfirmModal from '../../component/Modal/ConfirmModal/ConfirmModal';
import Snackbar from '../../element/Snackbar/Snackbar';
import { DummyData } from '../../data/DummyData';
import Table from '../../component/Table/Table';

const snackBarType = {
    success: "success",
    error: "error"
};

const Preview = () => {
  const [show, setShow] = useState(false);
  const snackbarRef = useRef(null);

  const ActionSuccess = () => {
    setShow(false);
    snackbarRef.current.showSnackbar();
  }

  console.log(show)
  return (
    <div className=''>
      <div>
        <button onClick={() => setShow(true)}>Click Me</button>
      </div>

      {/* ADD  */}
      {/* <div>
        <ConfirmModal
            show={show}
            handleClose={() => setShow(false)}
            confirmFor={"add"}
        />
      </div> */}

      {/* EDIT  */}
      {/* <div>
        <ConfirmModal
            show={show}
            handleClose={() => setShow(false)}
            confirmFor={"edit"}
            role={"Product"}
            action={}
        />
      </div> */}

      {/* DELETE */}
      <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3" />
      <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3" />
      <div>
        <ConfirmModal
            show={show}
            handleClose={() => setShow(false)}
            confirmFor={"delete"}
            role={"Product"}
            id={12345}
            action={() => ActionSuccess()}
        />
      </div>
      <Snackbar ref={snackbarRef} action={"delete"} variant={snackBarType.success}/>
    </div>
  )
}

export default Preview