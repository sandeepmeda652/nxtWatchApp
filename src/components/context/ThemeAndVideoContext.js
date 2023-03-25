import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
