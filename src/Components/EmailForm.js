import React from 'react';

export default function EmailForm() {
    return(
        <div className='EmailForm'>
            <h2>Send Michael a Message</h2>
            <form action="mailto:mijamessmith@gmail.com" method="post" enctype="text/plain">
                Your Name:
                <br/>
                <input className="EmailForm-sm-input" type="text" name="name"/>
                <br />
                E-mail:
                <br />
                <input className="EmailForm-sm-input" type="text" name="mail" />
                <br />
                Message:
                <br />
                <input className="EmailForm-msg" type="text" name="body" size="50" />
                <br/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
                </form>
        </div>
    )
}