import React from 'react'
import PropTypes from 'prop-types'
import SideNav from './SideNav'
import Main from './Main'

const propTypes = {
    
}

function Dashboard(props) {
    return (
        <div className='dashboard-container'>
            
            <SideNav />

            <Main />

        </div>
    )
}

Dashboard.propTypes = propTypes

export default Dashboard
