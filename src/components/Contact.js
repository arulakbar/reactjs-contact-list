import { useState } from "react";

const Contact = ({ contact, handlerDelete }) => {
  const [hide, show] = useState(false);

  const handlerDetails = () => {
    show(!hide);
  };

  return (
    <div className="contact-data">
      <li>
        <h2>{contact.name}</h2>
        <button onClick={handlerDetails}>
          {hide ? "Hide" : "Show"} Details
        </button>
        <button onClick={() => handlerDelete(contact.id)}>Delete</button>
        {hide && (
          <ul>
            <li>
              <strong>Phone: </strong>
              {contact.phone}
            </li>
            <li>
              <strong>Email: </strong>
              {contact.email}
            </li>
          </ul>
        )}
      </li>
    </div>
  );
};

export default Contact;
