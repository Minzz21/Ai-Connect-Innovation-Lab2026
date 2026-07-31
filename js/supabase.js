// ==========================================
// KONFIGURASI SUPABASE
// ==========================================
// Ganti URL dan KEY di bawah ini dengan kredensial dari Dashboard Supabase Anda:
// (Project Settings -> API -> Project URL & Project API Keys)

const SUPABASE_URL = 'https://fgjpyaewgcoejnwncxmb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnanB5YWV3Z2NvZWpud25jeG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0OTc2ODYsImV4cCI6MjEwMTA3MzY4Nn0.5TLDzYwLNUrcLkX6CugystLiYXz0F_Iebkh8-jw1n1g';

// Inisialisasi client Supabase
// Pastikan script CDN Supabase sudah diload di HTML sebelum file ini
let supabaseClient = null;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("✅ Supabase Client berhasil diinisialisasi!");
} else {
    console.error("❌ Library Supabase belum diload! Pastikan tag <script> CDN Supabase ada di HTML.");
}

// Anda bisa menggunakan supabaseClient di file JS lain (misalnya main.js) 
// untuk melakukan operasi seperti read, insert, update data ke database.
// Contoh penggunaan di file lain:
// async function getData() {
//     const { data, error } = await supabaseClient.from('nama_tabel').select('*');
//     if (error) console.error(error);
//     else console.log(data);
// }
