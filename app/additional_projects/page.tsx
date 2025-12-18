import Link from "next/link"

export default function AdditionalProject() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6">
        <div className="max-w-xl w-full text-center space-y-6">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white tracking-wide">
            Additional Projects
          </h2>

          {/* Project List */}
          <ul className="flex flex-col gap-4 mt-6 text-lg font-medium">
            
            {/* Project Card */}
            <li className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white shadow-lg border border-gray-700">
              <Link 
                href="https://sentiment-analyzer-5dchedchvkzrgvpdkrcngl.streamlit.app/" 
                target="_blank"
              >
                Sentiment Analyzer
              </Link>
            </li>

            <li className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white shadow-lg border border-gray-700">
              RNN LSTM Project
            </li>

            <li className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white shadow-lg border border-gray-700">
              Transformer Project
            </li>

            <li className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white shadow-lg border border-gray-700">
              Transfer Learning Project
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
