import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <section id="breadcrumbs" className="pt-6 bg-gray-50">
            <div className="container mx-auto px-4">
                <ol className="list-reset flex">
                    {breadcrumbs.map((breadcrumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        return (
                            <li key={index} className="flex items-center">
                                {!isLast ? (
                                    <>
                                        <Link to={breadcrumb.link} className="font-semibold hover:text-primary">
                                            {breadcrumb.name}
                                        </Link>
                                        <span className="mx-2">&gt;</span>
                                    </>
                                ) : (
                                    <span className="font-semibold text-gray-500">{breadcrumb.name}</span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Breadcrumbs;
