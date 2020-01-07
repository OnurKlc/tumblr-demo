import React from 'react';
import styled from 'styled-components';
import Quote from './quote';
import Photo from './photo';
import LinkItem from './link-item';
import Conversation from './conversation';
import Regular from './regular';
import AudioItem from './audio-item';

const Outer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

class Content extends React.Component {
  render() {
    const { posts } = this.props;
  return (
    <Outer>
      {posts.map((post, index) => {
        if (post.type === "quote") {
          return <Quote data={post} key={post.url} 
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        if (post.type === "photo") {
          return <Photo data={post} key={post.url}
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        if (post.type === "link") {
          return <LinkItem data={post} key={post.url}
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        if (post.type === "conversation") {
          return <Conversation data={post} key={post.url}
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        if (post.type === "audio") {
          return <AudioItem data={post} key={post.url}
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        if (post.type === "regular") {
          return <Regular data={post} key={post.url}
          displayDate={post["date-gmt"].split(" ")[0] === (posts[index - 1] && posts[index - 1]["date-gmt"].split(" ")[0]) ? true : false} />
        }
        else {
          return null;
        }
      })}
    </Outer>
  );
}
}

export default Content;
