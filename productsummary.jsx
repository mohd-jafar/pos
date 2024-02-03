import React from 'react'

function Productsummary() {
  return (
    <>
    
    {/* import React from 'react'; */}

{/* const ProductSummary = () => { */}
    {/* return ( */}
        <div className="maincontainer w-96 h-44 ml-2 mt-2 border border-black rounded-lg">
            <h2 className="text-lg font-medium px-4 py-2">Product Summary</h2>
            <br />
            <div className="items  flex justify-between px-4">
                <div className="itema flex flex-col items-center gap-3">
<img src="/Suppliers.svg" alt="" />
                    <p className="num text-gray-500 font-semibold text-base">31</p>
                    <p className="text text-gray-700 font-medium text-sm">Number of Suppliers</p>
                </div>
                <div className="ite flex flex-col items-center gap-3">
<img src="/Categories.svg" alt="" />                    <p className="num text-gray-500 font-semibold text-base">21</p>
                    <p className="text text-gray-700 font-medium text-sm">Number of Categories</p>
                </div>
            </div>
        </div>
    {/* );
}; */}

{/* export default ProductSummary; */}

    </>
  )
}

export default Productsummary