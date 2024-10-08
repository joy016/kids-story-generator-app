'use client';

import {
  EXPLORE_STORIES_LOADING_MESSAGE,
  EXPLORE_STORY_HEADER,
} from '@/constant/exploreStory';
import CardStory from './_component/CardStory';
import { useEffect, useState } from 'react';
import { db } from '@/config/db';
import { storyData } from '@/config/schema';
import { ExploreStories, StoryOutput } from '@/types/types';
import { Button } from '@nextui-org/button';
import Loader from '../_component/Loader';

function ExploreStory() {
  const [stories, SetStories] = useState<ExploreStories[]>([]);
  const [offSet, setOffSet] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStories(offSet);
  }, [offSet]);

  const getStories = async (offSet: number) => {
    setLoading(true);
    setOffSet(offSet);
    const result = await db
      .select({
        storyId: storyData.storyId,
        output: storyData.output,
      })
      .from(storyData)
      .orderBy(storyData.id)
      .limit(8);

    const typedResult: ExploreStories[] = result.map((item) => ({
      storyId: item.storyId ?? '',
      output: item.output as StoryOutput,
    }));
    setLoading(false);
    SetStories(typedResult);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl text-primary text-center p-10 font-bold">
        {EXPLORE_STORY_HEADER}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 px-[2em] lg:px-[5em] py-[2em]">
        {stories.map((story) => (
          <CardStory storyData={story} key={story.storyId} />
        ))}
      </div>
      <div className="text-center">
        <Button color="primary" onClick={() => getStories(offSet + 8)}>
          Load more stories
        </Button>
      </div>
      <Loader
        loading={loading}
        loadingMessage={EXPLORE_STORIES_LOADING_MESSAGE}
      />
    </div>
  );
}

export default ExploreStory;
