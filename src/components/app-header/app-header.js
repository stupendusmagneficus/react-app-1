import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Yahor Dunayeu</h1>
            <h2>{allPosts} records, which of liked {liked}</h2>
        </div>
    )
}

export default AppHeader;