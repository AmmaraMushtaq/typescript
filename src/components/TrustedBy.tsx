"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  { name: "Etisalat", logo:  "https://www.etisalat.ae/content/dam/dx_eitsalat_ae/en/system/wst/assets/img/footer-logo/etisalat_eand_English_Primary_logo_RGB_Black.png", link: "https://www.etisalat.ae/content/dam/dx_eitsalat_ae%E2%80%A6/etisalat_eand_English_Primary_logo_RGB_Black.png" },
  { name: "Improve the News", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://www.improvethenews.org/" },
  { name: "Chronicle", logo:"https://chroniclehq.com/images/brand/context-logo.svg", link: "https://chroniclehq.com/" },
  { name: "Carbonite", logo: "https://prod-cms.carbonite.com/globalassets/site-images/nav/carbonite-by-opentext---logo---normal.svg", link: "https://www.carbonite.com/?srsltid=AfmBOooacsz1ReiJHZAfS32V1Ophy6rflnSNWX8zM4RLnoezqMjADaAw" },
  { name: "Waveback", logo:"https://static.wixstatic.com/media/f22735_ab41d925af42483882d4b053a3b363b8~mv2.png/v1/fill/w_234,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f22735_ab41d925af42483882d4b053a3b363b8~mv2.png", link: "https://www.waveback.io/"},
  { name: "Etisalat", logo:  "https://www.etisalat.ae/content/dam/dx_eitsalat_ae/en/system/wst/assets/img/footer-logo/etisalat_eand_English_Primary_logo_RGB_Black.png", link: "https://www.etisalat.ae/content/dam/dx_eitsalat_ae%E2%80%A6/etisalat_eand_English_Primary_logo_RGB_Black.png" },
  { name: "Improve the News", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://www.improvethenews.org/" },
  { name: "Chronicle", logo: "https://chroniclehq.com/images/brand/context-logo.svg", link:"https://chroniclehq.com/"},
  { name: "Carbonite", logo:"https://prod-cms.carbonite.com/globalassets/site-images/nav/carbonite-by-opentext---logo---normal.svg", link:"https://www.carbonite.com/?srsltid=AfmBOooacsz1ReiJHZAfS32V1Ophy6rflnSNWX8zM4RLnoezqMjADaAw" },
  { name: "Waveback", logo: "https://static.wixstatic.com/media/f22735_ab41d925af42483882d4b053a3b363b8~mv2.png/v1/fill/w_234,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f22735_ab41d925af42483882d4b053a3b363b8~mv2.png", link: "https://www.waveback.io/"},
];

const TrustedBy = () => {
  return (
    <section className="section bg-black/90 py-10">
      <div className="container-custom text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
          Trusted by Leading Brands
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mt-2">
          I've collaborated with industry leaders to optimize their DevOps and security practices.
        </p>
      </div>

      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-14 w-14 md:h-16 md:w-16 rounded-full object-contain invert opacity-70 hover:opacity-100 transition-all"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBy;
