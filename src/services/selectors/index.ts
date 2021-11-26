import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../Global/Store";

const getMainApp = (state: RootState) => state;

export const postSelector = createSelector(
  getMainApp,
  ({ posts }) => posts
);