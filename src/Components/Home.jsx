import React from "react";
import Table from "./Table/Table";
import CommunityLogo from "./CommunityLogo";

const Home = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center max-w-7xl mx-auto pt-[4rem]">
      <div className="flex flex-col justify-around space-y-2 items-center text-center px-2">
        <h1 className="text-2xl font-bold px-2 py-3">
          Yardım formlarına tek bir yerden erişin!
        </h1>
        <p className="md:text-lg max-w-2xl text-center">
          Bu sayfada 6 Şubat 2023'de ülkemizde meydana gelen depremlerden
          etkilenenler için organize edilmekte olan tüm yardımlaşma linklerini
          bir araya getiriyoruz.
        </p>
        <p className="md:text-lg max-w-2xl text-center">
          {" "}
          Lütfen bilginiz dahilindeki formları{" "}
          <a
            href="https://forms.gle/sEogKJQv3C19Dypn8"
            className="text-blue-500 font-semibold underline underline-offset-4 "
          >
            BU LİNKTEN
          </a>{" "}
          bizlere bildirerek çalışmamıza destek olunuz. Bildirdiğiniz link en
          kısa zamanda gözden geçirilerek yayına alınacaktır. Lütfen bu adresi
          dostlarınıza duyurmayı ihmal etmeyiniz.
        </p>
      </div>
      <Table />
      <CommunityLogo />
    </section>
  );
};

export default Home;
