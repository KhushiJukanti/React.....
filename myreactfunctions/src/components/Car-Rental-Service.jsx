// CarCatalog.js
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ... (rest of your code)


const CarCatalog = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [filters, setFilters] = useState({ availability: 'all', price: 'all', luxury: 'all' });

    useEffect(() => {
        // Mock car data
        const mockData = [
            { name: "Nissan Magnite 2023", about: "Manual-Petrol-5seats", availability: "Available", price: 90, luxury: "Luxury", rating: 4.5, imageUrl: "https://zoomcar-assets.zoomcar.com/499739/HostCarImage/host_car_image_4997396c1b922d-4740-4ae6-a31e-5773928f8d47.jpg20231230-37-9p2065" },
            { name: "Maruti Suzuki Ertiga 2023", about: "Manual-Petrol-7seats", availability: "Booked", price: 90, luxury: "Standard", rating: 4, imageUrl: "https://zoomcar-assets.zoomcar.com/398189/HostCarImage/host_car_image_398189654e9fe6-548f-47dc-a34b-8d63189bdefe.jpg20230927-32-3vdjwl" },
            { name: "Renault Kwid 2023", about: "Automatic-Petrol-5seats", availability: "Available", price: 80, luxury: "Luxury", rating: 4, imageUrl: "https://zoomcar-assets.zoomcar.com/234678/HostCarImage/host_car_image_2346786f194743-00ab-41a6-b652-4740d889a4f1.jpg20230821-29-vub6od" },
            { name: "Hyundai Grand i10 2023", about: "Manual-Ptrol-5seats", availability: "Booked", price: 80, luxury: "Standard", rating: 5, imageUrl: "https://zoomcar-assets.zoomcar.com/287099/HostCarImage/host_car_image_287099e50529f7-83a9-4fc1-8984-0167e5220651.jpg20230614-47-1rebpru" },
            { name: "KIA Sonet 2022", about: "Automatic-Petrol-5seats", availability: "Booked", price: 110, luxury: "Luxury", rating: 5, imageUrl: "https://zoomcar-assets.zoomcar.com/528551/HostCarImage/host_car_image_52855152586cfd-6fd9-4a46-95db-c74e6402eb3e.jpg20240127-32-nbhhlx" },
            { name: "Maruti Suzuki Ertiga 2022", about: "manual-Diesel-7seats", availability: "Available", price: 90, luxury: "Standard", rating: 4.5, imageUrl: "https://zoomcar-assets.zoomcar.com/498962/HostCarImage/host_car_image_498962bdd89a6c-8099-4aab-8057-c539f305eb1e.jpg20231227-36-1fkny8z" },
            { name: "Maruti Suzuki Swift 2023", about: "manual-petrol-5seats", availability: "Booked", price: 70, luxury: "Luxury", rating: 4.8, imageUrl: "https://zoomcar-assets.zoomcar.com/514816/HostCarImage/host_car_image_514816a688fb55-42e9-4653-9a1d-f4740b6aefae.jpg20240110-32-1qyg55x" },
            { name: "Hyundai Creta 2016", about: "Automatic-petrol-5seats", availability: "Available", price: 80, luxury: "Standard", rating: 4.7, imageUrl: "https://zoomcar-assets.zoomcar.com/530656/HostCarImage/host_car_image_530656f21dca10-fe83-45f5-b8d4-4f2c3d775d6d.jpg20240129-33-ujyqkw" },
            { name: "Toyota Glanza 2024", about: "Automatic-Ptrol-5seats", availability: "Booked", price: 90, luxury: "Standard", rating: 4.2, imageUrl: "https://zoomcar-assets.zoomcar.com/535386/HostCarImage/host_car_image_535386f943a65f-082f-42bd-93d7-fa93d43be70e.jpg20240203-33-cvf6do" },
            { name: "Mahindra XUV500 2020", about: "Manual-Diesel-7seats", availability: "Available", price: 100, luxury: "Luxury", rating: 5, imageUrl: "https://zoomcar-assets.zoomcar.com/528818/HostCarImage/host_car_image_528818ad352cd4-7424-430f-93a6-916e47b53c3f.jpg20240127-34-13886t7" },
            { name: "Maruti Suzuki Brezza 2020", about: "Automatic-Petrol-5seats", availability: "Booked", price: 70, luxury: "Standard", rating: 4, imageUrl: "https://zoomcar-assets.zoomcar.com/458999/HostCarImage/host_car_image_4589996122fab6-faf7-47d8-9ad3-bbc907b04376.jpg20231110-42-1qpt05q" },
            { name: "Mahindra Thar 2022", about: "Manual-Diesel-4seats", availability: "Available", price: 100, luxury: "Luxury", rating: 4.5, imageUrl: "https://zoomcar-assets.zoomcar.com/501435/HostCarImage/host_car_image_5014354e739318-09ed-4b9f-805f-fff558c68bda.jpg20240123-30-iug47j" },

            // Add more cars as needed
        ];

        setCars(mockData);
        setFilteredCars(mockData);
    }, []);

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
    };

    useEffect(() => {
        // Apply filters
        let filteredResults = cars;

        if (filters.availability !== 'all') {
            filteredResults = filteredResults.filter(car => car.availability === filters.availability);
        }

        if (filters.price !== 'all') {
            const priceFilterValue = parseInt(filters.price, 10);
            filteredResults = filteredResults.filter(car => car.price <= priceFilterValue);
        }

        if (filters.luxury !== 'all') {
            filteredResults = filteredResults.filter(car => car.luxury === filters.luxury);
        }

        setFilteredCars(filteredResults);
    }, [filters, cars]);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Khushi's Car Rental Service</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        {/* Add more navigation items as needed */}
                    </ul>
                </div>
            </nav>

            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Availability:</label>
                    <select className="form-control" onChange={(e) => handleFilterChange('availability', e.target.value)}>
                        <option value="all">All</option>
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>Price:</label>
                    <select className="form-control" onChange={(e) => handleFilterChange('price', e.target.value)}>
                        <option value="all">All</option>
                        <option value="80">Less than ₹80</option>
                        <option value="110">Less than ₹110</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="col-md-4">
                    <label>Luxury:</label>
                    <select className="form-control" onChange={(e) => handleFilterChange('luxury', e.target.value)}>
                        <option value="all">All</option>
                        <option value="Standard">Standard</option>
                        <option value="Luxury">Luxury</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>

            <div className="container rounded-5 mt-4 p-3" style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="row">
                    {filteredCars.map(car => (
                        <div key={car.id} className="col-md-3 mt-3">
                            <div className="card">
                                <img src={car.imageUrl} alt={car.name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <section className='container rounded-3 p-2'>
                                        <h5 className="card-title">{car.name}</h5>
                                    </section>

                                    <p className="card-text">{car.availability} || {car.about}</p>
                                    <p className="card-text">Price: ₹{car.price}/Hour * Luxury: {car.luxury}</p>

                                    <p className="card-text">Rating: {car.rating}</p>
                                    <button className="btn btn-primary" onClick={() => alert(`Reserving car with Name: ${car.name}`)}>Reserve Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-4">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div className="">
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>


                </section>



                <section class="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <h3>
                                    Khushi's Car Rental Services
                                </h3>


                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Self Drive Cars In Bangalore</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Self Drive Cars In Hyderabad</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Self Drive Cars In Chennai</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Self Drive Cars In Noida</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Khushi Jukanti Hyderabad</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    khushicars@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91 900000000</p>
                                <p><i className="fas fa-print me-3"></i> +91 800000000</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: 'dark' }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">KhushiJukanti.com</a>
                </div>

            </footer>

        </div>
    );
};

export default CarCatalog;
