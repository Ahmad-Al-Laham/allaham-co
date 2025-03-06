import React, { useState, useCallback, useEffect } from "react";

const LocationPicker = ({
  label,
  onSelect,
  maxResults = 5,
  placeholder,
  icon,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  // Debounce function to delay API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchLocations = useCallback(
    debounce(async (searchText) => {
      if (searchText.length < 2) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
            searchText
          )}`
        );
        const data = await response.json();
        setResults(data.slice(0, maxResults)); // Limit results
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
      setLoading(false);
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchLocations(value);
  };

  const formatLocation = (location) => {
    const { address } = location;
    if (!address) return location.display_name;
    return `${
      address.city || address.town || address.village || address.county || ""
    }, ${address.country}`;
  };

  const handleSelect = (location) => {
    const formattedLocation = {
      name: formatLocation(location),
      lat: location.lat,
      lon: location.lon,
    };

    setQuery(formattedLocation.name);
    setResults([]);

    // Store in recent searches (remove duplicates)
    setRecentSearches((prev) => {
      const filtered = prev.filter(
        (item) => item.name !== formattedLocation.name
      );
      return [formattedLocation, ...filtered].slice(0, 5); // Keep only last 5
    });

    onSelect(formattedLocation);
  };

  return (
    <div className="relative w-full text-black">
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <div>
        {icon}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="border px-2 py-1 h-[50px] w-full rounded-xl focus:outline-none placeholder:text-black"
        />
      </div>

      {/* {loading && <p className="text-gray-500 text-sm mt-1">Searching...</p>} */}

      {/* Recent Searches */}
      {query.length === 0 && recentSearches.length > 0 && (
        <ul className="absolute w-full bg-white border rounded-lg shadow-lg mt-1 z-10">
          <p className="text-gray-500 text-xs px-2 py-1">Recent Searches</p>
          {recentSearches.map((location, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(location)}
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}

      {/* Search Results */}
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border rounded-lg shadow-lg mt-1 z-10">
          {results.map((location) => (
            <li
              key={location.place_id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(location)}
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default LocationPicker;
//   const [selectedLocation, setSelectedLocation] = useState(null);

//  <LocationPicker
//             // label="Enter a Location"
//             onSelect={setSelectedLocation}
//           />
//           {selectedLocation && (
//             <div className="mt-4 text-sm text-gray-700">
//               <strong>Selected Location:</strong> {selectedLocation.name}
//               <br />
//               <strong>Coordinates:</strong> {selectedLocation.lat},{" "}
//               {selectedLocation.lon}
//             </div>
//           )}
