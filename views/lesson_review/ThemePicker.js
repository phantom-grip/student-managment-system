import React, { useState, Fragment } from "react";
import { TreeSelect } from "antd";

const TreeNode = TreeSelect.TreeNode;

export const ThemePicker = ({ placeholder = "Please select" }) => {
  const [value, setValue] = useState(undefined);
  const handleChange = value => setValue(value);

  return (
    <TreeSelect
      showSearch
      style={{ width: 300 }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder={placeholder}
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={handleChange}
    >
      <TreeNode value="алгебра" title="алгебра" key="0-1">
        <TreeNode
          value="линейные уравнения"
          title="линейные уравнения"
          key="random"
        />
        <TreeNode
          value="квадратные уравнения"
          title="квадратные уравнения"
          key="random1"
        />
        <TreeNode
          value="уравнения с производной"
          title="уравнения с производной"
          key="random2"
        />
      </TreeNode>
      <TreeNode value="геометрия" title="геометрия" key="0-1">
        <TreeNode value="окружность" title="окружность" key="random" />
        <TreeNode value="площадь" title="площадь" key="random1" />
      </TreeNode>
    </TreeSelect>
  );
};
