'use client';

import { FieldData } from '@/types/types';
import { Textarea } from '@nextui-org/react';

function StorySubject({
  userSelection,
}: {
  userSelection: (data: FieldData) => void;
}) {
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
            fieldName: 'storySubject',
          })
        }
      />
    </div>
  );
}

export default StorySubject;
