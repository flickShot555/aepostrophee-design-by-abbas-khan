// src/admin/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');   // <— define error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // TODO: call your auth API here
    // on success:
    //navigate('/admin/portfolio');
    // 1) Build form data
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);

    try {
      const res = await fetch('https://aepostrophee.com/api/admin_login.php', {
        method: 'POST',
        body: form,
        credentials: 'include',    // to receive the session cookie
      });
    
      if (!res.ok) {
        const text = await res.text();
        setError(text || `Server error: ${res.status}`);
        return;
      }



      const json = await res.json();

      if (json.success) {
        navigate('/admin/pages/PortfolioAdmin');
      } else {
        setError(json.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Unexpected error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:ring-ring focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:ring-ring focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full text-center bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:animate-glow transition"
          >
            Enter
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => {/* TODO: handle forgot password flow */}}
            className="text-sm text-secondary hover:text-secondary-foreground transition"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}
