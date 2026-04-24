/* ================= CITY COORDINATES ================= */
const cityCoords = {
    Delhi: [28.6139, 77.2090],
    Mumbai: [19.0760, 72.8777],
    Kolkata: [22.5726, 88.3639],
    Chennai: [13.0827, 80.2707],
    Bangalore: [12.9716, 77.5946],
    Hyderabad: [17.3850, 78.4867],
    Jaipur: [26.9124, 75.7873],
    Lucknow: [26.8467, 80.9462],
    Pune: [18.5204, 73.8567],
    Ahmedabad: [23.0225, 72.5714],
    Chandigarh: [30.7333, 76.7794],
    Bhubaneswar: [20.2961, 85.8245],
    Guwahati: [26.1445, 91.7362],
    Asansol: [23.6739, 86.9524]
};

/* ================= DISTANCE FUNCTION ================= */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    return Math.round(R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))));
}

/* ================= TRANSPORT ================= */
function showTransport() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const dist = calculateDistance(...cityCoords[from], ...cityCoords[to]);

    const taxiMin = dist * 10;
    const taxiMax = dist * 18;
    const busMin = Math.round(dist * 0.8);
    const busMax = Math.round(dist * 1.6);
    const trainMin = Math.round(dist * 0.6);
    const trainMax = Math.round(dist * 1.2);

    document.getElementById("transportResult").innerHTML = `
    <div class="result">
        <b>Distance:</b> ${dist} km<br>
        <b>Taxi Fare:</b> ₹${taxiMin} – ₹${taxiMax}<br>
        <b>Bus Fare:</b> ₹${busMin} – ₹${busMax}<br>
        <b>Train Fare:</b> ₹${trainMin} – ₹${trainMax}<br><br>

        ⚠ <b>Above ₹${taxiMax} → Overpriced</b><br><br>

        <b>For Online Booking Click Here:</b><br><br>

        <div class="link-card-container">
            <a href="https://www.uber.com" target="_blank" class="link-card">🚕 Uber</a>
            <a href="https://www.olacabs.com" target="_blank" class="link-card">🚖 Ola</a>
        </div>
    </div>
    `;
}

/* ================= SHOPPING ================= */
function showShopping() {
    const city = document.getElementById("shopCity").value;

    const data = {
        Delhi: ["Sarojini Nagar", "Chandni Chowk", "Karol Bagh", "Lajpat Nagar", "Select Citywalk"],
        Mumbai: ["Colaba Causeway", "Linking Road", "Crawford Market", "Phoenix Mall", "Fashion Street"],
        Kolkata: ["New Market", "Gariahat", "South City Mall", "Quest Mall", "Park Street"],
        Chennai: ["T Nagar", "Pondy Bazaar", "Express Avenue", "Phoenix MarketCity", "Spencer Plaza"],
        Bangalore: ["Commercial Street", "Brigade Road", "Forum Mall", "Orion Mall", "Jayanagar"],
        Hyderabad: ["Laad Bazaar", "Charminar Market", "Inorbit Mall", "Forum Mall", "Begum Bazaar"],
        Jaipur: ["Johari Bazaar", "Bapu Bazaar", "MI Road", "World Trade Park", "Tripolia Bazaar"],
        Lucknow: ["Hazratganj", "Aminabad", "Phoenix Mall", "Janpath Market", "Alambagh"],
        Pune: ["FC Road", "MG Road", "Phoenix Mall", "JM Road", "Tulsi Baug"],
        Ahmedabad: ["Law Garden", "CG Road", "Alpha One Mall", "Manek Chowk", "Iscon Mall"],
        Chandigarh: ["Sector 17 Market", "Elante Mall", "Sector 22 Market", "Palika Bazaar", "DT Mall"],
        Bhubaneswar: ["Unit 1 Market", "Esplanade Mall", "Forum Mart", "Saheed Nagar", "DN Regalia"],
        Guwahati: ["Fancy Bazaar", "Paltan Bazaar", "City Center Mall", "Ganeshguri", "GS Road"],
        Asansol: ["Galaxy Mall", "Burnpur Market", "Sentrum Mall", "Court More", "Hutton Road"]
    };

    document.getElementById("shoppingResult").innerHTML = `
    <div class="result">
        <b>For Online Shopping Click Here:</b><br><br>

        <div class="link-card-container">
            <a href="https://www.amazon.in" target="_blank" class="link-card">🛒 Amazon</a>
            <a href="https://www.flipkart.com" target="_blank" class="link-card">🛍️ Flipkart</a>
        </div><br>

        <b>Offline Shopping Areas:</b><br>
        ${data[city].join("<br>")}
    </div>
    `;
}

