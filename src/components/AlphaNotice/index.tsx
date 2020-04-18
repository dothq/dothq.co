import React from 'react';

const AlphaNotice = () => (
    <div 
    style={{
        height: '62px', 
        backgroundColor: 'rgb(255, 255, 255)', 
        fontFamily: 'Inter, system-ui', 
        color: 'black', 
        borderBottom: '1px solid #fbfbfb', 
        fontSize: '16px', 
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: 'center', 
        placeItems: 'center'
    }}
    >
        Welcome to the <b style={{ display: 'contents' }}>ALPHA</b>. Don't like this view? <a style={{ display: 'contents', color: 'black' }} href="https://browser.dothq.co?clearMigration=true">Switch back to browser.dothq.co</a>.
    </div>
)

export default AlphaNotice