import './ExploreContainer.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      
      <Swiper
      initialSlide={2}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["53%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sideNav">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in autem quas eius quaerat corporis fuga incidunt. Aut veniam incidunt quisquam? Maxime dolore sit omnis quis, aliquid corrupti obcaecati ex!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='main'>
            
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio tempore at dicta, sequi nobis quas quis, accusamus enim fuga quisquam saepe repudiandae rerum eveniet illo voluptatum doloribus quod. Nobis?
          </div>
        </SwiperSlide>
      </Swiper>
       </div>
  );
};

export default ExploreContainer;
