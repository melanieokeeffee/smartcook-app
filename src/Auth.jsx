const supabaseUrl = 'https://zudndwhrynoqkviubbtp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1ZG5kd2hyeW5vcWt2aXViYnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDI3NzAsImV4cCI6MjA2Mjg3ODc3MH0.bb77J7MtJOUuqcMP1pt3u6ldvVVXBG500Ve7_kOpJ2Q';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    if (!email || !password) {
      setError('Введите email и пароль');
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Введите email и пароль');
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Ошибка входа:', error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Вход / Регистрация</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignIn} disabled={loading}>Войти</button>
      <button onClick={handleSignUp} disabled={loading}>Зарегистрироваться</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
