 import React, { useState } from 'react';
 
 const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [errors, setErrors] = useState({});
 
  const validateEmail = (email) => {
     const re = /\S+@\S+\.\S+/;
     return re.test(email);
   };
 
   const handleBlur = (e) => {
     const { name, value } = e.target;
     if (!value) {
       setErrors((prev) => ({ ...prev, [name]: 'This field is required' }));
     } else if (name === 'email' && !validateEmail(value)) {
       setErrors((prev) => ({ ...prev, [name]: 'Invalid email address' }));
     } else {
       setErrors((prev) => ({ ...prev, [name]: '' }));
     }
   };
 
   return (
     <section>
       <h2>Contact</h2>
       <form>
         <div>
          <label>Name</label>
           <input
             type="text"
             name="name"
             value={name}
            onChange={(e) => setName(e.target.value)}
             onBlur={handleBlur}
           />
           {errors.name && <span>{errors.name}</span>}
         </div>
         <div>
           <label>Email</label>
           <input
             type="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             onBlur={handleBlur}
           />
           {errors.email && <span>{errors.email}</span>}
         </div>
         <div>
           <label>Message</label>
           <textarea
             name="message"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             onBlur={handleBlur}
           />
           {errors.message && <span>{errors.message}</span>}
         </div>
         <button type="submit">Submit</button>
       </form>
     </section>
   );
 };