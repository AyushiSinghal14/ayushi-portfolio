import React from 'react'
import './exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='experience'>
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>

     <div className="container experience_container">
       <div className="experience_frontend">
         <h3>Languages</h3>
         <div className="experience_content">
           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
             <div>
             <h4>C++</h4>
            <small className="text-light">Experienced</small>
             </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
           <div>
           <h4>C</h4>
            <small className="text-light">Experienced</small>
           </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>SQL</h4>
            <small className="text-light">Experienced</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>Python</h4>
            <small className="text-light">Experienced</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Intermediate</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
           <div>
           <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
           </div>
           </article>
         </div>
       </div>

   { /* End of frontend */ }

       <div className="experience_backend">
       <h3>Development</h3>
         <div className="experience_content">
           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
             <div>
             <h4>React</h4>
            <small className="text-light">Intermediate</small>
             </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
           <div>
           <h4>Artificial Intelligence</h4>
            <small className="text-light">Begineer</small>
           </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>Machine Learning</h4>
            <small className="text-light">Intermediate</small>
            </div>
           </article>

           <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>DSA</h4>
            <small className="text-light">Intermediate</small>
            </div>
           </article>
           </div>
       </div>
     </div>
    </section>
 )
}

export default Exp