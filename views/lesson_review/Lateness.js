import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Radio, Icon, DatePicker } from "antd";
import { Box, Flex } from "rebass";
import moment from "moment";

import { ThemePicker } from "views/lesson_review/ThemePicker";
import { LessonComment } from "views/lesson_review/LessonComment";
import { LessonCreditSelector } from "views/lesson_review/LessonCreditSelector";

const Section = styled(Box).attrs({
  mb: "4rem"
})``;

const ButtonGroup = Button.Group;

export const Lateness = () => {
  const formLayout = "horizontal";
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 }
        }
      : null;
  return (
    <div>
      <Form layout={formLayout}>
        <Section>
          <Form.Item label="Дата занятия" {...formItemLayout}>
            <DatePicker defaultValue={moment()} />
          </Form.Item>
          <Form.Item label="Опоздание" {...formItemLayout}>
            <Radio.Group defaultValue="horizontal">
              <Radio.Button value="Без Опозданий">Без Опозданий</Radio.Button>
              <Radio.Button value="Опоздал">Опоздал</Radio.Button>
              <Radio.Button value="Сильно опоздал">Сильно опоздал</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Section>

        <Section>
          <Form.Item label="Тема домашней" {...formItemLayout}>
            <ThemePicker />
          </Form.Item>
          <Form.Item label="Оценка" {...formItemLayout}>
            <Radio.Group defaultValue="horizontal">
              <Radio.Button value="Без Опозданий">Не сделано</Radio.Button>
              <Radio.Button value="Опоздал">Плохо</Radio.Button>
              <Radio.Button value="Сильно опоздал">Хорошо</Radio.Button>
              <Radio.Button value="Сильно опоздал">Отлично</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Section>

        <Section>
          <Form.Item label="Тема теста" {...formItemLayout}>
            <ThemePicker />
          </Form.Item>
          <Form.Item label="Оценка" {...formItemLayout}>
            <Radio.Group defaultValue="horizontal">
              <Radio.Button value="Без Опозданий">10+</Radio.Button>
              <Radio.Button value="Опоздал">20+</Radio.Button>
              <Radio.Button value="Сильно опоздал">30+</Radio.Button>
              <Radio.Button value="Сильно опоздал">40+</Radio.Button>
              <Radio.Button value="Сильно опоздал">50+</Radio.Button>
              <Radio.Button value="Без Опозданий">60+</Radio.Button>
              <Radio.Button value="Опоздал">70+</Radio.Button>
              <Radio.Button value="Сильно опоздал">80+</Radio.Button>
              <Radio.Button value="Сильно опоздал">90+</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Section>

        <Section>
          <Form.Item label="Тема занятия" {...formItemLayout}>
            <ThemePicker />
          </Form.Item>
          <Form.Item label="Оценка" {...formItemLayout}>
            <Radio.Group defaultValue="horizontal">
              <Radio.Button value="Без Опозданий">Плохо</Radio.Button>
              <Radio.Button value="Опоздал">Хорошо</Radio.Button>
              <Radio.Button value="Сильно опоздал">Отлично</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Section>

        <Section>
          <Form.Item label="Комментарий" {...formItemLayout}>
            <LessonComment />
          </Form.Item>
        </Section>

        <Section>
          <Form.Item label="Аванс" {...formItemLayout}>
            <LessonCreditSelector />
          </Form.Item>
          <Form.Item label="Долг" {...formItemLayout}>
            <LessonCreditSelector />
          </Form.Item>
        </Section>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
