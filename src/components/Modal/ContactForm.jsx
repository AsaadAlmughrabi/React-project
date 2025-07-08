import { useRef } from "react";

export default function ContactForm({ onSubmit }) {
  const nameRef = useRef(null);

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

  return (
    <form className="modal-form" onSubmit={submit}>
      <label >
        <span className="required">Name</span>
        <input ref={nameRef} required name="name" type="text" />
      </label>

      <label >
        <span className="required">Phone Number</span>
        <input  required name="phone" type="tel" />
      </label>

      <label >
        <span className="required">Email</span>
        <input required name="email" type="email" />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows="4" />
      </label>

      <button className="submit-btn" type="submit">
        Contact
      </button>
    </form>
  );
}