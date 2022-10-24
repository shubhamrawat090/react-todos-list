import React from 'react'

function About() {
    let aboutStyle = {
        minHeight: "86vh",
        padding: "2rem 5rem 0",
    }

    return (
        <div className='d-flex flex-column align-items-center' style={aboutStyle}>
            <div className="header d-flex flex-column align-items-center">
                <h1>Welcome to About Page</h1>
                <h6>This is a Todo's List created using React</h6>
            </div>

            <div className="body d-flex flex-column align-items-center m-4">
                <h3>This is the video tutorial I followed</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RGKi6LSPDLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default About
