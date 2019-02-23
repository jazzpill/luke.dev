import React from 'react';
import { graphql } from 'gatsby';

export default function Cat({ data }) {
	console.log('data: ', data);
	return (
		<div>
			<h1>
				<span role="img" aria-label="Cat">
					🐱
				</span>
			</h1>
			<ul>
				{data.allTidbitsJson.edges.map(t => (
					<li key={t.node.id}>{t.node.title}</li>
				))}
			</ul>
		</div>
	);
}

export const query = graphql`
	query {
		allTidbitsJson {
			edges {
				node {
					title
					id
				}
			}
		}
	}
`;
