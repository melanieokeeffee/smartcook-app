import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zudndwhrynoqkviubbtp.supabase.co/';        // замени на URL из настроек
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1ZG5kd2hyeW5vcWt2aXViYnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDI3NzAsImV4cCI6MjA2Mjg3ODc3MH0.bb77J7MtJOUuqcMP1pt3u6ldvVVXBG500Ve7_kOpJ2Q';       // замени на anon ключ из настроек

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
