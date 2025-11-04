import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const rooms = [
  { id: 1, name: "Modern Living Room", image: hero1, description: "Spacious living room with contemporary furniture and natural lighting" },
  { id: 2, name: "Elegant Dining Room", image: hero2, description: "Sophisticated dining space perfect for family gatherings" },
  { id: 3, name: "Cozy Bedroom", image: hero3, description: "Relaxing bedroom with premium bedding and warm ambiance" },
];

const Virtual = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1));
  };

  const handleReset = () => {
    setZoom(1);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-center mb-4">Virtual Room</h1>
          <p className="text-xl text-center opacity-90">
            Explore our furniture in interactive virtual spaces
          </p>
        </div>
      </section>

      {/* Virtual Room Viewer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Room Selection Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="font-serif text-2xl font-bold mb-4">Select Room</h2>
              {rooms.map((room) => (
                <Card
                  key={room.id}
                  className={`cursor-pointer transition-all ${
                    selectedRoom.id === room.id
                      ? "ring-2 ring-primary shadow-hover"
                      : "hover:shadow-card"
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <CardContent className="p-4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-semibold">{room.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Viewer */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden shadow-card">
                <CardContent className="p-0">
                  <div className="relative h-[600px] bg-muted overflow-hidden">
                    <div
                      className="w-full h-full transition-transform duration-300"
                      style={{ transform: `scale(${zoom})` }}
                    >
                      <img
                        src={selectedRoom.image}
                        alt={selectedRoom.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomIn}
                        disabled={zoom >= 2}
                      >
                        +
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomOut}
                        disabled={zoom <= 1}
                      >
                        -
                      </Button>
                      <Button variant="secondary" size="icon" onClick={handleReset}>
                        ⟲
                      </Button>
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
                      <h2 className="text-background font-serif text-3xl font-bold mb-2">
                        {selectedRoom.name}
                      </h2>
                      <p className="text-background/90">{selectedRoom.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">How to explore:</h3>
                <ul className="text-sm text-foreground/80 space-y-1">
                  <li>• Use the + and - buttons to zoom in and out</li>
                  <li>• Click the reset button to return to original view</li>
                  <li>• Select different rooms from the sidebar to explore more spaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Virtual;
