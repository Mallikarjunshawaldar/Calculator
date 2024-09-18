import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  const valueChange = (event) => {
    setValue(value + event.target.value);
  };

  const deletChange = () => {
    setValue(value.slice(0, -1));
  };

  const clearChange = () => {
    setValue("");
  };

  const equalChange = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={value}
              readOnly
              placeholder="Simplify Your Calculations."
            />
          </div>
          <div>
            <input type="button" value="AC" onClick={clearChange} />
            <input type="button" value="DE" onClick={deletChange} />
            <input
              type="button"
              value="."
              className="operator"
              onClick={valueChange}
            />
            <input
              type="button"
              value="/"
              className="operator"
              onClick={valueChange}
            />
          </div>
          <div>
            <input type="button" value="7" onClick={valueChange} />
            <input type="button" value="8" onClick={valueChange} />
            <input type="button" value="9" onClick={valueChange} />
            <input
              type="button"
              value="*"
              className="operator"
              onClick={valueChange}
            />
          </div>
          <div>
            <input type="button" value="4" onClick={valueChange} />
            <input type="button" value="5" onClick={valueChange} />
            <input type="button" value="6" onClick={valueChange} />
            <input
              type="button"
              value="-"
              className="operator"
              onClick={valueChange}
            />
          </div>
          <div>
            <input type="button" value="1" onClick={valueChange} />
            <input type="button" value="2" onClick={valueChange} />
            <input type="button" value="3" onClick={valueChange} />
            <input
              type="button"
              value="+"
              className="operator"
              onClick={valueChange}
            />
          </div>
          <div>
            <input type="button" value="00" onClick={valueChange} />
            <input type="button" value="0" onClick={valueChange} />
            <input
              type="button"
              value="="
              onClick={equalChange}
              className="equal"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
