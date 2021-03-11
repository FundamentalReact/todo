// this portal property is used to breakout the dom node out of dom hierarchy
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        
        <h1>Portals demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo