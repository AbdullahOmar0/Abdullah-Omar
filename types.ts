import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}