import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

export type Projects = Record<string, Project>;

const initialState: Projects = {};

const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (_, action) => action.payload
  }
});

export const selectProjects = ({ projects }: StoreState): Projects => projects;

export const projectsActions = projects.actions;

export default projects;
