import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef("");

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
      if(filtered === null){
          text.current.value = ''
      }
  });

  return (
    <form action="">
      <input
        type="text"
        name=""
        ref={text}
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
