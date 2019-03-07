import React from 'react';

const ByteForm = ({ handleForm }) => {

  return (
    <form onSubmit={handleForm}>
      <input id="message" type="text" placeholder="Tell me a BIT"/>
      <input id="submit_form" type="submit" value="Byte Me!" />
    </form>
  )
}

export default ByteForm;