import React from 'react'
import Cards from '../../components/Cards'
import SearchBar from '../../components/SearchBar'

export default function RootPage({characters, onClose}) {
  return (
    <div>
      <SearchBar/>
      <Cards/>
    </div>
  )
}
