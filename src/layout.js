import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid'
import Content from './components/content';

const Outer = styled.div`
width: 60%;
text-align: center;
  .title {
    font-size: 55px;
    font-weight: bold;
    color: #444444;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }
  .content {
    width: 75%;
  }
  .right-content {
    width: 25%;
    min-width: 150px;
    align-items: flex-end;
    input {
      max-width: 150px;
    }
    button {
      width: 70px;
      margin-right: 10px;
    }
    .lorem {
      text-align: right;
      color: #767676;
      margin-right: 10px;
      width: 150px;
    }
    .posts {
      font-weight: bold;
    }
  }
`;


class Layout extends React.Component {
  render() {
    const { data } = this.props;

  return (
    <Outer>
      <p className="title">{data.tumblelog.title}</p>
      <Flex justifyContent="flex-end">
        <Content posts={data.posts}/>
        <Flex flexDirection="column" className="right-content">
          <input type="text" />
          <button>Search</button>
          <p className="lorem">{data.tumblelog.description}</p>
          <p className="posts">Total Posts: {data["posts-total"]}</p>
        </Flex>
      </Flex>
    </Outer>
  );
}
}

export default Layout;
