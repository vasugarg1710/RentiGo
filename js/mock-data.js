const mockVehicles = [
    {
        id: "v1",
        type: "4W",
        brand: "Tesla",
        model: "Model 3",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
        price: { daily: 80, weekly: 500, monthly: 1800 },
        fuel: "Electric",
        transmission: "Automatic",
        seats: 5,
        rating: 4.9,
        available: true,
        agencyId: "a1",
        description: "The Tesla Model 3 offers an incredible driving experience with autopilot capability and an elegant minimalist interior."
    },
    {
        id: "v2",
        type: "4W",
        brand: "BMW",
        model: "M4 Competition",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
        price: { daily: 150, weekly: 900, monthly: 3200 },
        fuel: "Petrol",
        transmission: "Automatic",
        seats: 4,
        rating: 4.8,
        available: true,
        agencyId: "a1",
        description: "Experience the ultimate driving machine. The M4 Competition combines aggressive styling with uncompromised performance."
    },
    {
        id: "v3",
        type: "2W",
        brand: "Royal Enfield",
        model: "Classic 350",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=600&fit=crop",
        price: { daily: 20, weekly: 120, monthly: 400 },
        fuel: "Petrol",
        transmission: "Manual",
        seats: 2,
        rating: 4.7,
        available: true,
        agencyId: "a2",
        description: "A classic cruiser design with modern reliability. Perfect for city rides and short highway trips."
    },
    {
        id: "v4",
        type: "4W",
        brand: "Mercedes-Benz",
        model: "G-Class",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop",
        price: { daily: 200, weekly: 1200, monthly: 4500 },
        fuel: "Petrol",
        transmission: "Automatic",
        seats: 5,
        rating: 4.9,
        available: false,
        agencyId: "a2",
        description: "Luxury meets off-road capability. The G-Class is an iconic SUV offering supreme comfort and prestige."
    },
    {
        id: "v5",
        type: "2W",
        brand: "Ducati",
        model: "Panigale V4",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
        price: { daily: 60, weekly: 350, monthly: 1200 },
        fuel: "Petrol",
        transmission: "Manual",
        seats: 2,
        rating: 4.8,
        available: true,
        agencyId: "a1",
        description: "A true superbike designed for performance enthusiasts. Incredibly fast and agile."
    },
    {
        id: "v6",
        type: "4W",
        brand: "Toyota",
        model: "Camry",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
        price: { daily: 45, weekly: 280, monthly: 1000 },
        fuel: "Hybrid",
        transmission: "Automatic",
        seats: 5,
        rating: 4.5,
        available: true,
        agencyId: "a2",
        description: "Reliable, comfortable, and efficient hybrid sedan. Excellent for both city and long drives."
    }
];



const mockUser = {
    id: "u1",
    name: "Alex Doe",
    email: "alex@example.com",
    role: "customer", // customer, agency, admin
    avatar: "https://ui-avatars.com/api/?name=Alex+Doe&background=4F46E5&color=fff&size=128"
};

const mockBookings = [
    {
        id: "b1",
        vehicleId: "v1",
        userId: "u1",
        startDate: "2026-03-15",
        endDate: "2026-03-18",
        status: "Active",
        duration: "daily",
        totalAmount: 240
    },
    {
        id: "b2",
        vehicleId: "v3",
        userId: "u1",
        startDate: "2026-02-10",
        endDate: "2026-02-12",
        status: "Completed",
        duration: "daily",
        totalAmount: 40
    }
];
