import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 1200,
            height: 450
        }
        return (
            <div>
                <br />
                <img style={imageStyle} src=".\img\home-brew-banner.png" />
            </div>
        )

    }
}

export default Home;
