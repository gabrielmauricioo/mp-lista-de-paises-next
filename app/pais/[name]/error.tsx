'use client'

export default function Error() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! País não encontrado</h1>
      <p className="text-lg text-gray-600 mb-8">
        Parece que o país que você está procurando não existe ou foi digitado incorretamente.
      </p>
      <button 
        className="px-6 py-3 bg-indigo-700 text-white rounded-md hover:opacity-80 transition"
        onClick={() => window.location.href = '/'}
      >
        Voltar à página inicial
      </button>
    </section>
  )
}
