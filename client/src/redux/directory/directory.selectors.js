import {createSelector} from 'reselect';

export const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);

export const selectCollectionsFromSection = id => {
    return createSelector(
        [selectDirectorySections],
        collections => collections ? Object.keys(collections).map(key => collections[key].name.toLowerCase() === id? collections[key]: null).filter(col => col !== null).pop() : null
    )
};

export const selectIsCollectionFetching = createSelector(
    [selectDirectory],
    directory => directory.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectDirectory],
    directory => !!directory.sections
);

export const selectDirectoryAds = createSelector(
    [selectDirectory],
    directory => directory.ads
);