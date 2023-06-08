import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import hero from '../assets/hero-image.jpg';
import logo from '../assets/logo-hero.svg';

const HomePage = () => {
  return (
    <>
      <div>
        <Header></Header>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={hero}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                What is <span>Hash</span>
                <span className=" font-bold text-yellow-500	 ">Graph</span>?
              </h1>
              <p class="mb-8 leading-relaxed">
                HashGraph is a user-centric web app for cryptocurrency market
                data visualization. Users can register, access real-time crypto
                data displayed in intuitive charts, and mark favourite
                cryptocurrency pairs for personalized tracking. The application
                offers a user-friendly interface, making the complex world of
                crypto markets easily navigable. Whether you're a seasoned
                trader or a crypto newbie, HashGraph helps you stay informed and
                make data-driven decisions.
              </p>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
