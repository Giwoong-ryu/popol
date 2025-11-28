import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string[];
  image: string;
  icon?: React.ReactNode;
}

export interface PhilosophyItem {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
}