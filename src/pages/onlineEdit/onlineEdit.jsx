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
			<textArea value={this.props.innerContent} onchange={this.handleChange}></textArea>
		);
	}
}

export class ImMdParse extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div dangerouslySetInnerHTML={{ __html: this.props.innerContent }}></div>
			</div>
		);
	}
}

export default class MdImmParse extends React.Component{
	constructor(props){
		super(props);
		this.handleMdChange = this.handleMdChange.bind(this);
		this.state = {mdContent: ''};
	}

	handleMdChange(mdContent){
		this.setState({mdContent: mdContent});
	}

	render(){
		const mdContent = this.state.mdContent;
		const innerContent = md.render(mdContent);

		return (
			<div>
				<MarkdownText onMarkdownChange={this.handleMdChange} />
				<ImMdParse innerContent={innerContent} />
			</div>
		);
		
	}
}