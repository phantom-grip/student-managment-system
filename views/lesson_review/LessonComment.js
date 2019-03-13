import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

export const LessonComment = () => (
  <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
);
