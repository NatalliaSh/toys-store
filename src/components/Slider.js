import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Scrollbar } from 'swiper/modules';

import 'swiper/element/css/scrollbar';
import './Slider.scss';

register();

export const Slider = React.forwardRef(
  ({ dependencies, children, settings }, ref) => {
    const param = {
      slidesPerView: 'auto',
      scrollbar: 'true',
      autoplay: 'true',
      autoplayDisableOnInteraction: 'false',
      autoplayDelay: '1000',
      speed: '5000',
      loop: 'true',
      centeredSlides: 'true',
      autoplayReverseDirection: 'false',
    };

    for (let key in settings) {
      param[key] = settings[key];
    }

    useEffect(() => {
      function handleMouseEnter(e) {
        const autoplay = e.target.swiper.autoplay;
        autoplay.stop();
      }
      function handleMouseLeave(e) {
        const autoplay = e.target.swiper.autoplay;
        autoplay.start();
      }

      if (dependencies && ref.current) {
        ref.current.addEventListener('mouseenter', handleMouseEnter);
        ref.current.addEventListener('mouseleave', handleMouseLeave);

        const params = {
          modules: [Scrollbar],
          injectStylesUrls: ['path/to/scrollbar-element.min.css'],
          injectStyles: [
            `:host .swiper-scrollbar {top: 0;}`,
            `.swiper-scrollbar-drag {background-color: #a5c926;}`,
          ],
        };
        Object.assign(ref.current, params);
        ref.current.initialize();
      }

      return () => {
        if (dependencies && ref.current) {
          const a = ref.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, [dependencies]);

    return (
      <swiper-container
        className='Slider'
        init='false'
        ref={ref}
        slides-per-view={param.slidesPerView}
        scrollbar={param.scrollbar}
        autoplay={param.autoplay}
        autoplay-disable-on-interaction={param.autoplayDisableOnInteraction}
        autoplay-delay={param.autoplayDelay}
        speed={param.speed}
        loop={param.loop}
        centered-slides={param.centeredSlides}
        autoplay-reverse-direction={param.autoplayReverseDirection}
      >
        {children}
      </swiper-container>
    );
  },
);
