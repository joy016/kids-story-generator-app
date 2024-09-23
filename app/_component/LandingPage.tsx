'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function LandingPage() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[4.3rem] font-extrabold text-primary py-10">
            Craft Magical Stories for Kids in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun and personalised stories that bring your child's
            adventures to life and spark their passion for reading. It only
            takes a few seconds!
          </p>
          <Link href="/create-story">
            <Button color="primary" className="font-bold text-2xl p-8 mt-5">
              Create Story
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
