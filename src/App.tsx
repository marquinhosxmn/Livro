import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, Truck, ShieldCheck, Star, ChevronDown, ChevronUp, Check } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation / Header */}
      <header className="py-6 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <img 
            src="https://i.ibb.co/Fk41rfk9/Chat-GPT-Image-18-de-mar-de-2026-13-30-41.png" 
            alt="Editora Cultura" 
            className="h-20 md:h-24 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="inline-block border border-gold text-gold px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
                  Lançamento Exclusivo
                </div>
                <div className="text-sm font-medium tracking-widest uppercase text-ink/60">
                  Por Editora Cultura
                </div>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-ink">
                Uma obra que transforma a forma de enxergar as Escrituras.
              </h1>
              <p className="text-lg md:text-xl text-ink/70 mb-2 font-medium">
                Geografia Bíblica — Edição Impressa Premium
              </p>
              <p className="text-base md:text-lg text-ink/60 mb-10 leading-relaxed max-w-lg">
                Um guia visual completo que revela os lugares da Bíblia com profundidade histórica e precisão geográfica.
              </p>
              <a 
                href="https://www.seguropagamentos.com.br/livrocultura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink text-paper px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-ink/90 transition-colors duration-300"
              >
                Adquirir exemplar
              </a>
            </FadeIn>
          </div>
          <div className="relative">
            <FadeIn delay={0.2}>
              <div className="rounded-sm overflow-hidden shadow-2xl relative">
                <img 
                  src="https://i.ibb.co/B5dRMwJD/Geografia-b-blica-descoberta-e-imers-o.png" 
                  alt="Livro Geografia Bíblica" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent mix-blend-multiply pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <FadeIn delay={0.1}>
              <div className="font-serif text-5xl md:text-6xl text-gold mb-4">500+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Páginas de conteúdo</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="font-serif text-5xl md:text-6xl text-gold mb-4">280+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Mapas e imagens</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="font-serif text-5xl md:text-6xl text-gold mb-4"><BookOpen className="w-12 h-12 mx-auto" strokeWidth={1} /></div>
              <div className="text-sm uppercase tracking-widest opacity-80">Teologia e História</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="font-serif text-5xl md:text-6xl text-gold mb-4"><Award className="w-12 h-12 mx-auto" strokeWidth={1} /></div>
              <div className="text-sm uppercase tracking-widest opacity-80">Edição Premium</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl leading-relaxed text-ink mb-8">
              "Para muitos leitores, a Bíblia é repleta de lugares que parecem distantes e abstratos."
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-ink/70 leading-relaxed">
              Nomes de cidades, vales e montanhas perdem seu significado sem a devida contextualização. Esta obra resolve essa lacuna, trazendo a geografia bíblica para diante dos seus olhos, permitindo uma compreensão profunda e visual dos textos sagrados.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experience & Content (Split Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <FadeIn>
              <div className="rounded-sm overflow-hidden">
                <img 
                  src="https://i.ibb.co/sJ9H1yV7/Chat-GPT-Image-18-de-mar-de-2026-11-58-12.png" 
                  alt="Leitura física" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="font-serif text-4xl mb-6">A Experiência do Livro Físico</h3>
              <p className="text-ink/70 leading-relaxed mb-6">
                Resgate o prazer da leitura tátil. Folhear as páginas, sentir a textura do papel premium e mergulhar no estudo sem as distrações do mundo digital.
              </p>
              <p className="text-ink/70 leading-relaxed">
                Uma obra pensada e encadernada para acompanhar você na igreja, no seminário ou em seus momentos mais profundos de devoção pessoal.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn className="order-2 md:order-1">
              <h3 className="font-serif text-4xl mb-6">Rigor Histórico e Visual</h3>
              <ul className="space-y-6">
                {[
                  "Mapas integrados à narrativa bíblica.",
                  "Contexto histórico detalhado dos lugares sagrados.",
                  "As jornadas dos grandes personagens bíblicos traçadas com precisão.",
                  "A visualização clara dos acontecimentos que moldaram a fé."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                    <span className="text-ink/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 md:order-2">
              <div className="rounded-sm overflow-hidden">
                <img 
                  src="https://i.ibb.co/GQZwmpcK/Chat-GPT-Image-2-de-mar-de-2026-16-41-16.png" 
                  alt="Mapas antigos" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl text-center mb-20">O que dizem os especialistas</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                text: "Uma ferramenta indispensável para a preparação de sermões. A clareza dos mapas enriquece a exposição bíblica de maneira ímpar.",
                author: "Pr. Marcos Silva",
                role: "Teólogo e Pastor Sênior"
              },
              {
                text: "Meus alunos da Escola Bíblica Dominical agora conseguem visualizar as viagens de Paulo com uma clareza impressionante. Obra fundamental.",
                author: "Prof. Helena Costa",
                role: "Educadora Cristã"
              },
              {
                text: "O rigor histórico e geográfico desta edição a torna uma obra de referência obrigatória para qualquer estudioso sério das Escrituras.",
                author: "Dr. Antônio Ribeiro",
                role: "Doutor em Arqueologia Bíblica"
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.2} className="flex flex-col h-full">
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-sm uppercase tracking-widest">{testimonial.author}</div>
                  <div className="text-xs text-ink/60 uppercase tracking-wider mt-1">{testimonial.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 border-y border-ink/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl mb-12">Uma obra essencial para:</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Leitores dedicados da Bíblia', 'Líderes cristãos', 'Professores de EBD', 'Estudiosos e seminaristas'].map((audience, i) => (
                <div key={i} className="px-6 py-3 border border-ink/20 rounded-full text-sm font-medium uppercase tracking-wider">
                  {audience}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offer */}
      <section className="py-32 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #dfcba4 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-block border border-gold text-gold px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-8">
              Edição Especial de Lançamento
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Adquira seu exemplar hoje</h2>
            
            <div className="bg-white/5 p-12 rounded-sm border border-white/10 mb-12 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-paper/50 line-through text-lg mb-2">De R$ 97,00</span>
                <div className="flex items-start gap-2">
                  <span className="text-xl mt-2">Por R$</span>
                  <span className="font-serif text-7xl text-gold leading-none">49,90</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="opacity-90">Edição Impressa Premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gold" />
                  <span className="opacity-90">Frete grátis para todo o Brasil</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="opacity-90">Entrega em até 7 dias</span>
                </li>
              </ul>

              <a 
                href="https://www.seguropagamentos.com.br/livrocultura"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold text-ink px-8 py-5 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-gold-light transition-colors duration-300"
              >
                Garantir meu exemplar
              </a>
            </div>
            
            <p className="text-sm opacity-60">
              Pagamento seguro. Garantia incondicional de 7 dias.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl text-center mb-16">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <FaqItem 
                question="O livro é físico ou digital?" 
                answer="É um livro físico. Trata-se de uma edição impressa de alta qualidade, enviada diretamente para o seu endereço." 
              />
              <FaqItem 
                question="Qual o prazo de entrega?" 
                answer="O prazo estimado é de até 7 dias úteis após a confirmação do pagamento, com frete grátis para todo o território nacional." 
              />
              <FaqItem 
                question="Qual a qualidade do material?" 
                answer="O livro conta com impressão premium, papel de alta gramatura que não cansa a vista e acabamento refinado para garantir durabilidade por gerações." 
              />
              <FaqItem 
                question="Serve para iniciantes no estudo bíblico?" 
                answer="Absolutamente. A linguagem é acessível e altamente visual, tornando-se uma excelente porta de entrada para quem deseja aprofundar seus conhecimentos, bem como uma referência sólida para estudiosos experientes." 
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final Emotional CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-ink">
              "Conhecer os lugares onde a história bíblica aconteceu é aproximar-se ainda mais da mensagem que ela carrega."
            </h2>
            <a 
              href="https://www.seguropagamentos.com.br/livrocultura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ink text-paper px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-ink/90 transition-colors duration-300"
            >
              Adquirir meu exemplar
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-ink text-paper/50 text-center text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <img 
            src="https://i.ibb.co/Fk41rfk9/Chat-GPT-Image-18-de-mar-de-2026-13-30-41.png" 
            alt="Editora Cultura" 
            className="h-16 md:h-20 w-auto mb-6"
            referrerPolicy="no-referrer"
          />
          <p>© {new Date().getFullYear()} Geografia Bíblica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-ink/10 rounded-sm overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-ink/5 transition-colors"
      >
        <span className="font-medium pr-8">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 shrink-0 text-gold" /> : <ChevronDown className="w-5 h-5 shrink-0 text-gold" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-ink/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
