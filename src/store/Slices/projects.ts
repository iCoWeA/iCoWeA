import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

export type Projects = Record<string, Project>;

const initialState: Projects = {};

const reducers = {
  setMessage: (_: Projects, action: PayloadAction<Projects>) => action.payload
};

const projects = createSlice({
  name: 'projects',
  initialState,
  reducers
});

export const selectProjects = ({ projects }: StoreState): Projects => projects;

export const projectsActions = projects.actions;

export default projects;
