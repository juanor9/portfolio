import * as React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <header>Juan Camilo Orjuela</header>
      <main>
        <h1>Main</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;