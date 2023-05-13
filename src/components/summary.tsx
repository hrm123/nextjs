import React from 'react';


const Summary = () => {
    return (
        <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
                {/* To keep in the same column */}
                <section className="break-inside-avoid">
                <h2
                    className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal"
                >
                    SUMMARY
                </h2>

                <section className="mb-2 break-inside-avoid">
                    <p className="mt-2 leading-normal text-gray-700 text-md">
                    Over 20+ years of full stack work experience (.NET / Javascript stack, SQL, NoSql etc) in developing/ architecting/ maintaining/ supporting - web, web services, mobile, distributed, multi-threaded, high performance/throughput applications.
                    </p>
                </section>
                </section>
            </section>
    );
}

export default React.memo(Summary);