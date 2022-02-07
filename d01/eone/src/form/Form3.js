import React from "react";
import "./form.css";

const Form3 = () => {
  const count = 4;
  return (
    <div>
      <div className="form-box">
        <h5 className="form-step">steps: {count} of 4</h5>
        <form action="">
          <div className="field1">
            {/* <label htmlFor="singleLine">Customer Info</label> */}
            <textarea
              className="uploadSquare"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Shipping address"
            />
          </div>
          {/* <button type="submit" id="submitBtn" className="submitBtn"> */}
          {/* Submit */}
          {/* </button> */}
        </form>

        {/* <button className="prevBtn">Prev</button> */}
        {/* <button className="nextBtn">Next</button> */}
      </div>
    </div>
  );
};

export default Form3;
