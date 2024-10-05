'use client';

import { imageStyleOptions } from '@/constant/option';
import { useState } from 'react';
import Image from 'next/image';
import { FieldData, OptionTypes } from '@/types/types';

function ImageStyle({
  userSelection,
}: {
  userSelection: (data: FieldData) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleGroupTypeSelection = (item: OptionTypes) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: 'imageStyle',
    });
  };
  return (
    <div>
      <label className="text-primary text-3xl font-bold">1.Image Style</label>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {imageStyleOptions.map((item, index) => (
          <div
            key={index}
            className={`relative p-1 ${
              selectedOption === item.label
                ? 'grayscale-0 border-2 rounded-3xl border-primary'
                : 'grayscale'
            }  hover:grayscale-0 cursor-pointer`}
            onClick={() => handleGroupTypeSelection(item)}
          >
            <h2 className="absolute bottom-5 text-2xl text-white text-center w-full">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              width={300}
              height={500}
              alt={item.label}
              className="object-cover rounded-3xl h-[190px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageStyle;
