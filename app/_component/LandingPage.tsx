'use client';

import {
  CREATE_STORY_BTN_LABEL,
  DESCRIPTION_LABEL,
  HEADING_LABEL,
} from '@/constant/home';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LandingPage() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[4.3rem] font-extrabold text-primary py-10">
            {HEADING_LABEL}
          </h2>
          <p className="text-2xl text-primary font-light">
            {DESCRIPTION_LABEL}
          </p>
          <Link href="/create-story">
            <Button color="primary" className="font-bold text-2xl p-8 mt-5">
              {CREATE_STORY_BTN_LABEL}
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src={'/hero.png'}
            alt="This is a picture for landing page"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
