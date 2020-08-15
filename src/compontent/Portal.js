import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
        <div>
            <h1>test</h1>
        </div>,
         document.getElementById('div_portal')
    )
}

export default Portal
