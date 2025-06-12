import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const Modal = ({ title, description, save, setIsShowModal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component DOM'a ilk yüklendiğinde çalışır!");
    let i = 0;

   const id = setInterval(() => {
      i += 1;
      setCount(i);
      console.log(i);
    }, 1000);

    // clean-up function
    return () => {
      console.log("component DOM'dan kaldırıldığında çalışır!");
      clearInterval(id)
    };
  }, []);

  return createPortal(
    <div className="modal fade show d-block">
      <div
        className="modal-overlay"
        onClick={() => setIsShowModal(false)}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title} {count}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsShowModal(false)}
            >
              Close
            </button>
            {save && (
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
