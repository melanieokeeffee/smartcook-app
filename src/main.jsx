import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Auth from './Auth.jsx';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zudndwhrynoqkviubbtp.supabase.co';
const supabaseAnonKey = 'ТВОЙ_АНОНИМНЫЙ_КЛЮЧ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Main() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем есть ли уже залогиненный пользователь
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Слушаем изменения статуса авторизации
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return user ? <App user={user} supabase={supabase} /> : <Auth supabase={supabase} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
