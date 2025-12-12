export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <img 
        src="/network_blue.gif" 
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen py-10">
        <main className="container mx-auto max-w-2xl px-4">
          <section className="text-center space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
                M2B
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            
            <p className="text-xl text-white/90 drop-shadow-lg">
              Grupo de Trabalho Acadêmico
            </p>
            
            <div className="mt-8">
              <a href="/portfolio">
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Ver Portfólio e Equipe
                </button>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}