import React from "react";

export function RadioGroup({ children, selected, onChange }) {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange: onChange,
    });
  });

  return <div>{RadioOptions}</div>;
}

export function RadioOption({ value, checked, onChange, children }) {
  const handleChange = (e) => {
    const newValueSelected = e.target.value;
    onChange(newValueSelected);
  };

  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {children}
    </label>
  );
}
