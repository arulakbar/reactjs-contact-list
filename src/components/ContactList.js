import { useEffect, useState } from "react";
import Contact from "./Contact";

const ContactList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/contacts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const handlerDelete = (id) => {
    const newContact = data.filter((contact) => contact.id !== id);
    setData(newContact);
  };

  const contactList =
    data &&
    data.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        handlerDelete={handlerDelete}
      />
    ));
  return (
    <div className="contact-list">
      <ul>{contactList}</ul>
    </div>
  );
};

export default ContactList;
