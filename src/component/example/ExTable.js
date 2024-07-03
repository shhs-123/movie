import React from 'react';
import { Divider, Space, Table, Tag } from 'antd';
import data_table from './data_table.json' //확장자까지 넣기

console.log('data_table >>', data_table)


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

// const data = [];  // data_table.json에 이동후 내용물 삭제
const data = data_table;



const ExTable = () => {

  return (
    <div style={{ width: '85%', margin: '60px auto' }}>
      <Table columns={columns} dataSource={data} />
    </div>
  )

}




export default ExTable;