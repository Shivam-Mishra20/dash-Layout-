import React from "react";
import { Search, FilterIcon, SlidersHorizontal, Calendar, MessageSquare, Settings, Phone, Filter, MessageSquareText } from "lucide-react";
import '../App.css';

const Searchbar = () => {
    return (
        <div className="flex    items-center gap-4  px-4 py-2 bg-white ">
            {/* Search Input */}
            <div className="flex-1 relative">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search"
                        className=" hidden sm:block w-full pl-4 pr-10 py-2  border-custom-black   rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />

                </div>
            </div>

            {/* Filter Button */}

            <div className="flex  gap-4">
                <button
                    className="flex  items-center  gap-8 px-4 py-2 text-sm font-medium border-custom-black  rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                >
                    Filter

                    <Search className=" h-4 w-4   text-black" />




                </button>

                {/* Date Button */}
                <button
                    className="flex  items-center border-custom-black    gap-8 px-4 py-2 text-sm font-medium border rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                >
                    Date

                    <Filter fill="black" className=" h-4 w-4   text-black" />




                </button>

            </div>



            {/* Icons Section */}

            <button
                className="py-2 md-4  md:ml-12 rounded-full flex gap-4 px-4 bg-orange-500 hover:bg-orange-400 focus:ring-2 focus:ring-orange-600"
            >
                <MessageSquareText className="h-5     w-5  text-white  " />
                <Settings className="h-5     w-5  text-white  " />
                <Phone className="h-5       w-5  text-white  " />
            </button>


        </div>
    );
};

export default Searchbar;
