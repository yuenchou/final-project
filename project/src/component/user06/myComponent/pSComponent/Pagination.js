import React from 'react';
import {NavLink} from "react-router-dom";
import '../../css/myStyle06.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li onClick={() => paginate((currentPage - 1) < 1 ? 1 : (currentPage - 1))} className="pageItem06">
                    <NavLink className="pageLink06 pageLinkColor" to="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </NavLink>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)} className="pageItem06"><NavLink className="pageLink06 pageLinkColor" to="#">{number}</NavLink></li>
                ))}
                {/* paginate(number)是回傳number到product_Search.js */}
                <li onClick={() => paginate((currentPage + 1) > (Math.ceil(totalPosts/postsPerPage)) ? currentPage : (currentPage + 1))} className="pageItem06">
                    <NavLink className="pageLink06 pageLinkColor" to="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Pagination;