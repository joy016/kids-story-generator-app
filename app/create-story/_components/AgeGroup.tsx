'use client';

import { AGE_GROUP_HEADING_LABEL } from '@/constant/createStory';
import { ageGroupOptions } from '@/constant/option';
import { FieldData, OptionTypes } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';

function AgeGroup({
  userSelection,
}: {
  userSelection: (data: FieldData) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleAgeGroupSelection = (item: OptionTypes) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: 'ageGroup',
    });
  };

  return (
    <div>
      <label className="text-primary text-3xl font-bold">
        {AGE_GROUP_HEADING_LABEL}
      </label>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {ageGroupOptions.map((item, index) => (
          <div
            key={index}
            className={`relative p-1 ${
              selectedOption === item.label
                ? 'grayscale-0 border-2 rounded-3xl border-primary'
                : 'grayscale'
            }  hover:grayscale-0 cursor-pointer`}
            onClick={() => handleAgeGroupSelection(item)}
          >
            <h2 className="absolute bottom-5 text-2xl text-white text-center w-full">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              width={300}
              height={500}
              alt={item.label}
              className="object-cover rounded-3xl h-[260px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroup;
