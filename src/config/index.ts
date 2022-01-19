export const mapNavigationToUrl = {
  cv: '/cv',
  publications: '/publications',
  projects: '/projects',
};

export const mapNavigationToLinkName = {
  cv: 'Resume',
  publications: 'Publications',
  projects: 'Projects',
};

export const publicationCategoryIdMap = {
  selected: '1-selected-peer-reviewed',
  massMedia: '2-mass-media',
  bookChapters: '3-book-chapters',
  infectiousDisease: '1-infectious-diseases',
  addictions: '2-addictions',
  prison: '3-people-in-prison',
  publicHealth: '4-queering-public-health',
};

export const mapPublicationCategoryIdToTitle = {
  [publicationCategoryIdMap.selected]: 'Selected peer-reviewed Publications',
  [publicationCategoryIdMap.massMedia]: 'Mass Media',
  [publicationCategoryIdMap.bookChapters]: 'Book Chapters',
  [publicationCategoryIdMap.infectiousDisease]: 'Infectious Diseases',
  [publicationCategoryIdMap.addictions]: 'Addictions',
  [publicationCategoryIdMap.prison]: 'People in Prison',
  [publicationCategoryIdMap.publicHealth]: 'Queering Public Health',
};
