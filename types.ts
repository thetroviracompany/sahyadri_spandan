import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PackageCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  DESTINATIONS = 'destinations',
  PACKAGES = 'packages',
  TEAM = 'team',
  CONTACT = 'contact',
}