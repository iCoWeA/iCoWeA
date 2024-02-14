import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const initialState: Project[] = [];

const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (_, action) => action.payload
  }
});

export const selectProjects = ({ projects }: StoreState): Project[] => projects;

export const projectsActions = projects.actions;

export default projects;
