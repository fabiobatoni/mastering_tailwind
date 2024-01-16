export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl flex items-center gap-3 text-fabio before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Hello Tailwind!
      </h1>
      <h1>Hello Tailwind!</h1>
      <h1>Hello Tailwind!</h1>
    </div>
  );
}

// Por padrao todos os padroes aqui sao feitos para mobile.
/* Tailwind possui breakpoints ja estabelecidos:
  - Responsive Design
*/

/* CUIDADO : Evitar valores arbitrarios, valores que fogem do padrao do tailwind */
