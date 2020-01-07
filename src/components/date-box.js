import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const Outer = styled.div`
margin-left: 15px;
.date {
	margin-right: 15px;
	.day {
		font-size: 30px;
		color: #CCCCCC;
		margin: 0 10px 0 0;
	}
	.month-box {
		width: 50px;
		height: 40px;
		background-color: #6398CC;
		align-items: center;
		.month {
			margin: 0;
			color: white;
			font-size: 12px;
		}
	}
}
`;

class DateBox extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    {console.log(displayDate)}
    	<Flex className="date" style={displayDate == true ? {opacity: 0} : {opacity: 1}} alignItems="center">
    		<p className="day">{data.date.split(", ")[0].toUpperCase()}</p>
    		<Flex flexDirection="column" justifyContent="center" className="month-box">
    			<p className="month">{data.date.split(" ")[2].toUpperCase()}</p>
    			<p className="month">{data.date.split(" ")[1].toUpperCase()}</p>
    		</Flex>
    	</Flex>
    </Outer>
  );
}
}

export default DateBox;
