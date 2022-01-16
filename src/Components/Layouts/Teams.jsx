import React, { Fragment } from "react";


const Team = () => {
    return (
        <Fragment>
            <section className="testimonials-two-about">
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className="sub-title wow pixFadeUp">Testiimonial</h3>
                        <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">What our client say about us</h2>
                    </div>{/* /.section-title */}
                    <div id="testimonial-wrapper">
                        <div className="swiper-container wow pixFadeUp" data-wow-delay="0.5s" id="testimonial-two" data-speed={700} data-autoplay={5000} data-perpage={2} data-space={50} data-breakpoints="{&quot;991&quot;: {&quot;slidesPerView&quot;: 1}}">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-two">
                                        <div className="testi-content-inner">
                                            <div className="testimonial-bio">
                                                <div className="avatar">
                                                    <img src="https://p.kindpng.com/picc/s/226-2267500_avatar-icon-png-white-transparent-png.png" alt="testimonial" />
                                                </div>
                                                {/* /.avatar */}
                                                <div className="bio-info">
                                                    <h3 className="name">Alex S</h3>
                                                    <span className="job">Web Developer</span>
                                                </div>
                                            </div>
                                            {/* /.testimonial */}
                                            <div className="testimonial-content">
                                                <p>Working with him is an great experince understand the business idea, delivered it by time .</p>
                                            </div>
                                            {/* /.testimonial-content */}
                                            {/* <ul className="rating">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul> */}
                                            <div className="quote">
                                                <img src="media/testimonial/quote.png" alt="quote" />
                                            </div>
                                            {/* /.quote */}
                                        </div>
                                        {/* /.testi-content-inner */}
                                        <div className="shape-shadow" />
                                    </div>
                                    {/* /.testimonial-two */}
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-two">
                                        <div className="testi-content-inner">
                                            <div className="testimonial-bio">
                                                <div className="avatar">
                                                    <img src="https://p.kindpng.com/picc/s/226-2267500_avatar-icon-png-white-transparent-png.png" alt="testimonial" />
                                                </div>
                                                {/* /.avatar */}
                                                <div className="bio-info">
                                                    <h3 className="name">WedMeGood</h3>
                                                    <span className="job">Steven Smith</span>
                                                </div>
                                            </div>
                                            {/* /.testimonial */}
                                            <div className="testimonial-content">
                                            <p>He has build WedMeGood wesbite and backend for us amazing experince. Extremly talented and Hard working</p>                                            </div>
                                            {/* /.testimonial-content */}
                                            {/* <ul className="rating">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul> */}
                                            <div className="quote">
                                                <img src="https://p.kindpng.com/picc/s/226-2267500_avatar-icon-png-white-transparent-png.png" alt="quote" />
                                            </div>
                                        </div>
                                        {/* /.testi-content-inner */}
                                        <div className="shape-shadow" />
                                    </div>
                                    {/* /.testimonial-two */}
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-two">
                                        <div className="testi-content-inner">
                                            <div className="testimonial-bio">
                                                <div className="avatar">
                                                    <img src="https://p.kindpng.com/picc/s/226-2267500_avatar-icon-png-white-transparent-png.png" alt="testimonial" />
                                                </div>
                                                {/* /.avatar */}
                                                <div className="bio-info">
                                                    <h3 className="name">Sameer C.R</h3>
                                                    <span className="job">Ryzole CEO</span>
                                                </div>
                                            </div>
                                            {/* /.testimonial */}
                                            <div className="testimonial-content">
                                            <p>Had a hand on experience in backend Fullfill our bussiness need and also Great ,perfect time of Delivery.</p>                                            </div>
                                            {/* /.testimonial-content */}
                                            {/* <ul className="rating">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul> */}
                                            <div className="quote">
                                                <img src="media/testimonial/quote.png" alt="quote" />
                                            </div>
                                        </div>
                                        {/* /.testi-content-inner */}
                                        <div className="shape-shadow" />
                                    </div>
                                    {/* /.testimonial-two */}
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-two">
                                        <div className="testi-content-inner">
                                            <div className="testimonial-bio">
                                                <div className="avatar">
                                                    <img src="https://p.kindpng.com/picc/s/226-2267500_avatar-icon-png-white-transparent-png.png" alt="testimonial" />
                                                </div>
                                                {/* /.avatar */}
                                                <div className="bio-info">
                                                    <h3 className="name">Bulk Delivering System</h3>
                                                    <span className="job">Mukesh Khana</span>
                                                </div>
                                            </div>
                                            {/* /.testimonial */}
                                            <div className="testimonial-content">
                                            <p>Has worked with for bulk delivery system has great knownlege of backend and frontEnd.Eager to learn new things and Full needs </p>                                            {/* /.testimonial-content */}
                                            {/* <ul className="rating">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul> */}
                                            <div className="quote">
                                                <img src="media/testimonial/quote.png" alt="quote" />
                                            </div>
                                        </div>
                                        {/* /.testi-content-inner */}
                                        <div className="shape-shadow" />
                                    </div>
                                    {/* /.testimonial-two */}
                                </div>
                                </div>
                            </div>{/* /.swiper-wrapper */}
                        </div>{/* /.swiper-container */}
                        <div className="shape-shadow" />
                        <div className="slider-nav wow pixFadeUp" data-wow-delay="0.3s">
                            <div id="slide-prev" className="swiper-button-prev">
                                <i className="ei ei-arrow_left" />
                            </div>
                            <div id="slide-next" className=" swiper-button-next">
                                <i className="ei ei-arrow_right" />
                            </div>
                        </div>
                    </div>
                    {/* /#testimonial-wrapper */}
                </div>
                {/* /.container */}
                <div className="scroll-circle">
                    <img src="media/background/circle11.png" data-parallax="{&quot;y&quot; : 250}" alt="shape" />
                </div>
            </section>
            {/* /.teams */}
            {/*==============================*/}
            {/*=         Client Logo        =*/}
            {/*==============================*/}
            <section className="client-logo-list">
                <div className="container">
                    <div className="section-title style-five">
                        <h3 className="sub-title wow pixFadeUp">Our Clients</h3>
                        <h2 className="title wow pixFadeUp" data-wow-delay="0.2s">
                            Our Sactisfactory Clients
                        </h2>
                    </div>
                    <ul className="logo-list">
                        <li className="wow fadeInUp" data-wow-delay="0.3s"><img className="wemegood" src="https://www.pngkit.com/png/full/967-9673227_cute-ideas-to-make-your-home-mehendi-function.png" alt="saaspik client" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s"><img className="wemegood" src="https://myarchitectureinteriorleads.in/images/logo_300x300.png" alt="saaspik client" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s"><img className="bookmyinterior" src="https://bookmyinteriorlead.com/wp-content/uploads/2020/08/300-X-110-LOGO-FOR-WHITE-BACKGROUND.png" alt="saaspik client" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s"><img className="bookmyinterior" src="https://images.squarespace-cdn.com/content/v1/5d49e8c18ba68c00018ad207/1596589507890-LOJSBWNTQZY0IH779E97/Care+Connect+-+Logo+w+Tag+CMYK.png" alt="saaspik client" /></li>
                        {/* <li className="wow fadeInUp" data-wow-delay="0.3s"><a href="#"><img src="media/brand/20.png" alt="saaspik client" /></a></li> */}
                        {/* <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><img src="https://3.bp.blogspot.com/-zHCuL8vfPZE/VorQdJDTsHI/AAAAAAAAGpg/UAm2HiCG5Ao/w1200-h630-p-k-no-nu/2000px-United_India_Insurance.svg_.png" alt="saaspik client" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><img src="media/brand/22.png" alt="saaspik client" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><img src="media/brand/23.png" alt="saaspik client" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><img src="media/brand/25.png" alt="saaspik client" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><img src="media/brand/24.png" alt="saaspik client" /></a></li> */}
                    </ul>
                </div>
                {/* /.container */}
            </section>
        </Fragment>
    )
}

export default Team