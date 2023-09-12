import { useState } from 'react'

export function CounterBoard({
  title = 'No Title',
  onChangePoints,
  points
}) {
  
  const handleAddPoint = () => {
    onChangePoints(points + 1)
  }

  const handleRemovePoint = () => {
    onChangePoints(points - 1)
  }

  const drawPoints = () => {
    const length =
      points % 5 == 0 ? Math.floor(points / 5) : Math.floor(points / 5) + 1
    const cantGroups = Array.from({ length: length }, (_, index) => index + 1)
    return (
      <div>
        {cantGroups.map((group) => (
          <div key={`group-${group}`} className="group">
            {drawImg(group)}
          </div>
        ))}
      </div>
    )
  }

  const drawImg = (group) => {
    const partialCount = points - (group - 1) * 5
    const currentLength = partialCount > 5 ? 5 : partialCount
    const images = Array.from(
      { length: currentLength },
      (_, index) => index + 1
    )

    return images.map((image) => {
      return (
        <img
          key={`img-${group}-${image}`}
          className={`point${image}`}
          alt={`img-${group}-${image}`}
          src="./img/point.png"
        />
      )
    })
  }

  return (
    <section className="flex flex-col gap-2">
      <span className="m-auto w-fit bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 text-center">
        {title} ({points})
      </span>
      <div className="flex flex-col bg-gray-500 min-h-[490px] rounded-lg">
        <div className="flex-col flex justify-center items-center">
          {drawPoints()}
        </div>
      </div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => handleAddPoint()}
          className="my-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Agregar
        </button>
        <button
          type="button"
          onClick={() => handleRemovePoint()}
          className="my-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Sacar
        </button>
      </div>
    </section>
  )
}

export default CounterBoard
