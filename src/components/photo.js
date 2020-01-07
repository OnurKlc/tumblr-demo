import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid'
import DateBox from './date-box';

const Outer = styled.div`
margin-top: 30px;
	img {
		width: 100%;
		height: auto;
	}
	.subtext {
		font-size: 14px;
		font-weight: bold;
		color: #888888;
		a {
			color: #888888;
		}
	}
`;

class Photo extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    	<Flex>
	    	<DateBox data={data} displayDate={displayDate}/>
	    	<div>
    			<img src={`${data["photo-url-500"]}`} alt="link"/>`
    			<div className="subtext" dangerouslySetInnerHTML={{__html: data["photo-caption"]}}></div>
    		</div>
    	</Flex>
    </Outer>
  );
}
}

export default Photo;
