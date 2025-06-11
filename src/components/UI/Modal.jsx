import './Modal.css';

const Modal = ({ title, description, save, setIsShowModal }) => {
  return (
    <div
      className="modal fade show d-block"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-overlay"
        onClick={() => setIsShowModal(false)}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
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
    </div>
  );
};

export default Modal;
