import React from 'react'
import { DateInfo } from '../components/DateInfo'
import { TodoList } from '../components/TodoList'

export const TodoWindow = () => {
  return (
    <>
    <div className="flex flex-col">
      <DateInfo />
      <TodoList />
    </div>
    </>
  )
}
