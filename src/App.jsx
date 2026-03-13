import { useState } from 'react'
import './App.css'
import { Logo } from './assets/icon'
import Flow from './components/flow/Flow'
import Heading from './components/flow/heading/Heading'
import TestimonialWrap from './components/testimonial/Testimonial'
import './Animation.css'

function App() {
     
     const [email, setEmail] = useState('');

     const [ step, setStep ] = useState(1)
     const [ animation, setAnimation] = useState(false)

     function nextStep(confirmedEmail) {
          if (step == 1) {
               setEmail(confirmedEmail);
               setAnimation(true);
               setTimeout(() => setStep(2), 330);
          }
     }

     return (
          <>
               <main className={`f-col ${animation ? 'animation' : ''} s${step}`}>
                    <a href="" className='logo f-row'>
                         <Logo />
                    </a>
                    <Heading step={step} />
                    <Flow step={step} nextStep={nextStep} email={email} />
               </main>
               <TestimonialWrap />
          </>
     )
}

export default App