/* ================= FOOD ================= */
function showFood() {
    const city = document.getElementById("foodCity").value;

    const data = {
        Delhi: ["Karim’s", "Paranthe Wali Gali", "India Gate Street Food", "Khan Market", "Connaught Place"],
        Mumbai: ["Juhu Beach", "Bademiya", "Leopold Cafe", "Mohammad Ali Road", "Candies"],
        Kolkata: ["Flurys", "Peter Cat", "Park Street", "Arsalan", "Kathi Rolls"],
        Chennai: ["Murugan Idli", "Saravana Bhavan", "Marina Beach", "Anjappar", "Sangeetha"],
        Bangalore: ["VV Puram Food Street", "CTR", "Toit", "Empire", "Nagarjuna"],
        Hyderabad: ["Paradise Biryani", "Shah Ghouse", "Bawarchi", "Charminar Street Food", "Cafe Bahar"],
        Jaipur: ["LMB", "Rawat", "Tapri Central", "Masala Chowk", "Niros"],
        Lucknow: ["Tunday Kababi", "Royal Cafe", "Dastarkhwan", "Aminabad Street Food", "Rahim’s"],
        Pune: ["Vaishali", "Goodluck Cafe", "FC Road", "German Bakery", "Katakirr"],
        Ahmedabad: ["Manek Chowk", "Agashiye", "Gopi Dining", "Swati Snacks", "Rajwadu"],
        Chandigarh: ["Sector 17", "Virgin Courtyard", "Pal Dhaba", "Brooklyn Central", "Sagar Ratna"],
        Bhubaneswar: ["Dalma", "Truptee", "Zaika", "Mainland China", "Street Food Market"],
        Guwahati: ["Khorikaa", "Paradise Restaurant", "Michinga", "Reboti Chat House", "Cafe Hendrix"],
        Asansol: ["Dominos", "Barbeque Nation", "Spice Garden", "Street Food", "Burnpur Food"]
    };

    document.getElementById("foodResult").innerHTML = `
    <div class="result">
        <b>For Online Booking Click Here:</b><br><br>

        <div class="link-card-container">
            <a href="https://www.zomato.com" target="_blank" class="link-card">🍽️ Zomato</a>
            <a href="https://www.swiggy.com" target="_blank" class="link-card">🚚 Swiggy</a>
        </div><br>

        <b>Offline Food Options:</b><br>
        ${data[city].join("<br>")}
    </div>
    `;
}

/* ================= HOTEL ================= */
function showHotel() {
    const city = document.getElementById("hotelCity").value;

    const hotelData = {
        Delhi: ["Taj Palace", "ITC Maurya", "The Oberoi", "Leela Palace", "Radisson Blu"],
        Mumbai: ["Taj Mahal Palace", "Trident Nariman Point", "JW Marriott", "The Oberoi Mumbai", "ITC Maratha"],
        Kolkata: ["ITC Royal Bengal", "The Oberoi Grand", "Taj Bengal", "Hyatt Regency", "Novotel"],
        Chennai: ["ITC Grand Chola", "Taj Coromandel", "Leela Palace", "Hyatt Regency", "Radisson Blu"],
        Bangalore: ["The Leela Palace", "Taj West End", "ITC Gardenia", "JW Marriott", "Shangri-La"],
        Hyderabad: ["ITC Kohenur", "Trident Hyderabad", "Taj Krishna", "Novotel HICC", "Park Hyatt"],
        Jaipur: ["Rambagh Palace", "ITC Rajputana", "Trident Jaipur", "Jai Mahal Palace", "Holiday Inn"],
        Lucknow: ["Taj Mahal Hotel", "Renaissance", "Clarks Avadh", "Hilton Garden Inn", "Novotel"],
        Pune: ["JW Marriott Pune", "The Westin", "Hyatt Regency", "Conrad Pune", "Sheraton Grand"],
        Ahmedabad: ["Taj Skyline", "Hyatt Regency", "Courtyard Marriott", "Novotel", "Radisson Blu"],
        Chandigarh: ["JW Marriott", "Hyatt Regency", "Taj Chandigarh", "The Lalit", "Holiday Inn"],
        Bhubaneswar: ["Mayfair Lagoon", "Trident Bhubaneswar", "Swosti Premium", "Vivanta", "The Crown"],
        Guwahati: ["Radisson Blu", "Vivanta Guwahati", "Novotel", "Hotel Gateway Grandeur", "Mayflower"],
        Asansol: ["The Grand Asansol", "Ispat Hotel", "Hotel Priyanka", "Hotel Asansol International", "Hotel Regal"]
    };

    document.getElementById("hotelResult").innerHTML = `
    <div class="result">
        <b>For Online Booking Click Here:</b><br><br>

        <div class="link-card-container">
            <a href="https://www.makemytrip.com" target="_blank" class="link-card">🏨 MakeMyTrip</a>
            <a href="https://www.booking.com" target="_blank" class="link-card">🏢 Booking.com</a>
        </div><br>

        <b>Available Hotels:</b><br>
        ${hotelData[city].join("<br>")}
    </div>
    `;
}