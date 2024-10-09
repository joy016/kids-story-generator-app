'use client';

import { StoryChapterType } from '@/types/types';
import { useState } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

function StoryPages({ storyChapter }: { storyChapter: StoryChapterType }) {
  const [isPaused, setIsPause] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSpeak = (text: string) => {
    const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
      text
    );

    utterance.onend = () => {
      setStatus('idle');
      setIsPause(false);
    };

    setTimeout(() => {
      if (status === 'idle') {
        setIsPause(true);
        setStatus('play');

        speechSynthesis.speak(utterance);
        return;
      } else {
        setStatus('play');
        handleResume();
        return;
      }
    }, 1000);
  };

  const handlePause = () => {
    setStatus('pause');
    setIsPause(false);
    speechSynthesis.pause();
  };

  const handleResume = () => {
    setIsPause(true);
    speechSynthesis.resume();
  };

  const handleCancel = () => {
    setIsPause(false);
    window.speechSynthesis.cancel();
  };
  

  return (
    <div>
      <div>
        <h2 className="text-2xl fontbold text-primary flex justify-between">
          {storyChapter?.chapter_title}
          <span className="flex gap-2">
            {isPaused ? (
              <FaPause onClick={handlePause} />
            ) : (
              <FaPlay onClick={() => handleSpeak(storyChapter.description)} />
            )}

            <FaStop onClick={handleCancel} />
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
