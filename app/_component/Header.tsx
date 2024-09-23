'use client';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { currentUser } from '@clerk/nextjs/server';
import { useRouter } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

function Header() {
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    {
      menu: 'Home',
      link: '/',
    },
    {
      menu: 'Create Story',
      link: '/create-story',
    },
    {
      menu: 'Explore Stories',
      link: '/explore',
    },
    {
      menu: 'Contact Us',
      link: '/contact',
    },
  ];
  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={'/logo.svg'} alt="logo" width={40} height={40} />
          <h2 className="ml-3 font-bold text-2xl text-primary">
            Kids Story Generator
          </h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-3" justify="center">
        {menuItem.map((item, index) => (
          <NavbarItem
            key={index}
            className="font-medium text-xl text-primary hover:underline"
          >
            <Link href={item.link}>{item.menu}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <UserButton />
        <Button color="primary">
          {isSignedIn ? 'Dashboard' : 'Get started'}
        </Button>
      </NavbarContent>
      <NavbarMenu>
        {menuItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItem.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={item.link}
              className='w-full ize="lg"'
            >
              {item.menu}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
