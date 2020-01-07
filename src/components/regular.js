import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import DateBox from './date-box';


const Outer = styled.div`
	margin-top: 30px;
	.regular-title {
		text-align: left;
		margin-top: 0;
		color: #629AD3;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.regular-body {
		text-align: left;
		font-size: 12px;
		p {
			margin-top: 0;
			color: #767676;
		}
		li {
			color: #767676;	
		}
		blockquote {
			color: #767676;
			border-left: 1px solid black;
		}
	}
`;

class Regular extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    	<Flex alignItems="flex-start">
    		<DateBox data={data} displayDate={displayDate}/>
        	<div>
        		{data["regular-title"] !== null ? <p className="regular-title">{data["regular-title"]}</p> : null}
        		<div className="regular-body" dangerouslySetInnerHTML={{__html: data["regular-body"]}} />
        	</div>
    	</Flex>
    </Outer>
  );
}
}

export default Regular;
