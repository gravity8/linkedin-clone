import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="data:image/jpeg;base64,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" alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>David Adisa</h2>
            <h4>davidadisa@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>
                    2,543
                </p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>
                    2,448
                </p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>

        </div>
    </div>
  )
}

export default Sidebar
