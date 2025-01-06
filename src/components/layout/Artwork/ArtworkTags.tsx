import React from 'react';

const ArtworkTags = ({ tools }: { tools: string[] }) => {
  return (
    <div className="col-span-3 col-start-1 flex flex-wrap justify-start text-xs gap-1 text-paper-light">
      {tools.map((tool: string) => (
        <div className="bg-accents-regular text-paper-light box-border   whitespace-pre px-1 py-0.5">
          {tool}
        </div>
      ))}
    </div>
  );
};

export default ArtworkTags;
