import React from "react";
import { Select } from "antd";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

export const LessonCreditSelector = ({ placeholder = "Сделайте выбор" }) => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      defaultValue={0}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(option => {
        return (
          <Option key={option} value={option}>
            {option}
          </Option>
        );
      })}
    </Select>
  );
};
