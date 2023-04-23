import React from 'react';
import { Gallery } from './gallery';
import { useSelector } from 'react-redux';
import { selectRealtyBySlug } from 'store/realty/selector';
import { useParams } from 'react-router-dom';
import About from './about';
import { Characteristics } from './characteristics';

export const RealtyDetails = () => {
  const { slug } = useParams();
  const realty = useSelector(selectRealtyBySlug(slug));

  const { name, description, summary, price } = realty || {};

  return (
    <section className="">
      <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{name}</h1>
      <div className="container mx-auto">
        {/* <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  {' '}
                  Home{' '}
                </a>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {' '}
                    Products{' '}
                  </a>
                </div>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {' '}
                    Coffee{' '}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav> */}

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 md:grid-cols-5 lg:gap-16">
          <Gallery />
          <About description={description} summary={summary} price={price} />
          <Characteristics />
        </div>
      </div>
    </section>
  );
};
