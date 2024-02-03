import React from 'react'
// import Photo from ''

const NewUser = () => {
  return (
    <>

 <div className="maincontainer mt-2 ml-2 w-5/12 h-40 bg-white border border-grey rounded-lg  ">
  <br />
            <h1 className="ml-3 font-medium  text-lg">Purchase Overview</h1>

<br />

<div className="item flex justify-around gap-6">

{/* 1 */}
<div className="items w-28 h-16  ">
            <div className="itema flex justify-center">
                <img src="/Purchase bag.svg" alt="" />
            </div>

            <div className="itemb mt-3 w-28 h-6   flex justify-between ">
                <p className="text-gray-600">82</p>
                <p className= "text-gray-500">Purchase</p>
            </div>
        </div>

{/* 2 */}
<div className="items w-28 h-16  ">
            <div className="itema flex justify-center">
                <img src="/Cost.png" alt="" />
                
            </div>

            <div className="itemb mt-3 w-28 h-6 flex justify-between ">
                <p className= "text-gray-600">13,573</p>
                <p className= "text-gray-500">Cost</p>
            </div>
        </div>

{/* 3 */}
<div className="itemss  w-28 h-16  ">
            <div className="itema flex justify-center">
            <img src="/Cancel.svg" alt="" />
            </div>

            <div className="itemc mt-5 w-28 h-6 flex justify-between ">
                <p className= "text-gray-600">5</p>
                <p className= "text-gray-500">Cancel</p>
            </div>
        </div>

<hr />
        {/* 4 */}
<div className="items  w-28 h-16  ">
            <div className="itemd flex justify-center">
            <img src="/Profit.svg" alt="" />

            </div>

            <div className="itemb mt-3 w-28 h-6 flex justify-between ">
                <p className= "text-gray-600">17,432</p>
                <p className= "text-gray-500">Return</p>
            </div>
        </div>




        </div>



        </div>




    </>
  )
}

export default NewUser