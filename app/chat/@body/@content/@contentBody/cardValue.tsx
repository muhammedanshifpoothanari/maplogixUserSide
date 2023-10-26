const CardValue = () => {
    return (
        <>
        <div className="flex justify-end">
        <div className="flex w-11/12 flex-row-reverse">
          <div className="relative max-w-xl rounded-xl rounded-tr-none bg-blue-600 px-4 py-2">
            <span className="text-sm font-medium text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex w-11/12">
          <div className="relative max-w-xl rounded-xl rounded-tl-none bg-muted-1 px-4 py-2">
            <span className="text-sm font-medium text-heading">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </div>
      </>
    )
}

export default CardValue;