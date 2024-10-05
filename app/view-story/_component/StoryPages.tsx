import { StoryChapterType } from '@/types/types';

function StoryPages({ storyChapter }: { storyChapter: StoryChapterType }) {
  return (
    <div>
      <div>
        <h2 className="text-2xl fontbold text-primary flex justify-between">
          {storyChapter?.chapter_title}
        </h2>
        <p className="text-lg p-10 mt-3 rounded-lg bg-slate-100 line-clamp-[10]">
          {storyChapter?.description}
        </p>
      </div>
    </div>
  );
}

export default StoryPages;
