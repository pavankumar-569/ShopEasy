import React from 'react';
import "../componentStyles/NoProducts.css"; 

function NoProducts({keyword}) {
  return (
    <div className="no-products-content">
        <div className="no-products-icon">⚠️</div>
        <h3 className="no-products-title">No Products Found</h3>
        <p className="no-products-message">
                {keyword?`we couldn't find any products matching "${keyword}". Try using different keywords or browse our complete catalog`:'No products are currently available. Please check back later'}
        </p>
    </div>
  )
}

export default NoProducts