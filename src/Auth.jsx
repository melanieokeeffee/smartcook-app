import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zudndwhrynoqkviubbtp.supabase.co';
const supabaseAnonKey = 'ТВОЙ_АНОНИМНЫЙ_КЛЮЧ'; // вставь сюда свой anon ключ из Supabase

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <h2>Вход / Регистрация</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn} disabled={loading}>
        Войти
      </button>
      <button onClick={handleSignUp} disabled={loading}>
        Зарегистрироваться
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
