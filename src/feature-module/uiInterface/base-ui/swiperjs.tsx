import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard, Scrollbar, EffectCube, EffectFade, EffectFlip, EffectCoverflow, FreeMode, Thumbs, Autoplay } from 'swiper/modules';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';

const Swiperjs = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const handleThumbsSwiper = (swiper:any) => {
        setThumbsSwiper(swiper);
      };
    return (
        <div className="page-wrapper cardhead">
            <div className="content">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Clipboard</h3>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                {/* Start::row-1 */}
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Basic Swiper</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay]}
                                    className="swiper swiper-basic"
                                >
                                    <div className="swiper swiper-basic">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Swiper With Navigation</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    cssMode={true}
                                    navigation={true}
                                    pagination={false}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                    className=" swiper-navigation "
                                >
                                    <div className="swiper swiper-navigation">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Swiper with Pagination</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    pagination={true} modules={[Pagination,Autoplay]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    className=" swiper pagination"

                                >
                                    <div className="swiper pagination">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Dynamic Pagination</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination,Autoplay]}
                                    className="pagination-dynamic"

                                >
                                    <div className="swiper pagination-dynamic">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Pagination With Progress</div>
                            </div>
                            <div className="card-body">
                                <Swiper>
                                    <div className="swiper pagination-progress">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Pagination Fraction</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    pagination={{
                                        type: 'fraction',
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation,Autoplay]}
                                    className="pagination-fraction"
                                >
                                    <div className="swiper pagination-fraction">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Custom Paginatioin</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    pagination={pagination}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination,Autoplay]}
                                    className="custom-pagination"
                                >
                                    <div className="swiper custom-pagination">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Scrollbar Swiper</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Scrollbar,Autoplay]}
                                    className="scrollbar-swiper"
                                >
                                    <div className="swiper scrollbar-swiper">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-scrollbar" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Vertical Swiper</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    direction={'vertical'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination,Autoplay]}
                                    className="vertical swiper-vertical"
                                >
                                    <div className="swiper vertical swiper-vertical">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Mouse Wheel Control</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    direction={'vertical'}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    mousewheel={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Mousewheel, Pagination,Autoplay]}
                                    className="vertical vertical-mouse-control"
                                >
                                    <div className="swiper vertical vertical-mouse-control">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Keyboard Control</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[Keyboard, Pagination, Navigation,Autoplay]}
                                    className="keyboard-control"
                                >
                                    <div className="swiper keyboard-control">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Nested Swiper</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    className="swiper wiper-horizontal1"
                                    spaceBetween={50}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination,Autoplay]}
                                >
                                    <div className="swiper swiper-horizontal1">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="swiper vertical swiper-vertical1">
                                                    <div className="swiper-wrapper">
                                                        <SwiperSlide className="swiper-slide">
                                                            <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                                        </SwiperSlide>
                                                        <SwiperSlide className="swiper-slide">
                                                            <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                                        </SwiperSlide>
                                                        <SwiperSlide className="swiper-slide">
                                                            <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                                        </SwiperSlide>
                                                    </div>
                                                    <div className="swiper-pagination" />
                                                </div>
                                            </div>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Effect Cube</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    effect={'cube'}
                                    grabCursor={true}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    pagination={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[EffectCube, Pagination,Autoplay]}
                                    className="swiper-effect-cube swiper"
                                >
                                    <div className="swiper swiper-effect-cube">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Effect Fade</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    spaceBetween={30}
                                    effect={'fade'}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[EffectFade, Navigation, Pagination,Autoplay]}
                                    className="swiper-fade"
                                >
                                    <div className="swiper swiper-fade">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Effect Flip</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    effect={'flip'}
                                    grabCursor={true}
                                    pagination={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[EffectFlip, Pagination, Navigation,Autoplay]}
                                    className=" swiper-flip "
                                >
                                    <div className="swiper swiper-flip">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
                {/*End::row-1 */}
                {/* Start:: row-2 */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Effect Coverflow</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination,Autoplay]}
                                    className="swiper-overflow"
                                >
                                    <div className="swiper swiper-overflow">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End:: row-2 */}
                {/* Start:: row-3 */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Thumbs Gallery</div>
                            </div>
                            <div className="card-body">
                                <Swiper
                                  spaceBetween={10}
                                  navigation={true}
                                  thumbs={{ swiper: thumbsSwiper }}
                                  autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                  modules={[FreeMode, Navigation, Thumbs,Autoplay]}
                                  className="mySwiper2"
                                >
                                    <div className="swiper swiper-preview">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </Swiper>
                                <Swiper
                                    onSwiper={handleThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                     <div className="swiper swiper-view">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-03.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-04.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-05.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-01.jpg" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <ImageWithBasePath src="assets/img/img-02.jpg" alt="Img" />
                                        </SwiperSlide>
                                    </div>
                                </div>
                                </Swiper>

                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* End:: row-3 */}
            </div>
        </div>

    )
}

export default Swiperjs
