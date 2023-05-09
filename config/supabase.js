import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://cdjndiwlkguoekmsamkv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkam5kaXdsa2d1b2VrbXNhbWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNjI1NTIsImV4cCI6MTk3MjkzODU1Mn0.fZzlfdwRpKp5e3nkw-8FrmSGYJyejnz5Dlh_21o-MW4';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage,
});

export default supabase;
  