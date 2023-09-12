export const Modal = ({ onClose, onConfirm, title, subtitle }) => {
  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className=" flex flex-col items-center">
        <div className="w-fit items-center text-gray-200 text-center bg-slate-800 p-2 rounded-lg ">
          <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 m-2">
            <button
              className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={onConfirm}
            >
              Si
            </button>
            <button
              className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
