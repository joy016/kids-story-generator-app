'use client';

import { Textarea } from '@nextui-org/react';
import React from 'react';

function StorySubject({ userSelection }: any) {
  return (
    <div>
      <label className="text-primary text-3xl font-bold">
        1.Subject of the Story
      </label>
      <Textarea
        placeholder="Write the subject of the story which you want to generate"
        size="lg"
        className="mt-3 max-w-lg"
        classNames={{
          input: 'resize-y min-h-[230px] text-2xl p-4',
        }}
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: 'subjectStory',
          })
        }
      />
    </div>
  );
}

export default StorySubject;
