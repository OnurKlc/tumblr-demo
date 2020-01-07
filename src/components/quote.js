import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import DateBox from './date-box';

const Outer = styled.div`
.quote-text {
	font-size: 36px;
	text-align: left;
	margin-top: 0;
	padding-left: 15px;
	border-left: 7px solid #6398CC;
	color: #888888;
	font-weight: bold;
}
hr {
	width: 20px;
	float: left;
}
.quote-source {
	text-align: left;
	a {
		color: black;
	}
}
`;

class Quote extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    	<Flex alignItems="flex-start">
    		<DateBox data={data} displayDate={displayDate}/>
    		<div>
    			<p className="quote-text">{data["quote-text"]}</p>
    			<hr/>
    			<p className="quote-source" dangerouslySetInnerHTML={{__html: data["quote-source"]}}></p>
    		</div>
    	</Flex>
    </Outer>
  );
}
}

export default Quote;
