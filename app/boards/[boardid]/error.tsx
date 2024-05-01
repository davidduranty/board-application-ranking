'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
      <div className="border-red-700 bg-red-900 p-4 text-gray-50">                 
          <h2 >Something went wrong in Board !</h2>
          <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-500" onClick={() => reset()}>Try again</button>
      </div>
    
  )
}