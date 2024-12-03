import React from "react";
import { Bookmark, MessageSquare, MoreVertical, Phone, Send } from "lucide-react";
import '../App.css';


// LeadCard component
const Cards = ({
    companyName,
    contactName,
    phoneNumber,
    date,
    time,
    id,
}) => {
    return (
        <div className="relative border-orange-500 border-2  rounded-2xl overflow-hidden shadow-2xl">



            {/* Card Header */}
            <div className="flex items-center justify-between pt-3 px-3  ">
                <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-[var(--color-primary)]">{companyName}</h3>
                    <span className="px-3 py-1 text-sm text-orange-600  border-orange-600 border-2 rounded-full">New</span>
                </div>
                <div className="flex items-center gap-2">

                    <Bookmark className="h-5 w-5 text-[var(--color-secondary)]" />


                    <MoreVertical className="h-5 w-5 text-[var(--color-secondary)]" />

                </div>
            </div>

            {/* Card Content */}
            <div className="p-2">
                <h4 className="font-semibold  text-black">{contactName}</h4>
                <div className="flex justify-between text-md text-gray-500 mt-1">
                    <span className=" text-black">{phoneNumber}</span>
                    <span className=" text-black">{id}</span>
                </div>
                <div className="flex justify-between text-md text-gray-500 mt-1">
                    <span className=" text-black">{date}</span>
                    <span className=" text-black">{time}</span>
                </div>
            </div>

            {/* Card Footer */}
            <div className="flex justify-between pt-1 pb-3 px-3  ">
                <div className="flex gap-2">
                    <button className=" ">
                        <Phone className="h-5 w-5 fill-orange-500 text-white" />
                    </button>
                    <button className=" ">
                        <MessageSquare className="h-5 w-5 fill-orange-500 text-white" />
                    </button>
                    <button className=" ">
                        <Send className="h-5 w-5 fill-orange-500 text-white" />
                    </button>
                </div>
                <span className="text-xl text-[var(--color-primary)]  ">#Notes</span>
            </div>
        </div>
    );
};

export default Cards