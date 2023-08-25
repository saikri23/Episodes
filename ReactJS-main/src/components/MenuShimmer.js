const MenuShimmer = () => {
    return (
        <div className="mx-72 w-7/12 mt-10 h-64">
            <div className="flex justify-between">
                <div>
                    <div className="w-56 mt-2 h-5 bg-gray-100 rounded-md"></div>
                    <div className="w-44 mt-2  h-5 bg-gray-100 rounded-md"></div>
                    <div className="w-32 mt-2 h-5 bg-gray-100 rounded-md"></div>
                </div>
                <div className="mt-2 mr-6">
                    <div className="mt-2 w-16 h-6 bg-gray-100 rounded-md"></div>
                    <div className="mt-2 w-16 h-6 bg-gray-100 rounded-md"></div>
                </div>
            </div>
            <div className="flex mt-8">
                <div className="w-20 h-5 mr-5 bg-gray-100 rounded-md"></div>
                <div className="w-20 h-5 bg-gray-100 rounded-md"></div>
            </div>  
            <div className="mt-6 w-6/12 h-8 bg-gray-100 rounded-md"></div> 
                
        </div>
    )
}

export default MenuShimmer;