import React from 'react';
import './onlineEdit.css';
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
			<textarea className='mdContent' value={this.props.innerContent} onChange={this.handleChange}></textarea>
		);
	}
}

export class ImMdParse extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='innerContent'>
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
			<div className='mdEditContent'>
				<MarkdownText onMarkdownChange={this.handleMdChange} />
				<ImMdParse innerContent={innerContent} />
			</div>
		);
		
	}
}