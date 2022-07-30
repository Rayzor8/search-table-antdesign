import React from 'react';
import { Table } from 'antd';

const SearchList = ({ posts }) => {
   const columns = [
      {
         title: 'Id',
         dataIndex: 'id',
         key: 'id',
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: 'Body',
         dataIndex: 'body',
         key: 'body',
      },
   ];

   return <Table columns={columns} dataSource={posts} />;
};

export default SearchList;
