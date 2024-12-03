import React, { useState } from "react";
import { ChevronDown, Logs, Menu, X } from "lucide-react"; // Add Menu icon for mobile
import "../App.css";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center w-full  justify-between sm:justify-start   md:gap-32  px-1 sm:px-4  py-2  bg-white border-[var(--color-border)]">
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <img
                    src="/img/logo.png"
                    alt="Winishtech Logo"
                    width={220}
                    height={'60px'}
                    className="  mt-1 pt-2   "
                />
            </div>


            <div className="hidden sm:flex items-center z-10 space-x-6">
                <button className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    New Lead
                    <ChevronDown className="ml-1 h-4 w-4 text-[var(--color-secondary)]" />
                </button>
                <button className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    SAAS Model
                    <ChevronDown className="ml-1 h-4 w-4 text-[var(--color-secondary)]" />
                </button>
                <button className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    Payroll
                    <ChevronDown className="ml-1 h-4 w-4 text-[var(--color-secondary)]" />
                </button>
            </div>

            {/* Right Section: Mobile Menu Icon */}
            <div className="sm:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-[var(--color-secondary)]" />
                    ) : (
                        <Menu className="h-6 w-6 text-[var(--color-secondary)]" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div
                    className={`fixed text-center  top-24 right-0 h-full w-full bg-orange-500 shadow-md transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out sm:hidden z-50`}
                >
                    <div className="flex flex-col items-start p-4 space-y-4">
                        <button className="flex items-center w-full text-left text-white hover:text-gray-300">
                            New Lead
                            <ChevronDown className="ml-1 h-4 w-4 text-white" />
                        </button>
                        <button className="flex items-center w-full text-left text-white hover:text-gray-300">
                            SAAS Model
                            <ChevronDown className="ml-1 h-4 w-4 text-white" />
                        </button>
                        <button className="flex items-center w-full text-left text-white hover:text-gray-300">
                            Payroll
                            <ChevronDown className="ml-1 h-4 w-4 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
