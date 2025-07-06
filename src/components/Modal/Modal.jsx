import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import closeIcon from "../../assets/close.svg";

const modalRoot =
  document.getElementById("modal-root") ||
  (() => {
    const el = document.createElement("div");
    el.id = "modal-root";
    document.body.appendChild(el);
    return el;
  })();

export default function Modal({ title, onClose, onSubmit }) {
  const backdropRef = useRef(null);
  const nameRef = useRef(null);

    const clickBackdrop = (e) => {
      if (e.target === backdropRef.current) onClose();
    };

  // Gather and send form values
  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    onSubmit({
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    });
  };

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onMouseDown={clickBackdrop}
    >
      <section className="modal-card" role="dialog" aria-modal="true">
        <button aria-label="Close" className="modal-close" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </button>

        <h2 className="modal-title">{title}</h2>

        <form className="modal-form" onSubmit={submit}>
          <label>
            Name<span className="required">*</span>
            <input ref={nameRef} required name="name" type="text" />
          </label>

          <label>
            Phone Number<span className="required">*</span>
            <input required name="phone" type="tel" />
          </label>

          <label>
            Email<span className="required">*</span>
            <input required name="email" type="email" />
          </label>

          <label>
            Message
            <textarea name="message" rows="4" />
          </label>

          <button className="submit-btn" type="submit">
            Contact
          </button>
        </form>
      </section>
    </div>,
    modalRoot
  );
}
