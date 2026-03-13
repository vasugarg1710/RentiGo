// Function to load Navbar
function loadNavbar() {
    const navbarHTML = `
        <nav class="fixed w-full z-50 glass top-0 transition-all duration-300" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.location.href='index.html'">
                        <i class="fa-solid fa-car-side text-indigo-500 text-3xl"></i>
                        <span class="font-bold text-2xl tracking-wider text-white">Renti<span class="text-indigo-500">Go</span></span>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                            <a href="index.html" class="hover:text-indigo-400 text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="vehicles.html" class="hover:text-indigo-400 text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Vehicles</a>
                            <a href="user-dashboard.html" class="hover:text-indigo-400 text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">User Portal</a>
                            <a href="agency-dashboard.html" class="hover:text-indigo-400 text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Agency Portal</a>
                            <a href="admin-dashboard.html" class="hover:text-purple-400 text-purple-400/80 px-3 py-2 rounded-md text-xs font-medium transition-colors border border-purple-500/30 bg-purple-500/10">Admin Portal</a>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center gap-4">
                        <a href="login.html" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Log in</a>
                        <a href="register.html" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.5)]">Sign up</a>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <button type="button" onclick="toggleMobileMenu()" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile menu -->
            <div class="md:hidden hidden bg-slate-900 border-b border-gray-800 absolute w-full" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                    <a href="index.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="vehicles.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Vehicles</a>
                    <a href="user-dashboard.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">User Portal</a>
                    <a href="agency-dashboard.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Agency Portal</a>
                    <a href="admin-dashboard.html" class="text-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Admin Portal</a>
                    <div class="border-t border-gray-800 my-2 pt-2 flex flex-col">
                        <a href="login.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Log in</a>
                        <a href="register.html" class="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-2 text-center">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    const header = document.getElementById('header-placeholder');
    if (header) {
        header.innerHTML = navbarHTML;
    }
}

// Function to load Footer
function loadFooter() {
    const footerHTML = `
        <footer class="bg-slate-900 border-t border-gray-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="col-span-1 md:col-span-1">
                        <div class="flex items-center gap-2 mb-4">
                            <i class="fa-solid fa-car-side text-indigo-500 text-2xl"></i>
                            <span class="font-bold text-xl text-white">Renti<span class="text-indigo-500">Go</span></span>
                        </div>
                        <p class="text-gray-400 text-sm">Premium vehicle rental service offering top-tier 2-wheelers and 4-wheelers for flexible durations.</p>
                        <div class="flex space-x-4 mt-6">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fa-brands fa-twitter text-xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fa-brands fa-instagram text-xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fa-brands fa-facebook text-xl"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Services</h3>
                        <ul class="space-y-4 text-sm text-gray-400">
                            <li><a href="vehicles.html" class="hover:text-indigo-400 transition-colors">4-Wheeler Rental</a></li>
                            <li><a href="vehicles.html" class="hover:text-indigo-400 transition-colors">2-Wheeler Rental</a></li>
                            <li><a href="leasing.html" class="hover:text-indigo-400 transition-colors">Long-term Leasing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Support</h3>
                        <ul class="space-y-4 text-sm text-gray-400">
                            <li><a href="about.html" class="hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="leasing.html" class="hover:text-indigo-400 transition-colors">Long-term Leasing</a></li>
                            <li><a href="corporate.html" class="hover:text-indigo-400 transition-colors">Corporate Accounts</a></li>
                            <li><a href="contact.html" class="hover:text-indigo-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Agencies</h3>
                        <ul class="space-y-4 text-sm text-gray-400">
                            <li><a href="agency-dashboard.html" class="hover:text-indigo-400 transition-colors">Partner Dashboard</a></li>
                            <li><a href="agency-dashboard.html" class="hover:text-indigo-400 transition-colors">List Your Vehicle</a></li>
                            <li><a href="agency-requirements.html" class="hover:text-indigo-400 transition-colors">Agency Requirements</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 border-t border-gray-800 pt-8 flex items-center justify-between">
                    <p class="text-sm text-gray-400">&copy; 2026 RentiGo, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
    const footer = document.getElementById('footer-placeholder');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.classList.add('shadow-lg');
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        } else {
            navbar.style.background = 'rgba(30, 41, 59, 0.7)';
            navbar.classList.remove('shadow-lg');
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    }
});

// Utilities to extract queries
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    let result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
});
