import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import scss from './pagination.module.scss'


function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={scss.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={scss.pageItem}>
                        <a onClick={() => paginate(number)} href='!#' className={scss.pageLink}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );

}

export default Pagination