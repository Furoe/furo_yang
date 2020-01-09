import React from 'react';
import { md } from '../../utils/mdParser';

export class MarkdownText extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onMarkdownChange(e.target.value);
	}

	render(){
		return (
			<textArea value={this.props.innerContent} onchange={this.handleChange}></textArea
		);
	}
}