import './Flow.css'
import Login from "./login/Login";
import { useState } from 'react';
import { supabase } from '../../lib/supabase'
import Spinner from '../Spinner.jsx';

export default function Flow({ step, nextStep }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    setError('');
    setLoading(true);

    const { data, error } = await supabase
      .from('profiles')
      .select('email')
      .eq('email', email)
      .single();

    setLoading(false);

    if (error || !data) {
      setError('No account found with that email.');
      return;
    }

    nextStep(email); 
  }

  if (step === 1) {
    return (
      <form className="f-col g12" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
        <label htmlFor="email">Email</label>
        <div className="f-row g8">
          <input
            id="email"
            type="email"
            className="flex"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="form-button" disabled={loading}>
               <Spinner loading={loading} label="Continue" />
          </button>
        </div>
        {/* {error && <p className="error">{error}</p>} */}
      </form>
    );
  } else {
    return <Login email={email} />;
  }
}