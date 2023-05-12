import React from 'react'
import { TodoWindow } from '../layouts/TodoWindow'

export const TodoPage = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-purple-gradient bg-cover h-screen">
        <TodoWindow />
      </div>
    </>
  )
}
