"use client";
import { useState, useEffect } from "react";
import StarryNightStyles from "./starrynight.module.css";

export default function StarryNight() {
  const [starSystem, setStarSystem] = useState([]);

  useEffect(() => {
    const generateStarSystem = () => {
      const stars = [];

      for (let i = 0; i < 400; i++) {
        const newStar = {
          size: (Math.random() * 2).toFixed(3),
          opacity: (Math.random() * 1).toFixed(1),
          glow: (Math.random() * 5).toFixed(0),
          lifeSpan: (Math.random() * 3 + 2).toFixed(2),
          positionX: (Math.random() * 100).toFixed(2),
          positionY: (Math.random() * 100).toFixed(2),
        };
        stars.push(newStar);
      }

      return stars;
    };

    setStarSystem(generateStarSystem());
  }, []);

  return (
    <div className={StarryNightStyles.sky}>
      {starSystem.map((star, index) => (
        <div
          key={index}
          className={StarryNightStyles.star}
          style={{
            width: `${star.size}px`,
            left: `${star.positionX}%`,
            top: `${star.positionY}%`,
            boxShadow: `0px 0px ${Math.random() * 10}px ${
              star.glow
            }px rgba(0, 195, 255, 0.136)`,
            animationDuration: `${star.lifeSpan}s`
          }}
        />
      ))}
    </div>
  );
}
