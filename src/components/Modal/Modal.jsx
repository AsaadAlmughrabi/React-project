import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot =
  document.getElementById("modal-root") ||
  (() => {
    const el = document.createElement("div");
    el.id = "modal-root";
    document.body.appendChild(el);
    return el;
  })();

export default function Modal({ title, onClose, children }) {
  const backdropRef = useRef(null);

  const clickBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  // Optionally, close modal on Escape key
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onMouseDown={clickBackdrop}
    >
      <section className="modal-card" role="dialog" aria-modal="true">
        <button aria-label="Close" className="modal-close" onClick={onClose}>
          <img src="/assets/close.svg" alt="" />
        </button>

        {title && <h2 className="modal-title">{title}</h2>}

        <div className="modal-content">{children}</div>
      </section>
    </div>,
    modalRoot
  );
}