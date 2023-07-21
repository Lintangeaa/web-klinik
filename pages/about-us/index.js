import React from "react";
import CarouselAbout from "@/components/carousel/CaroselAbout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <main>
      <Header />
      <section className="relative bg-fixed h-72 bg-about">
        <h1 className="absolute text-3xl font-bold right-10 top-1/3 text-secondary">
          About US
        </h1>
      </section>
      <section className="px-5 md:px-20"> {/* Gunakan px-5 untuk versi mobile dan px-20 untuk versi desktop */}
        <div className="w-full py-5 mt-10 border-b-4 border-double border-secondary">
          <h1 className="text-3xl text-secondary">
            Who <span className="font-bold">We Are</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row py-5 mt-2"> {/* Membuat tampilan menjadi kolom pada versi mobile dan baris pada versi desktop */}
          <p className="w-full md:w-2/3 text-center md:text-left md:mr-2"> {/* Membuat teks rata tengah pada versi mobile dan rata kiri pada versi desktop */}
            Kami dengan bangga mempersembahkan Medicare, penyedia perawatan kesehatan terkemuka yang didedikasikan untuk memberikan pelayanan medis berkualitas tinggi dan solusi kesehatan yang komprehensif bagi Anda dan keluarga. Didirikan dengan semangat melayani dan mengutamakan kesejahteraan pasien, kami telah menjadi bagian tak terpisahkan dari komunitas kesehatan sejak 2002.
          </p>
          <div className="w-full md:w-1/3 rounded-2xl"> {/* Menyesuaikan lebar div carousel pada versi mobile dan desktop */}
            <CarouselAbout />
          </div>
        </div>
        <div className="w-full py-5 mt-10 border-b-4 border-double border-secondary">
          <h1 className="text-3xl text-secondary">
            <span className="font-bold">Visi</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row py-5 mt-2"> {/* Membuat tampilan menjadi kolom pada versi mobile dan baris pada versi desktop */}
          <p className="w-full md:w-2/3 text-center md:text-left md:mr-2"> {/* Membuat teks rata tengah pada versi mobile dan rata kiri pada versi desktop */}
          Visi kami adalah menjadi klinik kesehatan pilihan masyarakat dengan reputasi yang terkenal atas pelayanan medis berkualitas dan inovasi yang berkelanjutan. Kami berambisi untuk menciptakan dampak positif bagi masyarakat dengan menjadi mitra andal dalam menjaga kesehatan dan kesejahteraan mereka.
          </p>          
        </div>
        <div className="w-full py-5 mt-10 border-b-4 border-double border-secondary">
          <h1 className="text-3xl text-secondary">
            <span className="font-bold">Misi</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row py-5 mt-2"> {/* Membuat tampilan menjadi kolom pada versi mobile dan baris pada versi desktop */}
          <p className="w-full md:w-2/3 text-center md:text-left md:mr-2"> {/* Membuat teks rata tengah pada versi mobile dan rata kiri pada versi desktop */}
            Misi kami adalah meningkatkan kualitas hidup dan kesejahteraan masyarakat melalui pelayanan medis yang berkualitas, pencegahan penyakit, dan edukasi kesehatan. Kami percaya bahwa akses terhadap perawatan kesehatan yang terjangkau dan berkualitas adalah hak asasi setiap individu. Oleh karena itu, kami berkomitmen untuk menghadirkan pelayanan prima yang mengutamakan kenyamanan dan kepercayaan pasien.
            </p>          
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
