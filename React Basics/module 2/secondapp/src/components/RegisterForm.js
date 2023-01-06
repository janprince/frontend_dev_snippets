import { useState } from "react";


function RegisterForm(){
                          
    // Notice that you are using a form object to store the state of all three text input field values:
    // You do not need to have three separate state variables in this case, and instead you can consolidate them all together into one form object for better readability.

    return (
        <div>
            <label>
                First Name: <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
            </label>
           
            <label>
                Last Name: <input value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} />
            </label>

            <label>
                Email: <input value={form.email} onChange={function (e) {setForm({...form, email: e.target.value})}} />
            </label>

            <p>
                {form.firstName} {form.lastName} {form.email}
            </p>
        </div>
    );
}

export default RegisterForm;