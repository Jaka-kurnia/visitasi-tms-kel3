import React from 'react'

export function Workflow() {
  return (
    <section className="w-full bg-white rounded-[2.5rem] shadow-sm border border-slate-100/60 p-8 md:p-12 lg:p-16 flex flex-col items-center">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
          Bedah Sistem Alur Kerja Tim TMS
        </h1>
        <p className="text-sm md:text-base text-[#64748b] leading-relaxed">
          Bagaimana sebuah proyek dapat diselesaikan dengan efisien tinggi dan cepat? Berikut adalah analisis workflow harian di TMS.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Mengapa Waterfall Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
          {/* Icon */}
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">Mengapa Waterfall?</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Sebagian besar alur proyek klien sudah memiliki spesifikasi yang sangat jelas di awal. Karakteristik ini membuat metode <span className="text-blue-600 font-semibold">Waterfall</span> jauh lebih cocok dibanding Agile.
            </p>
          </div>

          {/* Sub Card: Rahasia Efisiensi Super */}
          <div className="bg-[#edf4ff] border-l-4 border-blue-500 rounded-r-xl p-4">
            <h4 className="text-xs font-bold text-blue-700 mb-2 flex items-center gap-1">
              🔑 Rahasia Efisiensi Super:
            </h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              TMS sering mendaur ulang (<span className="italic">recycle</span>) modul dasar yang telah mereka buat di proyek sebelumnya. Hal ini mempercepat estimasi pengerjaan hingga <span className="font-bold text-blue-700">kurang dari seminggu</span> untuk implementasi fitur standar!
            </p>
          </div>
        </div>

        {/* Right Column: Tahapan Eksekusi */}
        <div className="lg:col-span-8 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl">
          <h3 className="text-lg font-bold text-[#0f172a] mb-8">
            Tahapan Eksekusi Proyek TMS:
          </h3>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 border-l-2 border-indigo-100 flex flex-col gap-8 ml-3">
            
            {/* Step 1 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-[35px] top-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base text-[#0f172a]">
                  Direct to Code (UI/UX Tanpa Bertele-tele)
                </h4>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  Berbeda dengan agensi besar, konsep tampilan seringkali hanya digambar kasar menggunakan kertas coretan tangan dan langsung dieksekusi ke coding pemrograman. Alat desain detail seperti Figma hanya digunakan jika ada <span className="text-indigo-600 font-medium">permintaan khusus dari klien</span>.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-[35px] top-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base text-[#0f172a]">
                  Sistem Tim Fleksibel & Lintas-Disiplin
                </h4>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  Dari total lebih dari 100 karyawan di TMS, divisi IT diisi oleh sekitar <span className="font-bold text-slate-800">25 pengembang profesional</span>. Para developer dituntut adaptif dan fleksibel; tidak kaku pada satu peran (dapat menangani front-end, back-end, atau mobile development secara bergantian sesuai prioritas proyek).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-[35px] top-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base text-[#0f172a]">
                  Dedicated Quality Assurance (QA)
                </h4>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  Guna memastikan aplikasi berjalan sempurna tanpa celah error ketika rilis ke klien, terdapat 1 orang Quality Assurance (QA) khusus yang melakukan pengetesan mendalam serta skenario pengujian fungsionalitas sistem.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-[35px] top-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                4
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base text-[#0f172a]">
                  Menejemen Tugas via Trello & GitHub
                </h4>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  Manajemen tugas terpantau secara real-time menggunakan platform Kanban board dari Trello, dan semua riwayat penulisan kode sumber (<span className="italic">source code version control</span>) tersimpan rapi serta terpantau aman menggunakan repositori GitHub.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Workflow;