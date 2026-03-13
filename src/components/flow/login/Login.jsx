import { useState } from "react";
import Spinner from "../../Spinner";
import { EyeIcon } from "../../../assets/icon";
import { supabase } from '../../../lib/supabase'

export default function Login({ email }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setLoading(false);
      return;
    }

    const { access_token, refresh_token } = data.session
    window.location.href = `https://platform.hypeify.io?access_token=${access_token}&refresh_token=${refresh_token}`
  }

  return (
    <form onSubmit={handleLogin} className="f-col g28">
      <div className="f-col block-one g12">
        <label>Email</label>
        <input type="text" value={email} readOnly className="inactive" />
      </div>

      <div className="f-col block-two g12">
        <label>Password</label>
        <div className="f-col password-wrap">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={showPassword ? 'Password123' : '••••••'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className={`password-toggle-button f-row ${showPassword ? 'show' : ''}`}
          >
            <EyeIcon />
            <div className="stroke f-row">
              <div className="two"></div>
              <div className="one"></div>
            </div>
          </button>
        </div>
      </div>

      <button className="form-button" disabled={loading}>
        <Spinner loading={loading} label="Log In" />
      </button>
    </form>
  );
}