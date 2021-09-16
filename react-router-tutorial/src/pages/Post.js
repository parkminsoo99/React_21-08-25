import React from 'react';

const Post = ({location, match}) => {
	console.log('Post', match);
	return (
		<div>
			<p>포스트 #{match.params.id}</p>
		</div>
	)
}
export default Post;