import React, { useState } from 'react';

function Pagination({ activeIndex }) {
  const [paginationItems] = useState([0, 1, 2, 3,4]); // Agrega aquí los índices de los círculos

  return (
    <div className='pagination'>
      {paginationItems.map((itemIndex) => (
        <div
          key={itemIndex}
          className={`pagination__border ${itemIndex === activeIndex ? 'active' : ''}`}
        >
          <div className="pagination__circle"></div>
        </div>
      ))}
    </div>
  );
}

export default Pagination;