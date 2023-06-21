import React, { useState } from 'react'


function Contact() {
    const [formState, setFormState] = useState({})

    const handleChange = (e) =>{
        setFormState({...formState,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(formState)
        Email.send({
            SecureToken : "3b782a7d-b44c-4b8e-89a7-a472f5a0692b",
            To : 'fguy256@gmail.com',
            From : 'fguy256@gmail.com',
            Subject : "This is the subject",
            Body : formState.message
        }).then(
          message => alert(message)
        );
        Email.send({
            SecureToken : "3b782a7d-b44c-4b8e-89a7-a472f5a0692b",
            To : formState.email,
            From : 'fguy256@gmail.com',
            Subject : "Regarding Your Query",
            Body : "We have recieved your query and you will be contacted soon."
        }).then(
          
        );

    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-3 d-flex align-items-center'>
                    <h1 className="display-1 fw-bolder ">Send<br/>Us a<br/>Message.</h1>
                </div>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <form className="" onSubmit={submitHandler}>
                        <div className="">
                            <label htmlFor="inputEmail4" className="form-label">First Name</label>
                            <input type="text" name='firstName' className="form-control" id="fistName" value={formState.firstName} onChange={handleChange} />
                        </div>
                        <div className="">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name='lastName' className="form-control" id="lastName" value={formState.lastName} onChange={handleChange} />
                        </div>
                        <div className="">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" name='email' className="form-control" id="inputEmail" value={formState.email} onChange={handleChange} />
                        </div>
                        <div className="">
                            <label htmlFor="inputMessage" className="form-label">Message</label>
                            <textarea className="form-control" name='message' id="inputMessage" rows="8" value={formState.message} onChange={handleChange}></textarea>
                        </div>
                        <div className=" text-center mt-2">
                            <button type="submit" className="btn btn-primary px-5">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact