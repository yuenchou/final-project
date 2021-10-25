import React from "react";

const PagiNation = ({ postdPerPagem, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postdPerPagem ); i++) {

        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example text-center">
            <ul class="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}  >
                        <a  onClick={()=>paginate(number)}   className="page-link"     >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
      
}
export default PagiNation;