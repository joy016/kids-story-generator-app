'use client';

import { db } from '@/config/db';
import { storyData } from '@/config/schema';
import { eq } from 'drizzle-orm';
import { useEffect, useState } from 'react';

import BookCover from '../_component/BookCover';
import StoryPages from '../_component/StoryPages';
import { StoryDetails } from '@/types/types';

import HTMLFlipBook from 'react-pageflip';

function ViewStory({ params }: { params: { id: string } }) {
  const [storyDetails, setStoryDetails] = useState<StoryDetails | null>(null);

  useEffect(() => {
    const getStory = async () => {
      const result = await db
        .select()
        .from(storyData)
        .where(eq(storyData.storyId, params.id));
      setStoryDetails(result[0] as StoryDetails);
    };

    getStory();
  }, [params.id]);

  console.log('storyDetails', storyDetails);
  return (
    <div className="p-20 md:px-20 lg:px-40 flex justify-center flex-col">
      <h2 className="bg-primary p-10 text-4xl font-extrabold text-white text-center">
        {storyDetails!.output.story_name}
      </h2>

      <HTMLFlipBook width={500} height={500} showCover={true} className="mt-10">
        <div>
          <BookCover storyTitle={storyDetails!.output.story_name!} />
        </div>
        {[...Array(storyDetails!.output.chapters.length)].map((item, index) => (
          <div key={index} className="bg-white p-10 h-[500px] border">
            <StoryPages storyChapter={storyDetails!.output.chapters[index]!} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default ViewStory;
