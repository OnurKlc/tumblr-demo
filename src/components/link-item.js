import React from 'react';
import styled from 'styled-components';
import DateBox from './date-box';

const Outer = styled.div`
display: flex;
margin-top: 30px;
.link-text {
	margin-top: 0;
	text-align: left;
	font-size: 20px;
	color: #CC352E;
	text-decoration: underline;
	font-weight: bold;
}
.link-description {
	p {
		text-align: left;
		font-size: 12px;
	}
}
`;

class LinkItem extends React.Component {
  render() {
  const { data, displayDate } = this.props;
  return (
    <Outer>
    	<DateBox data={data} displayDate={displayDate}/>
    	<div>
    		<p className="link-text">{data["link-text"]}</p>
    		<div className="link-description" dangerouslySetInnerHTML={{__html: data["link-description"]}} />
    	</div>
    </Outer>
  );
}
}

export default LinkItem;
