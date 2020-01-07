import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import DateBox from './date-box';

const Outer = styled.div`
  margin-top: 30px;
`;

class AudioItem extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    	<Flex alignItems="flex-start">
    		<DateBox data={data} displayDate={displayDate}/>
        <div dangerouslySetInnerHTML={{__html: data["audio-player"]}} />
    	</Flex>
    </Outer>
  );
}
}

export default AudioItem;
