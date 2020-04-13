import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
);

export const selectCollectionsFromSection = categoryId => createSelector(
    [selectDirectorySection],
    sections => sections ? sections[categoryId].products : null
);

export const isCollectionFetching = createSelector(
    [selectDirectory],
    directory => directory.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectDirectory],
    directory => !!directory.sections
);