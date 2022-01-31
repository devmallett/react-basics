import React from "react";

const Form = () => {
  const count = 4;
  return (
    <div>
      <div className="form-box">
        <h5 className="form-step">steps: {count} of 4</h5>
        <form action="">
          <div className="field1">
            <label htmlFor="">Customer Info</label>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone 000-000-0000" />
            <input type="text" placeholder="E-mail" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Shipping address"
            />
            <textarea
              placeholder="Physical location of the project"
              name=""
              id=""
              cols="30"
              rows="10"
            />
          </div>
          <button type="submit" id="submitBtn" className="submitBtn">
            Submit
          </button>
        </form>

        <button className="prevBtn">Prev</button>
        <button className="nextBtn">Next</button>
      </div>
    </div>
  );
};

export default Form;
