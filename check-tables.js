import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://wdwpqdzndlaldpuzuxyo.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkd3BxZHpuZGxhbGRwdXp1eHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMzUyNjYsImV4cCI6MjA3MTgxMTI2Nn0.POnq8gaOkM4gDtzD9jCSC1mV4ymqurTW1wKTQz6CUCM'
);

async function checkTables() {
  const tables = ['users', 'chat_sessions', 'survey_recipients', 'organizations', 'companies'];
  console.log('Checking Supabase tables...\n');
  
  for (const table of tables) {
    try {
      const { data, error, count } = await supabase.from(table).select('*', { count: 'exact', head: true });
      if (!error) {
        console.log(`✅ ${table}: ${count || 0} rows`);
      } else {
        console.log(`❌ ${table}: ${error.message}`);
      }
    } catch (err) {
      console.log(`❌ ${table}: ${err.message}`);
    }
  }
}

checkTables().catch(console.error);