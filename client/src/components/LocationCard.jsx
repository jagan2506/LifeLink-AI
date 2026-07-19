import { useEffect, useState } from "react";
import { MapPinned } from "lucide-react";
import "../styles/cards.css";

function LocationCard() {
  const [location, setLocation] = useState({
    latitude: "Detecting...",
    longitude: "Detecting...",
    address: "Waiting for GPS...",
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: "-",
        longitude: "-",
        address: "Geolocation not supported",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
          address: "Current GPS Location",
        });
      },
      () => {
        setLocation({
          latitude: "-",
          longitude: "-",
          address: "Location permission denied",
        });
      }
    );
  }, []);

  return (
    <div className="info-card">
      <div className="card-header">
        <MapPinned size={24} />
        <h3>Current Location</h3>
      </div>

      <p><strong>Latitude:</strong> {location.latitude}</p>
      <p><strong>Longitude:</strong> {location.longitude}</p>
      <p>{location.address}</p>
    </div>
  );
}

export default LocationCard;