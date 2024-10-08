'use client';

import { READ_NOW_BUTTON } from '@/constant/exploreStory';
import { StoryCard } from '@/types/types';
import { Card, CardFooter, Button } from '@nextui-org/react';
import Link from 'next/link';

export default function CardStory({
  storyData,
  key,
}: {
  storyData: StoryCard;
  key: string;
}) {
  return (
    <Card
      key={key}
      isFooterBlurred
      radius="lg"
      className="border-none bg-primary hover:scale-105 transition-all cursor-pointer"
    >
      <div className="h-[300px] flex justify-center items-center">
        <h2 className="font-bold text-3xl text-center">
          {storyData.output.story_name}
        </h2>
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-lg text-black">{storyData.output.story_name}</p>
        <Link href={`/view-story/${storyData.storyId}`}>
          <Button color="primary" radius="full">
            {READ_NOW_BUTTON}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
