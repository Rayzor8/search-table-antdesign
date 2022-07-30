import { Form, Input, Button } from 'antd';
import React from 'react';

const SearchBar = ({ posts, setSearchResults }) => {
   const onFinish = (values) => {
      console.log(values);
      if (values.searchInput === undefined) return;

      const searchResults = posts.filter(
         (post) =>
            post.title.includes(values.searchInput) ||
            post.body.includes(values.searchInput)
      );
      setSearchResults(searchResults);
   };

   return (
      <Form
         wrapperCol={{
            span: 8,
         }}
         onFinish={onFinish}
      >
         <Form.Item name="searchInput">
            <Input placeholder="Search" allowClear={true} />
         </Form.Item>
         <Button htmlType="submit">Submit</Button>
      </Form>
   );
};

export default SearchBar;
