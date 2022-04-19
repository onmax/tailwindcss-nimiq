// import Head from 'next/head'
// import MarkdownSampleShort from '../components/MarkdownSampleShort.mdx'

// export default function Variants() {
//   return (
//     <div className="antialiased text-gray-900 md:bg-gray-900 lg:bg-white">
//       <Head>
//         <title>Tailwind CSS Typography</title>
//       </Head>
//       <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
//         <article>
//           <h1 className="sr-only">Tailwind CSS Typography</h1>
//           <div className="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
//             <div className="space-y-10 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
//               <svg className="h-6 sm:h-8" fill="none" viewBox="0 0 297 24">
//                 <path
//                   fill="#16BDCA"
//                   fillRule="evenodd"
//                   d="M19.418.523c-5.178 0-8.415 2.589-9.71 7.767 1.943-2.59 4.208-3.56 6.797-2.913 1.477.37 2.533 1.44 3.702 2.627 1.903 1.933 4.107 4.17 8.92 4.17 5.178 0 8.414-2.59 9.708-7.768-1.941 2.59-4.207 3.56-6.796 2.913-1.477-.37-2.533-1.441-3.702-2.628C26.434 2.76 24.23.523 19.417.523zm-9.71 11.65c-5.177 0-8.413 2.59-9.708 7.767 1.942-2.589 4.207-3.56 6.796-2.913 1.477.37 2.533 1.441 3.702 2.628 1.904 1.932 4.107 4.169 8.92 4.169 5.178 0 8.414-2.59 9.709-7.767-1.942 2.589-4.208 3.56-6.797 2.912-1.477-.369-2.533-1.44-3.701-2.627-1.904-1.932-4.108-4.169-8.92-4.169z"
//                   clipRule="evenodd"
//                 />
//                 <path
//                   fill="#1a202c"
//                   d="M59.31 8.962v-2.79h-3.328V2.414l-2.898.858v2.898h-2.468v2.79h2.468v6.44c0 3.489 1.771 4.723 6.225 4.186v-2.602c-2.2.107-3.327.134-3.327-1.584v-6.44h3.327zM72.013 6.171v1.905c-1.02-1.395-2.603-2.254-4.696-2.254-3.649 0-6.68 3.06-6.68 7.057 0 3.971 3.031 7.057 6.68 7.057 2.093 0 3.676-.859 4.696-2.28v1.931h2.897V6.171h-2.897zm-4.24 11.001c-2.415 0-4.24-1.797-4.24-4.293 0-2.495 1.825-4.293 4.24-4.293s4.24 1.798 4.24 4.293c0 2.496-1.825 4.293-4.24 4.293zM79.737 4.159c1.02 0 1.852-.859 1.852-1.851 0-1.02-.832-1.852-1.852-1.852s-1.851.832-1.851 1.852c0 .992.832 1.85 1.851 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM84.55 19.587h2.898V0h-2.897v19.587zM106.268 6.171l-2.629 9.257-2.791-9.257h-2.763l-2.818 9.257-2.602-9.257h-3.06l4.213 13.416h2.844l2.818-9.042 2.79 9.042h2.844l4.213-13.416h-3.059zM112.91 4.159c1.019 0 1.851-.859 1.851-1.851 0-1.02-.832-1.852-1.851-1.852-1.02 0-1.852.832-1.852 1.852 0 .992.832 1.85 1.852 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM124.78 5.822c-1.824 0-3.273.671-4.159 2.067V6.17h-2.898v13.416h2.898v-7.19c0-2.738 1.503-3.865 3.408-3.865 1.824 0 3.005 1.074 3.005 3.113v7.942h2.898V11.35c0-3.488-2.147-5.528-5.152-5.528zM143.677.805v7.271c-1.019-1.395-2.602-2.254-4.695-2.254-3.649 0-6.681 3.06-6.681 7.057 0 3.971 3.032 7.057 6.681 7.057 2.093 0 3.676-.859 4.695-2.28v1.931h2.898V.805h-2.898zm-4.239 16.367c-2.415 0-4.239-1.797-4.239-4.293 0-2.495 1.824-4.293 4.239-4.293s4.239 1.798 4.239 4.293c0 2.496-1.824 4.293-4.239 4.293z"
//                 />
//                 <path
//                   fill="#16BDCA"
//                   d="M161.544 5.748h-10.182v2.61h3.717v11.23h2.728V8.357h3.737v-2.61zM175.997 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19l4.745-8.442zM184.461 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.166 0 2.016.889 2.016 2.095 0 1.186-.85 2.095-2.016 2.095zM199.387 19.864c3.994 0 7.196-3.163 7.196-7.197 0-4.053-3.202-7.196-7.196-7.196-3.994 0-7.177 3.143-7.177 7.196 0 4.034 3.183 7.197 7.177 7.197zm0-2.67c-2.511 0-4.468-1.877-4.468-4.527 0-2.669 1.957-4.547 4.468-4.547s4.468 1.878 4.468 4.547c0 2.65-1.957 4.528-4.468 4.528zM224.061 12.153h-6.94v2.412h4.191c-.474 1.582-1.858 2.63-4.033 2.63-2.886 0-4.725-1.938-4.725-4.508 0-2.63 1.898-4.567 4.527-4.567 1.681 0 3.085.81 3.717 1.918l2.333-1.345c-1.166-1.897-3.4-3.222-6.03-3.222-4.132 0-7.256 3.203-7.256 7.216 0 3.954 3.085 7.177 7.414 7.177 3.974 0 6.802-2.65 6.802-6.643v-1.068zM235.57 19.587h2.946l-3.064-5.22c1.581-.73 2.669-2.293 2.669-4.033 0-2.53-2.057-4.586-4.607-4.586h-5.536v13.84h2.729v-4.805h2.076l2.787 4.804zm-4.863-11.289h2.807c1.028 0 1.878.89 1.878 2.037 0 1.146-.85 2.056-1.878 2.056h-2.807V8.298zM250.996 19.587h2.966l-4.864-13.84h-3.38l-4.844 13.84h2.946l.83-2.491h5.516l.83 2.491zm-5.476-5.041l1.898-5.655 1.898 5.655h-3.796zM262.443 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.167 0 2.017.889 2.017 2.095 0 1.186-.85 2.095-2.017 2.095zM278.79 5.748v5.496h-5.14V5.748h-2.728v13.84h2.728v-5.734h5.14v5.733h2.709V5.747h-2.709zM297 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19L297 5.748z"
//                 />
//               </svg>

//               <div>
//                 <a
//                   href="https://github.com/tailwindcss/typography"
//                   className="inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-800 text-gray-300 text-sm leading-5 font-medium shadow-lg hover:bg-gray-700 transition ease-in-out duration-100"
//                 >
//                   <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>View on GitHub</span>
//                 </a>
//               </div>
//             </div>
//             <div
//               className="prose
//             marker:prose-ol:text-red-500

//             prose-bullets:bg-red-500
//             marker:prose-ul:text-red-500

//             prose-img:rounded-xl prose-img:shadow-xl prose-pre:bg-blue-900 prose-pre:text-pink-200 hover:prose-pre:font-bold prose-headings:text-pink-800 sm:prose-base md:prose-invert lg:prose-slate"
//             >
//               <MarkdownSampleShort />
//             </div>
//           </div>
//         </article>
//       </div>
//     </div>
//   )
// }
