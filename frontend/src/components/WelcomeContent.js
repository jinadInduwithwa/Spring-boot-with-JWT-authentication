import * as React from "react";

export default class WelcomeContent extends React.Component{
    render() {
        return(
            <div className='p-2 text-center mt-20 '>
                <h1 className='text-6xl font-bold '>Welcome</h1>
                <p className='text-2xl'>Login to see protected content</p>
            </div>
        )
    }
}