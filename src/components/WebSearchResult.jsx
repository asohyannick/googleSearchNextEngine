import  Parser  from "html-react-parser";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
export default function WebSearchResult({results}) {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
     <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
            {results.searchInformation?.formattedSearchTime} seconds
        )
     </p>
     {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
         <div className="group flex flex-col">
              <Link href={result.link}>
               {result.formattedUrl}
              </Link>
              <Link href={result.link} className='group-hover:underline font-medium text-blue-500 decoration-blue-800 text-xl truncate'>
               {result.title}
              </Link>
         </div>
         <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
     ))}
     <PaginationButtons/>
    </div>
  )
}
