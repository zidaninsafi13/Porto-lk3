import { NonTeachingActivity } from "@/types";

export const NON_TEACHING_ACTIVITIES: NonTeachingActivity[] = [
  {
    id: "act-01",
    number: "01",
    title: "Senam Pagi Bersama",
    date: "Semester Genap 2025/2026",
    role: "Pendamping Aktivitas Kebugaran Warga Sekolah",
    learning: "Senam pagi menjadi ruang untuk membangun kebiasaan hidup aktif, koordinasi gerak, dan semangat kebersamaan sebelum kegiatan belajar dimulai.",
    aspectRatio: "portrait",
    image: "assets/images/nonmengajar/senam.jpeg",
    imageAlt: "Peserta didik mengikuti kegiatan senam pagi di halaman sekolah",
    highlights: ["Kebugaran", "Koordinasi", "Kebersamaan"]
  },
  {
    id: "act-02",
    number: "02",
    title: "Pendampingan Lomba Atletik",
    date: "Semester Genap 2025/2026",
    role: "Pendamping Peserta Didik dalam Kegiatan Atletik",
    learning: "Pendampingan dilakukan untuk menjaga kesiapan fisik dan mental peserta didik, memberi dukungan selama perlombaan, serta menumbuhkan keberanian dan sportivitas.",
    aspectRatio: "portrait",
    image: "assets/images/nonmengajar/pendampingan-lomba.jpeg",
    imageAlt: "Pendamping dan peserta didik seusai kegiatan lomba atletik",
    highlights: ["Pendampingan", "Sportivitas", "Percaya Diri"]
  },
  {
    id: "act-03",
    number: "03",
    title: "Upacara Hari Pramuka",
    date: "Semester Genap 2025/2026",
    role: "Partisipasi dalam Kegiatan Karakter Sekolah",
    learning: "Upacara Hari Pramuka menguatkan nilai kedisiplinan, tanggung jawab, kebersamaan, dan semangat pengabdian sebagai bagian dari pendidikan karakter.",
    aspectRatio: "wide",
    image: "assets/images/nonmengajar/pramuka.jpeg",
    imageAlt: "Peserta didik mengikuti Upacara Hari Pramuka di lingkungan sekolah",
    isPlaceholder: false,
    highlights: ["Disiplin", "Karakter", "Pengabdian"],
  }
];

export const REFLECTIONS = [
  {
    number: "01",
    title: "Apa yang Saya Pelajari",
    body: "Selama menjalani PPL di SDN 1 Setonopande, saya menyadari pembelajaran PJOK yang efektif di tingkat SD bukan bertumpu pada kesempurnaan teknik layaknya atlet, melainkan pada bagaimana membangun kegembiraan bergerak, rasa aman psikologis, dan kesempatan mencoba yang adil bagi setiap peserta didik. Manajemen ruang terbuka dan instruksi ringkas jauh lebih menentukan dibanding penjelasan verbal yang panjang."
  },
  {
    number: "02",
    title: "Perkembangan Saya sebagai Guru",
    body: "Saya bertransformasi dari mahasiswa yang berfokus pada konten teknis menjadi pendidik yang peka terhadap kondisi emosional dan variasi motorik anak. Saya belajar memodifikasi alat, merancang diferensiasi tingkat tantangan sirkuit gerak, mengintegrasikan PSE, serta mengendalikan ritme belajar agar waktu aktif gerak anak tetap maksimal."
  },
  {
    number: "03",
    title: "Hal yang Akan Saya Tingkatkan",
    body: "Ke depan, saya berkomitmen memperkaya strategi asesmen formatif yang efisien dan tidak menyita waktu gerak anak. Selain itu, saya ingin mengoptimalkan pemanfaatan umpan balik visual instan serta terus merancang media pembelajaran inovatif dari bahan ramah lingkungan untuk menjawab keterbatasan sarana olahraga di sekolah dasar."
  }
];
