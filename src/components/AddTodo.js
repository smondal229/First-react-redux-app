import React from 'react';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim()){
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >

  )
}