'use client';

import { useState } from 'react';
import StorySubject from './_components/StorySubject';
import StoryType from './_components/StoryType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';
import { Button } from '@nextui-org/button';
import { FieldData, FormDataType } from '@/types/types';
import { chatSession } from '@/config/GeminiAi';
import { db } from '@/config/db';
import { v4 as uuidv4 } from 'uuid';
import { storyData } from '@/config/schema';
import Loader from '../_component/Loader';
import {
  GENERATE_STORY_BTN_LABEL,
  HOME_HEADING_LABEL,
  STORY_LABEL_DESCRIPTION,
} from '@/constant/createStory';
import { useRouter } from 'next/navigation';

const AI_PROMPT = process.env.NEXT_PUBLIC_GENERATE_PROMPT;

function CreateStory() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>();
  const [loading, setIsLoading] = useState(false);

  const onHandleStoryInput = (data: FieldData) => {
    setFormData(
      (prev) =>
        ({
          ...prev,
          [data.fieldName]: data.fieldValue,
        } as FormDataType)
    );
  };

  const generateStory = async () => {
    setIsLoading(true);
    const finalPrompt = AI_PROMPT?.replace(
      '{storySubject}',
      formData?.storySubject ?? ''
    )
      .replace('{storyType}', formData?.storyType ?? '')
      .replace('{ageGroup}', formData?.ageGroup ?? '')
      .replace('{imageStyle}', formData?.imageStyle ?? '');
    try {
      const result = await chatSession.sendMessage(finalPrompt);
      saveToDb(result?.response.text());
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const saveToDb = async (output: string) => {
    const storyId = uuidv4();
    try {
      setIsLoading(true);
      const result = await db
        .insert(storyData)
        .values({
          storyId: storyId,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          output: JSON.parse(output),
        })
        .returning({ id: storyData?.storyId });

      router.push(`/view-story/${result[0].id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="text-7xl font-extrabold text-center text-primary">
        {HOME_HEADING_LABEL}
      </h2>
      <p className="text-center text-primary text-2xl">
        {STORY_LABEL_DESCRIPTION}
      </p>
      <div className="grid grid-cols-2 mt-5 gap-3">
        <StorySubject userSelection={onHandleStoryInput} />

        <StoryType userSelection={onHandleStoryInput} />

        <AgeGroup userSelection={onHandleStoryInput} />

        <ImageStyle userSelection={onHandleStoryInput} />
      </div>
      <div className="flex justify-end my-10">
        <Button
          color="primary"
          className="text-2xl p-10"
          onClick={generateStory}
          disabled={loading}
        >
          {GENERATE_STORY_BTN_LABEL}
        </Button>
      </div>
      <Loader loading={loading} />
    </div>
  );
}

export default CreateStory;
