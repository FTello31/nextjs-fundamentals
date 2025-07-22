const IssueLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Loading Issue...</h1>
        <p className="text-gray-500">
          Please wait while we fetch the issue details.
        </p>
      </div>
    </div>
  )
}
export default IssueLoader
