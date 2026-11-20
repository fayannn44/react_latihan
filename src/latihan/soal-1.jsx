
/*
 TODO:
 1. Buatlah komponen bernama 'StudentCard' yang menerima props:
    nama (string),
    kelas (string),
    statusLulus (boolean).
 2. Gunakan teknik Object Destructuring pada parameter fungsi komponen untuk menangkap props.
 3. Ubah teks statis di dalam card agar dinamis mengikuti data dari props.
 4. Panggil komponen 'StudentCard' sebanyak 3 kali di dalam komponen utama 'App' dengan data yang berbeda-beda.
*/


function StudentCard({ nama, kelas, statusLulus }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white flex justify-between items-center">
      <div>
        {/* Buat tulisan "Nama Siswa" menjadi dinamis dengan memanfaatkan interpolasi + props */}
        <h3 className="text-lg font-bold text-gray-800">{nama}</h3>

        {/* Buat tulisan "Kelas" menjadi dinamis dengan memanfaatkan interpolasi + props */}
        <p className="text-sm text-gray-500">{kelas}</p>
      </div>

      <p>{statusLulus ? "Lulus" : "dungu blom lulus"}</p>
    </div>
  );
}

export default StudentCard;
// 1. Jawaban: Agar lebih singkat dan mudah mengambil props.

// 2. Jawaban: JavaScript Expression.