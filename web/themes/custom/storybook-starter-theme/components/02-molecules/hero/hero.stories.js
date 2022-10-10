import React from 'react';

import heroTwig from './hero.twig';

import heroData from './hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

export const hero = () => (
  <div dangerouslySetInnerHTML={{ __html: heroTwig(heroData) }} />
);
