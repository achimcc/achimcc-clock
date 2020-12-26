import React from 'react'

import { ExampleComponent, Clock } from 'achimcc-clock'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <Clock hours={12} minutes={32} />
    </div>
  )
}

export default App
