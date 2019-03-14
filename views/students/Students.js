import React from "react";
import { List, Avatar, Button, Skeleton, Icon } from "antd";
import styled from "styled-components";
import { Flex } from "rebass";

const students = [
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: 1000
  },
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: -1500
  },
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: 1800
  },
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: -10000
  },
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: 0
  },
  {
    name: "Урбис Янис",
    phone: "+79644943217",
    school: "лицей №22",
    amountDue: 0
  }
];

const SA = styled.a`
  & svg {
    margin-right: 4px;
  }
`;

export const Students = () => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={students}
      renderItem={student => {
        const { name, phone, school, amountDue } = student;

        return (
          <List.Item
            actions={[
              <SA>
                <Icon type="edit" />
                Обновить
              </SA>,
              <SA>
                <Icon type="clock-circle" />
                Перенести
              </SA>,
              <SA>
                <Icon type="close-circle" />
                Отменить
              </SA>,
              <SA>
                <Icon type="project" />
                Оценить
              </SA>
            ]}
          >
            <Skeleton avatar title={false} active loading={false}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <Flex>
                    <a href="https://ant.design">{name}</a>
                  </Flex>
                }
                description={
                  <Flex>
                    {phone}{" "}
                    {amountDue !== 0 && (
                      <Flex
                        as={"span"}
                        color={amountDue > 0 ? "green" : "red"}
                        mx={"8px"}
                      >
                        {amountDue} ₽
                      </Flex>
                    )}{" "}
                    {school}
                  </Flex>
                }
              />
            </Skeleton>
          </List.Item>
        );
      }}
    />
  );
};
