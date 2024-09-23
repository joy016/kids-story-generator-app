'use client';

import React from 'react';
import StorySubject from './_components/StorySubject';
import StoryType from './_components/StoryType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';
import { Button } from '@nextui-org/button';

interface fieldData {
  fieldValue: string;
  fieldName: string;
}

function CreateStory() {
  const onHandleStoryInput = (data: fieldData) => {
    console.log(data);
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="text-7xl font-extrabold text-center text-primary">
        CREATE YOUR STORY
      </h2>
      <p className="text-center text-primary text-2xl">
        Unlock your creativity with AI: Craft stories like never before!Let our
        AI bring your imagination to life, one story at a time.
      </p>
      <div className="grid grid-cols-2 mt-5 gap-3">
        <StorySubject userSelection={onHandleStoryInput} />

        <StoryType userSelection={onHandleStoryInput} />

        <AgeGroup userSelection={onHandleStoryInput} />

        <ImageStyle userSelection={onHandleStoryInput} />
      </div>
      <div className="flex justify-end my-10">
        <Button color="primary" className="text-2xl p-10">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
