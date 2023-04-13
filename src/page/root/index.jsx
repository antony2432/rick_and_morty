import React from 'react'
import Cards from '../../components/Cards'
import SearchBar from '../../components/SearchBar'

export default function RootPage({characters, onClose, onSearch}) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}
