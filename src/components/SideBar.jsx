import React from 'react';
import { LayoutDashboard, LayoutGrid } from 'lucide-react';
import '../App.css';

const icons = Array(10).fill(< LayoutDashboard className="h-auto  w-8  fill-current text-[var(--color-secondary)]" />);

const SideBar = () => {
    return (
        <div className="  w-[77px] border-t-2 border-r-2 border-b-2   rounded-t-md rounded-l-md rounded-b-md border-[black] h-screen  flex flex-col items-center py-4 gap-6">
            {icons.map((icon, index) => (
                <div key={index}>{icon}</div>
            ))}
        </div>
    );
};

export default SideBar;
