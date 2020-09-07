import React from 'react';
import { Helmet } from 'react-helmet'
import { TopSection } from '../components'

import './ViewMain.css'

export default () => {
    return (
        <>
            <Helmet>
                <title>CHROW :Home</title>
            </Helmet>
            <div className='main-view'>
                <TopSection />
            </div>
        </>
    )
}