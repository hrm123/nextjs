import React from 'react';


const Header = () => {
    return (
        <header
            className="inline-flex items-baseline justify-between w-full mb-2 align-top border-b-4 border-gray-300"
          >
            <section className="block">
              <h1 className="mb-0 text-5xl font-bold text-gray-700">
                <a href="/">Rammohan Holagundi</a>
              </h1>
              <h2
                className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
              >
                Hands on full stack tech lead - Microsoft/Javascript stacks
              </h2>
              <h3
                className="m-0 mt-2 ml-2 font-semibold text-lg text-gray-500 leading-snugish"
              >
                San Diego, California
              </h3>
            </section>
            <section
              className="justify-between px-3 mt-0 mb-5 text-4xl font-bold leading-none text-white initials-container bg-gray-700 print:bg-black"
              style={{paddingBottom: "1.5rem", paddingTop: "1.5rem"}}
            >
              <section className="text-center initial">H</section>
              <section className="text-center initial">R</section>
              <section className="text-center initial">M</section>
            </section>
      </header>
    );
}

export default React.memo(Header);