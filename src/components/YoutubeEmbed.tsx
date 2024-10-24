import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  opacity: number;
}

export function YoutubeEmbed({ videoId, opacity }: YoutubeEmbedProps) {
  return (
    <div className="relative w-full pt-[56.25%]" style={{ opacity }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}