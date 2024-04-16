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
    title: 'Techno-Commercial Audit',
    href: '/services/techno-commercial-audit',
  },
  {
    title: 'Contract Administration & Bill Verification',
    href: '/services/contract-administration',
  },
  {
    title: 'Project Management Consultancy',
    href: '/services/project-monitoring-and-control',
  },
  {
    title: 'Quantity Survey & Cost Control',
    href: '/services/quantity-survey',
  },
  {
    title: 'Construction Claim Management',
    href: '/services/claim-management',
  },

  {
    title: 'Business Transformation',
    href: '/services/business-transformation',
  },

  {
    title: 'Transaction Advisory',
    href: '/services/transaction-advisory',
  },
];

const sectors: { title: string; href: string }[] = [
  {
    title: 'Airports & Aviation',
    href: '/sectors/aviation',
  },
  // {
  //   title: 'Bridges Structures',
  //   href: '/sectors/bridges-structures',
  // },
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
    title: 'Oil & Gas',
    href: '/sectors/oil-gas',
  },
  {
    title: 'Ports & Maritime',
    href: '/sectors/ports',
  },
  {
    title: 'Power & Transmission',
    href: '/sectors/power-transmission',
  },
  {
    title: 'Railways & Metro',
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
    title: 'Roads & Highways',
    href: '/sectors/roads-highways',
  },
  // {
  //   title: 'Thermal Power Plant',
  //   href: '/sectors/thermal-power-plant',
  // },
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
    title: 'Other projects',
    href: '/projects',
  },
];
const careers: { title: string; href: string }[] = [
  {
    title: 'Jobs',
    href: '/career/jobs',
  },
  {
    title: 'Life at numbertree',
    href: '/career/life-at-numbertree',
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='hidden md:flex md:justify-center md:items-center md:space-x-3 md:z-2 mr-1'>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-2 py-2 hover:cursor-pointer'>
                Home
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        {/* <Separator orientation='vertical' className='bg-pink-400 w-1 h-10' /> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/about`}>About Us</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <hr className='border border-num-orange animated-hr' />
            <ul className='grid grid-cols-3 gap-3 p-6 md:w-[400px] lg:w-[1200px] lg:grid-cols-[.75fr_1fr] '>
              <li className='row-span-4 '>
                <NavigationMenuLink asChild>
                  <a
                    className='flex w-full pl-2 pr-2 select-none flex-col justify-end rounded-md border-r-2 rounded-r-none border-num-orange bg-gradient-to-b from-muted/50 to-muted p-6  no-underline outline-none focus:shadow-md'
                    href='/about'
                  >
                    {/* <Logo /> */}
                    <div className='mb-2 mt-4 text-2xl font-bold  text-num-indigo animate-fadeLeftTitle'>
                      About Us
                    </div>
                    {/* <p className='text-base leading-tight text-muted-foreground w-11/12'> */}
                    <p className='text-xl w-3/5 font-semibold mb-6  animate-fadeLeft pb-4'>
                      We are Infrastructure Experts
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className='flex gap-6'>
                <div className=' border-r-2 border-num-orange pr-12 pl-2'>
                  <ListItem href='/about' title='Our Vision' />
                  <ListItem href='/about' title='Our Mission' />
                  <ListItem href='/about' title='Our Approach' />

                  <ListItem href='/about/values' title='Our Values' />
                </div>
                <div>
                  <div className='border-r-2 border-num-orange pl-2 pr-12'>
                    <ListItem
                      href='/about/client-ethics'
                      title='Our Ethics'
                    ></ListItem>
                    <ListItem href='/about' title='Our Purpose'></ListItem>
                    <ListItem
                      href='/about/leadership-people'
                      title='Our People'
                    ></ListItem>
                  </div>
                </div>
                <div>
                  <div className='pl-2'>
                    <ListItem
                      href='/about/leadership-people'
                      title='Our Leadership'
                    ></ListItem>
                    <ListItem
                      href='/about/client-ethics'
                      title='Our Clients'
                    ></ListItem>
                    {/* <ListItem
                      href='/about/csr-esg'
                      title='ESG & CSR'
                    ></ListItem> */}
                    {/* <ListItem
                    href='/about/more-about-us'
                    title='About Numbertree'
                  /> */}
                  </div>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/services`}>Services</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <hr className='border border-num-orange animated-hr' />
            <ul className='grid grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[1200px] lg:grid-cols-[1fr] '>
              <li className=' flex'>
                <div className='border-r-2 border-num-orange'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex w-full pl-2 pr-2 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pb-10 no-underline outline-none focus:shadow-md'
                      href='/services'
                    >
                      <div className='mb-2 mt-4 text-2xl font-bold  text-num-indigo animate-fadeLeftTitle'>
                        Services
                      </div>
                      {/* <p className='text-base leading-tight text-muted-foreground w-11/12'> */}
                      <p className='text-xl w-3/5 font-semibold  animate-fadeLeft'>
                        Empowering decision making to transform businesses
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
                <div className='flex gap-6'>
                  <div>
                    <div className=' border-r-2 border-num-orange pr-8'>
                      <ListItem
                        title='Techno-Commercial Audit'
                        href='/services/techno-commercial-audit'
                      />
                      <ListItem
                        title='Contract Administration & Bill Verification'
                        href='/services/contract-administration'
                      />
                      <ListItem
                        title='Project Management Consultancy'
                        href='/services/project-monitoring-and-control'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='border-r-2 border-num-orange pr-8'>
                      <ListItem
                        title='Quantity Survey & Cost Control'
                        href='/services/quantity-survey'
                      />
                      <ListItem
                        title='Construction Claim Management'
                        href='/services/claim-management'
                      />
                    </div>
                  </div>
                  <div>
                    <div className=''>
                      <ListItem
                        title='Business Transformation'
                        href='/services/business-transformation'
                      />
                      <ListItem
                        title='Transaction Advisory'
                        href='/services/transaction-advisory'
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/sectors`}>Sectors</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <hr className='border border-num-orange animated-hr' />
            <ul className='grid grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[1200px] lg:grid-cols-[1fr] '>
              <li className=' flex'>
                <div className='border-r-2 border-num-orange'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex w-full pl-2 pr-2 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pb-28 no-underline outline-none focus:shadow-md'
                      href='/sectors'
                    >
                      <div className='mb-2 mt-4 text-2xl font-bold  text-num-indigo animate-fadeLeftTitle'>
                        Sectors
                      </div>
                      {/* <p className='text-base leading-tight text-muted-foreground w-11/12'> */}
                      <p className='text-xl w-3/5 font-semibold  animate-fadeLeft'>
                        Uplifting communities, improving access
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
                <div className='flex gap-6'>
                  <div>
                    <div className=' border-r-2 border-num-orange pr-12'>
                      <h1 className='font-bold text-xl ml-2'>
                        Urban Infrastructure
                      </h1>
                      <ListItem title='Commercial' href='/sectors/commercial' />
                      <ListItem title='Industrial' href='/sectors/industrial' />
                      <ListItem
                        title='Institutional'
                        href='/sectors/institutional'
                      />
                      <ListItem
                        title='Residential'
                        href='/sectors/residential'
                      />
                      <ListItem
                        title='Water Infrastructure'
                        href='/sectors/water-infrastructure'
                      />
                      {/* <ListItem
                      title='Bridges Structures'
                      href='/sectors/bridges-structures'
                    /> */}
                    </div>
                  </div>
                  <div>
                    <div className='border-r-2 border-num-orange pr-12'>
                      <h1 className='font-bold text-xl ml-2'>Transportation</h1>

                      <ListItem
                        title='Roads & Highways'
                        href='/sectors/roads-highways'
                      />
                      <ListItem
                        title='Railways & Metro'
                        href='/sectors/railways-metro'
                      />
                      <ListItem
                        title='Airports & Aviation'
                        href='/sectors/aviation'
                      />
                      <ListItem
                        title='Ports & Maritime'
                        href='/sectors/ports'
                      />
                    </div>
                  </div>
                  <div>
                    <div className=''>
                      <h1 className='font-bold text-xl ml-2'>Energy</h1>

                      <ListItem title='Oil & Gas' href='/sectors/oil-gas' />
                      <ListItem
                        title='Power & Transmission'
                        href='/sectors/power-transmission'
                      />
                      <ListItem
                        title='Renewable Energy'
                        href='/sectors/renewable-energy'
                      />
                      {/* <ListItem
                        title='Thermal Power Plant'
                        href='/sectors/thermal-power-plant'
                      /> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className='flex'>
            <Link href={`/services`}> Services</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <div className='flex'>
              <div className='flex flex-col w-1/3 items-center  bg-muted p-2 m-3 mt-6 rounded-r-none rounded-lg border-r-2 border-num-orange pr-8'>
                <Link href={`/services`}>
                  <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-indigo animate-fadeLeftTitle'>
                    Services
                  </h1>
                  <p className='text-lg w-3/4  font-medium animate-fadeLeft'>
                    Empowering decision making to transform businesses
                  </p>
                </Link>
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
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/projects`}>Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <hr className='border  border-num-orange animated-hr' />
            <div className='flex'>
              <div className='flex flex-col w-1/2 items-center  bg-muted p-2 m-3 mt-6 rounded-lg rounded-r-none border-r-2 border-num-orange'>
                <Link href={`/projects`}>
                  <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-indigo animate-fadeLeftTitle'>
                    Projects
                  </h1>
                </Link>
                <p className='text-lg  font-medium animate-fadeLeft pb-2 w-3/4'>
                  Taking projects from complexity to profitability
                </p>
              </div>
              <ul className='grid grid-cols-1 w-[400px] gap-3 p-6 md:w-[500px]  lg:w-[1000px] '>
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
            <div className=''>
              <NavigationMenuLink className=' text-sm font-medium px-4 py-2 hover:cursor-pointer'>
                <Image height={50} width={85} src={'/logo/bim.png'} alt='bim' />
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/career`}>Career</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <hr className='border-2 border-num-orange animated-hr' />
            <hr className='border border-num-orange animated-hr' />
            <div className='flex'>
              <div className='flex flex-col w-1/2 items-center pb-2 bg-muted p-2 m-3 mt-6 rounded-lg rounded-r-none border-r-2 border-num-orange'>
                <Link href={`/career`}>
                  <h1 className=' mt-6 text-2xl font-bold mb-6 text-num-indigo animate-fadeLeftTitle'>
                    Career
                  </h1>
                </Link>
                <p className='text-lg  font-medium animate-fadeLeft  w-3/4'>
                  We promise growth, inclusion and diversity
                </p>
              </div>
              <ul className='grid grid-cols-1 w-[400px] gap-3 p-10 md:w-[500px]  lg:w-[1000px] '>
                {careers.map((career) => (
                  <ListItem
                    key={career.title}
                    title={career.title}
                    href={career.href}
                  ></ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
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
          <div className='text-base font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
