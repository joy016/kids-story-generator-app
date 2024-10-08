import { StoryChapterType } from '@/types/types';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

function StoryPages({ storyChapter }: { storyChapter: StoryChapterType }) {
  const handleSpeak = (text: string) => {
    const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
      text
    );
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl fontbold text-primary flex justify-between">
          {storyChapter?.chapter_title}
          <span>
            <FaPlay onClick={() => handleSpeak(storyChapter.description)} />
            <FaPause />
            <FaStop />
          </span>
        </h2>
        <p className="text-lg p-10 mt-3 rounded-lg bg-slate-100 line-clamp-[10]">
          {storyChapter?.description}
        </p>
      </div>
    </div>
  );
}

export default StoryPages;
