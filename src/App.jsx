
import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import DaftarSiswa from "./latihan/soal-3";
import FormSiswa from "./latihan/soal-4";

function App() {
  return (
    <div className="w-screen flex flex-col items-center pt-10 gap-6">

      {/* Panggil komponen dari soal latihan dibawah sini*/}

      <div className="p-6 space-y-4">
        <StudentCard
          nama="Luthfian"
          kelas="XI RPL"
          statusLulus={true}
        />

        <StudentCard
          nama="Andi"
          kelas="XI TKJ"
          statusLulus={false}
        />

        <StudentCard
          nama="Budi"
          kelas="XI RPL"
          statusLulus={true}
        />
      </div>

      <div className="p-6 space-y-4">
        <TaskItem
          judul="Belajar React"
          prioritas="tinggi"
          selesai={false}
        />

        <TaskItem
          judul="Mengerjakan Tugas"
          prioritas="sedang"
          selesai={true}
        />

        <TaskItem
          judul="Belajar JavaScript"
          prioritas="rendah"
          selesai={false}
        />
      </div>

      {/* Khusus soal 3, Panggil di dalam div ini*/}
      <div className="flex flex-col gap-3">
        <DaftarSiswa />
      </div>

      <div className="p-6">
        <FormSiswa />
      </div>

    </div>
  );
}

export default App;
