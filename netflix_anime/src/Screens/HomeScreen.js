import React from 'react'

import { Theme } from '../App'

function HomeScreen() {
    const [currentStyle, setStyle] = React.useState({theme: 'dark', backgroundColor: 'black'})
    return(
        <React.Fragment>
            <Theme.Consumer>
                {styles => 
                <div style={{...currentStyle , width: '100%', height: window.screen.height}}>
                <button onClick={() => {
                    currentStyle.theme === 'dark' ? setStyle(styles.light) : setStyle(styles.dark)
                }}>Toggle</button>
                </div>}
            </Theme.Consumer>
        </React.Fragment>
    )
}

export default HomeScreen