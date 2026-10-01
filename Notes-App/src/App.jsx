import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setTask([{title,detail},...task])
    
    // const copyTask = [...task]

    // copyTask.push({title,detail})

    // setTask(copyTask)


    setTitle("")
    setDetail("")
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='min-h-screen bg-black text-white lg:flex'>
      <form className='flex p-10 flex-col gap-4 lg:w-1/2 items-start' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          className='w-full border-2 px-4 py-4 outline-none rounded '
          type="text"
          placeholder='Enter Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          className='w-full border-2 px-4 py-4 outline-none h-40 rounded flex'
          type="text"
          placeholder='Write Details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />
        <button className='bg-white text-black p-3 rounded text-lg font-medium w-full'>Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 overflow-auto'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-4'>
          {task.map(function(elem,idx){

              return <div key={idx} className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ehFg5QsyE_CwDCCVavH1QQWyJ7Xrugh3kjdSGLIjmg&s=10")] bg-cover text-black h-52 w-53 rounded-2xl flex flex-col px-7 pt-4 relative justify-between'>
                <div>
                <h2 className='leading-tight text-xl font-bold wrap-break-word uppercase'>{elem.title}</h2>
                <p className='leading-tight font-light mt-4 wrap-break-word'>{elem.detail}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }}  className='bg-gray-600 rounded-full mb-2 text-white cursor-pointer active:scale-95 font-medium'>Delete</button>
              </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
