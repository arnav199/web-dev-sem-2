import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams()
    return (
        <div>
            <h1>Profile Page</h1>
            <p>User ID: {id}</p>
        </div>
    )
}