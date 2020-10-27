import React from 'react';

export default function EmailForm() {
    return(
        <div className='EmailForm'>
            <h2>Message Michael</h2>
            <form action="mailto:mijamessmith@gmail.com" method="post" enctype="text/plain">        
                <br />
                <input className="EmailForm-sm-input" defaultValue="Enter Your Name" type="text" name="name" />
                <br />
                <br />
                <input className="EmailForm-sm-input" defaultValue="Enter Your Email" type="text" name="mail" />
                <br />       
                <br />
                <input className="EmailForm-msg" defaultValue="Enter a Message" type="text" name="body" size="50" />
                <br/>
                <input className="EmailForm-btn" type="submit" value="Send"/>
                <input className="EmailForm-btn" type="reset" value="Reset"/>
                </form>
        </div>
    )
}