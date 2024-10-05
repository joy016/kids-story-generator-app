'use client';

import { storyTypeOptions } from '@/constant/option';
import { FieldData, OptionTypes } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';

function StoryType({
  userSelection,
}: {
  userSelection: (data: FieldData) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleStoryTypeSelection = (item: OptionTypes) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: 'storyType',
    });
  };
  return (
    <div>
      <label className="text-primary text-3xl font-bold">2.Story Type</label>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {storyTypeOptions.map((item, index) => (
          <div
            key={index}
            className={`relative p-1 ${
              selectedOption === item.label
                ? 'grayscale-0 border-2 rounded-3xl border-primary'
                : 'grayscale'
            }  hover:grayscale-0 cursor-pointer`}
            onClick={() => handleStoryTypeSelection(item)}
          >
            <h2 className="absolute bottom-5 text-2xl text-white text-center w-full">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              width={400}
              height={700}
              alt={item.label}
              className="object-cover rounded-3xl h-[260px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryType;
