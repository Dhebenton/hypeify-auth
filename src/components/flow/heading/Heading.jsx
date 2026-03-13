import './Heading.css'

export default function Heading({ step }) {
     if (step === 1) {
          return (
               <div className="f-col g4 heading-wrap">
                    <h1>What's your email</h1>
                    <p className="sub">Create your account or sign in.</p>
               </div>
          )
     } else {
          return (
               <div className="f-col g4 heading-wrap">
                    <h1>Welcome back!</h1>
                    <p className="sub">Enter your password to continue.</p>
               </div>
          )
     }
}