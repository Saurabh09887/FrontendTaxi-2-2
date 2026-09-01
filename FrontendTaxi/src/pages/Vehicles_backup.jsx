import { useState, useEffect } from "react";
import Api from "../api/Api"; // Your axios instance

const Vehicles = ({ embedded = false }) => {
  const [taxis, setTaxis] = useState([]); // Empty initially
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [daysMap, setDaysMap] = useState({});

  // Fetch taxis from API
  useEffect(() => {
    const fetchTaxis = async () => {
      try {
        const response = await Api.get("/taxi");
        console.log("Taxis API Response:", response.data);
        
        if (response.data.success) {
          const fetchedTaxis = response.data.taxis.map(taxi => ({
            ...taxi,
            // Construct full image URL
            image: taxi.image 
              ? `http://localhost:3000/uploads/${taxi.image}` 
              : fallbackVehicleImage,
            // Add default imagePosition if not present
            imagePosition: taxi.imagePosition || "center 50%"
          }));
          
          setTaxis(fetchedTaxis);
          
          // Initialize daysMap
          const initialDays = Object.fromEntries(
            fetchedTaxis.map((t) => [t.name, 1])
          );
          setDaysMap(initialDays);
        }
      } catch (error) {
        console.error("Error fetching taxis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaxis();
  }, []);

  // Rest of your code remains same...
  
  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {/* ... */}
      
      {loading ? (
        <div className="text-center py-20">Loading taxis...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {taxis.map((v, index) => {
            // Use index as key if names are duplicate
            const key = `${v.name}-${index}`;
            const days = daysMap[v.name] || 1;
            const total = v.pricePerDay * days;
            
            return (
              <div key={key}> {/* Fixed duplicate key issue */}
                {/* Rest of your taxi card code */}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

