import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden select-none cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={beforeImage} 
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-foreground">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize group-hover:w-1.5 transition-all"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 4L17 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
