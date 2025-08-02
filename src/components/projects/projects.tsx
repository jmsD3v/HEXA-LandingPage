'use client';
import { useState } from 'react';
import { Project } from '@/data/project';
import Description from './description';
import { Icon } from '@iconify/react/dist/iconify.js';
import { technologies } from '@/data/technologies';
import Modal from '../ui/modal';
import H2 from '../ui/h2';
import Image from 'next/image';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = Project.filter((item) =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className='container'>
      <div className='flex flex-col justify-center items-center'>
        <H2 text='Projects' />
        <ul className='flex gap-5 text-neutral-200' data-aos='fade-up'>
          <li
            onClick={() => setFilter('all')}
            className={`cursor-pointer ${
              filter === 'all' ? 'text-purple-600' : ''
            }`}
          >
            All
          </li>
          <li
            onClick={() => setFilter('web')}
            className={`sm:hidden cursor-pointer ${
              filter === 'web' ? 'text-purple-600' : ''
            }`}
          >
            Web
          </li>
          <li
            onClick={() => setFilter('web')}
            className={`max-sm:hidden cursor-pointer ${
              filter === 'web' ? 'text-purple-600' : ''
            }`}
          >
            Web Applications
          </li>
          <li
            onClick={() => setFilter('mobile')}
            className={`sm:hidden cursor-pointer ${
              filter === 'mobile' ? 'text-purple-600' : ''
            }`}
          >
            Mobile
          </li>
          <li
            onClick={() => setFilter('mobile')}
            className={`max-sm:hidden cursor-pointer ${
              filter === 'mobile' ? 'text-purple-600' : ''
            }`}
          >
            Mobile Applications
          </li>
          <li
            onClick={() => setFilter('api')}
            className={`max-sm:hidden cursor-pointer ${
              filter === 'api' ? 'text-purple-600' : ''
            }`}
          >
            APIs / Backends
          </li>
        </ul>
      </div>

      <div
        className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 p-4 sm:p-6 md:p-8 lg:p-10'
        data-aos='fade-up'
      >
        {filteredProjects.reverse().map((item) => {
          const badges = technologies.filter((tec) =>
            item.project_technologies?.includes(tec.name)
          );

          return (
            <Modal
              key={item.id}
              projectName={item.name}
              projectImage={item.image}
              linkDeploy={item.deploy}
              linkGitHub={item.github}
              projectType={item.type}
              projectTechnologies={badges.map((badge, i) => (
                <Icon
                  key={i}
                  icon={badge.icon}
                  className='size-10 border border-purple-600 text-purple-600 p-2 rounded-sm'
                />
              ))}
              projectDescription={item.description}
            >
              <div
                className='flex flex-col border border-purple-600 rounded-sm bg-[#353535] shadow-lg transition-transform duration-200
            transform hover:-translate-y-1 hover:cursor-pointer'
                data-aos='fade-up'
              >
                {item.type === 'design' ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-contain'
                  />
                ) : (
                  <div className='relative overflow-hidden rounded-lg'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                      width={800}
                      height={600}
                      priority={true}
                    />
                  </div>
                )}

                {item.type !== 'design' && (
                  <div className='flex flex-col p-3 h-auto gap-2 w-full'>
                    {item.type === 'web' && (
                      <Description>Web Application</Description>
                    )}
                    {item.type === 'mobile' && (
                      <Description>Mobile Application</Description>
                    )}
                    <p className='text-neutral-200 self-start'>{item.name}</p>

                    <div className='flex flex-wrap gap-1'>
                      {badges.map((badge, i) => (
                        <Icon
                          key={i}
                          icon={badge.icon}
                          className='size-10 border border-purple-600 text-white p-2 rounded-sm'
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          );
        })}

        {filteredProjects.length === 0 && (
          <p className='text-white'>No project found.</p>
        )}
      </div>
    </div>
  );
}
