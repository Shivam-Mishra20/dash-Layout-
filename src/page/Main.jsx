import React from 'react';
import { NavBar } from '../components/Navbar';
import SideBar from '../components/SideBar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';
import TotalCards from '../components/TotalCards';

const Main = () => {
    // Generate an array of 24 placeholder card data
    const cardData = Array.from({ length: 24 }, (_, index) => ({
        companyName: `Company ${index + 1}`,
        contactName: `Contact ${index + 1}`,
        phoneNumber: `(123) 456-78${String(index).padStart(2, '0')}`,
        date: '2024-12-03',
        time: '2:00 PM',
        id: `${index + 1}`,
    }));

    return (
        <div className="w-full h-screen">
            <NavBar />
            <div className="flex   gap-2 ">
                <SideBar />

                <div className="flex-1  pr-2 ">
                    <Searchbar />
                    <TotalCards />


                </div>
            </div>
        </div>
    );
};

export default Main;
