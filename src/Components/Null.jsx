import React, { Component } from 'react'

document.body.style.overflow = "hidden"

window.onbeforeunload = function () {
    window.scrollTo(220, 50);
}

export class Null extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Null
