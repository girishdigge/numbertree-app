'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from './logo';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

const services: { title: string; href: string }[] = [
  {
    title: 'Business Transformation',
    href: '/services/business-transformation',
  },
  {
    title: 'Claim Management',
    href: '/services/claim-management',
  },
  {
    title: 'Contract Administration',
    href: '/services/contract-administration',
  },
  {
    title: 'Project Monitoring & Control',
    href: '/services/project-monitoring-and-control',
  },
  {
    title: 'Quantity Survey',
    href: '/services/quantity-survey',
  },
  {
    title: 'Techno Commercial Audit',
    href: '/services/techno-commercial-audit',
  },
  {
    title: 'Transaction Advisory',
    href: '/services/transaction-advisory',
  },
];

const sectors: { title: string; href: string }[] = [
  {
    title: 'Aviation',
    href: '/sectors/aviation',
  },
  {
    title: 'Bridges Structures',
    href: '/sectors/bridges-structures',
  },
  {
    title: 'Commercial',
    href: '/sectors/commercial',
  },
  {
    title: 'Industrial',
    href: '/sectors/industrial',
  },
  {
    title: 'Institutional',
    href: '/sectors/institutional',
  },
  {
    title: 'Oil Gas',
    href: '/sectors/oil-gas',
  },
  {
    title: 'Ports',
    href: '/sectors/ports',
  },
  {
    title: 'Power Transmission',
    href: '/sectors/power-transmission',
  },
  {
    title: 'Railways Metro',
    href: '/sectors/railways-metro',
  },
  {
    title: 'Renewable Energy',
    href: '/sectors/renewable-energy',
  },
  {
    title: 'Residential',
    href: '/sectors/residential',
  },
  {
    title: 'Roads Highways',
    href: '/sectors/roads-highways',
  },
  {
    title: 'Thermal Power Plant',
    href: '/sectors/thermal-power-plant',
  },
  {
    title: 'Water Infrastructure',
    href: '/sectors/water-infrastructure',
  },
];

const projects: { title: string; href: string }[] = [
  {
    title: 'Featured Projects',
    href: '/projects',
  },
  {
    title: 'Latest Projects',
    href: '/projects',
  },
  {
    title: 'past-projects',
    href: '/projects',
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='hidden md:flex md:justify-center md:items-center md:space-x-3 md:z-2 mr-1'>
        {/* <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        {/* <Separator orientation='vertical' className='bg-pink-400 w-1 h-10' /> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/about`}>About Us</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <div className='grid grid-cols-3 gap-3 p-6 md:w-[400px] lg:w-[1000px] lg:grid-cols-[.75fr_1fr] '>
              <div className='row-span-4'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex w-full pl-2 pr-2 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/about'
                  >
                    <Logo />
                    <div className='mb-2 mt-4 text-2xl font-bold text-num-orange'>
                      About Us
                    </div>
                    {/* <p className='text-base leading-tight text-muted-foreground w-11/12'> */}
                    <p className='text-lg  font-medium '>
                      We are Infrastructure Experts
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
              <div className='flex flex-col'>
                <ListItem
                  href='/about/more-about-us'
                  title='About NumberTree'
                />
                <ListItem href='/about/values' title='Our Values' />
                <ListItem
                  href='/about/client-ethics'
                  title='Clients & Ethics'
                ></ListItem>
              </div>
              <div>
                <ListItem
                  href='/about/leadership-people'
                  title='Leadership & People'
                ></ListItem>
                <ListItem
                  href='/about/csr-esg'
                  title='ESG & Corporate Social Responsibility'
                ></ListItem>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/services`}> Services</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />

            <div className='flex'>
              <div className='flex flex-col w-1/3 items-center  bg-muted p-2 m-3 mt-6 rounded-lg'>
                <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-orange'>
                  Services
                </h1>
                <p className='text-lg  font-medium '>
                  Empowering decision making to transform businesses
                </p>
              </div>
              <ul className='grid grid-cols-3 w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1000px] '>
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  ></ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/sectors`}> Sectors</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <div className='flex'>
              <div className='flex flex-col w-1/3 items-center  bg-muted p-2 m-3 mt-6 rounded-lg'>
                <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-orange'>
                  Sectors
                </h1>
                <p className='text-lg  font-medium '>
                  Uplifting communities, improving access
                </p>
              </div>
              <ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-3 lg:w-[1000px] '>
                {sectors.map((sector) => (
                  <ListItem
                    key={sector.title}
                    title={sector.title}
                    href={sector.href}
                  ></ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/projects`}>Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <div className='flex'>
              <div className='flex flex-col w-1/2 items-center  bg-muted p-2 m-3 mt-6 rounded-lg'>
                <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-orange'>
                  Projects
                </h1>
                <p className='text-lg  font-medium '>
                  Taking projects from complexity to profitability
                </p>
              </div>
              <ul className='grid grid-cols-1 w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[1000px] '>
                {projects.map((project) => (
                  <ListItem
                    key={project.title}
                    title={project.title}
                    href={project.href}
                  ></ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/bim' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2 hover:cursor-pointer'>
                BIM
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/insights' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2 hover:cursor-pointer'>
                Insights
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/career' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2 hover:cursor-pointer'>
                Career
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/contact/proposal' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2 hover:cursor-pointer'>
                Contact us
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>

        {/* <Separator orientation='vertical' className='bg-pink-400 w-1 h-10' /> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-lg font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
