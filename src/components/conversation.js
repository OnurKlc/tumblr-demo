import React from 'react';
import styled from 'styled-components';
import DateBox from './date-box';


const Outer = styled.div`
display: flex;
margin-top: 30px;
.conv-box {
	border-left: 5px solid #BBBBBB;
}
.conv-row {
	text-align: left;
	padding: 5px 0;
}
.conv-name {
    font-weight: bold;
    margin: 0 5px;
}

.conv-row:nth-child(even) {
    background-color: #E8E8E8;
}

.conv-row:nth-child(even) .conv-name {
    color: blue;
}

.conv-row:nth-child(odd) {
    background-color: #F4F4F4;
}

.conv-row:nth-child(odd) .conv-name {
    color: red;
}
`;

class Conversation extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
		<DateBox data={data} displayDate={displayDate}/>
		<div className="conv-box">
		{data.conversation.map(item => (
        	<div key={item.phrase} className="conv-row"><span className="conv-name">{item.name}:</span><span>{item.phrase}</span></div>
    	))}
    	</div>
    </Outer>
  );
}
}

export default Conversation;
