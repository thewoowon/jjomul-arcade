import { useEffect, useRef } from "react";

const Noise = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255;
        imageData.data[i] = noise; // Red
        imageData.data[i + 1] = noise; // Green
        imageData.data[i + 2] = noise; // Blue
        imageData.data[i + 3] = 255; // Alpha (opaque)
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const updateNoise = () => {
      generateNoise();
      requestAnimationFrame(updateNoise);
    };

    updateNoise();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ backgroundColor: "black", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Noise;
