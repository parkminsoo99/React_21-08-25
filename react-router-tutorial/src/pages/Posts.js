import React from 'react';
import Post from './Post';
import {Link, Route} from 'react-router-dom';
const Posts = ({match}) => {
	console.log('Posts:',match);
	return (
		<div>
		<h3>포스트 목록</h3>
		<ul>
			<li><Link to={`${match.url}/1`}>포스트 #1</Link></li>
			<li><Link to={`${match.url}/2`}>포스트 #2</Link></li>
			<li><Link to={`${match.url}/3`}>포스트 #3</Link></li>
			</ul>
			<Route exact path={match.url} render={() => (<p>포스트 선택</p>)} />
			<Route exact path ={`${match.url}/:id`} component={Post} />
		</div>
	);
};
export default Posts;