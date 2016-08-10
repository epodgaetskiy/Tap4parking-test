import React, { PropTypes } from 'react'

const CreatedBy = ({ data }) => (
	<ul>
		<li>{data.username}</li>
		<li>{data.email}</li>
  </ul>
)

CreatedBy.propTypes = {
  data: PropTypes.object.isRequired
}

export default CreatedBy