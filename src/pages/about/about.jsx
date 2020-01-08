import React from 'react';
import { md } from '../../mdParser';

const about = `
# 关于我
南京航空航天大学2018届毕业生，目前磨炼技术中。
# 技能栏
## 前端
目前主要进行前端相关开发，React、 Vue会用，开发过小程序。
## 后台
## 编程语言
大一学过C，大二学过C++，java写过简单聊天室，python会一些，主要使用JS。（目前想纠正学而不精的毛病）
`;

export default class About from React.Component{
	render(){
		return (
			<div className='about-container'>
				<div dangerouslySetInnerHTML={{ __html: md.render(about) }}></div>
			</div>
		);
	}
}