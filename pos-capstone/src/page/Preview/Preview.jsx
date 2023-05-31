import React, { useState } from 'react'
import ConfirmModal from '../../element/Modal/ConfirmModal/ConfirmModal';

const Preview = () => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const ActionSuccess = (action) => {
    setShow(false);
    return action;
    setShowToast(true);
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
      <div>
        <ConfirmModal
            show={show}
            handleClose={() => setShow(false)}
            confirmFor={"delete"}
            role={"Product"}
            id={12345}
            action={() => ActionSuccess("delete")}
        />
      </div>
    </div>
  )
}

export default Preview