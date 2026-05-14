export default function About() {
  return (
    <section id="sobre" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex items-center gap-4">
          {<span className="font-mono text-sm tracking-widest whitespace-nowrap" style={{ color: "var(--accent)" }}>
            ✦ SOBRE 
          </span>}
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--accent)", opacity: 0.4 }} />
        </div>

        <div className="gap-12 items-start">

         {/* Texto */}
        <div className="flex flex-col gap-6">
          {[
            "Entrei em desenvolvimento quase por acidente. Vi um amigo mexendo no Arch Linux, achei fascinante, e fui pra Engenharia de Computação na UEFS. Um ano depois mudei pra Engenharia de Software porque fazia mais sentido com o que eu queria de verdade.",
            "Em outubro de 2025 comecei a programar de fato e descobri que amava. Não pela perspectiva de emprego ou salário, mas pelo ato em si. Desde então não parei.",
            "Sou autodidata, ansioso, curioso e honesto ao ponto de me incomodar quando finjo saber algo que não sei. Prefiro deixar claro meu nível do que inflar um currículo. Ainda estou aprendendo e não tenho problema nenhum em dizer isso.",
            "Meu objetivo não é chegar a sênior ou ganhar bem. É ser útil. Pra um time, pra um projeto, pra alguém que precise de ajuda. E aprender com quem sabe mais do que eu enquanto isso.",
          ].map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Badge */}
        <div className="flex justify-center mt-8">
          <div
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full"
            style={{
              border: "1px solid rgba(167,139,250,0.3)",
              color: "var(--accent)",
              backgroundColor: "rgba(167,139,250,0.05)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            Em construção — rumo ao primeiro trabalho na area
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}