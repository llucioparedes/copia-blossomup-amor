import { useState } from "react";

const BRAND = "Tipos de amor";
const SERVICE = "Test tipos de amor";

const preguntas = [
  {
    id: 1,
    texto: "Cuando alguien especial está triste, tú...",
    opciones: [
      { texto: "Le abrazas y estás físicamente presente", tipo: "fisico" },
      { texto: "Le dices palabras de aliento y apoyo", tipo: "palabras" },
      { texto: "Le ayudas a resolver el problema", tipo: "actos" },
      { texto: "Le compras algo que le anime", tipo: "regalos" },
      { texto: "Cancelas tus planes para estar con esa persona", tipo: "tiempo" },
    ],
  },
  {
    id: 2,
    texto: "¿Qué te hace sentir más amado/a?",
    opciones: [
      { texto: "Recibir cumplidos y palabras bonitas", tipo: "palabras" },
      { texto: "Pasar tiempo de calidad con alguien", tipo: "tiempo" },
      { texto: "Recibir un regalo inesperado", tipo: "regalos" },
      { texto: "Que alguien te dé un abrazo espontáneo", tipo: "fisico" },
      { texto: "Que alguien haga algo por ti sin pedírselo", tipo: "actos" },
    ],
  },
  {
    id: 3,
    texto: "En una relación, valoras más...",
    opciones: [
      { texto: "La comunicación y las palabras bonitas", tipo: "palabras" },
      { texto: "Los detalles y sorpresas", tipo: "regalos" },
      { texto: "El contacto físico y la cercanía", tipo: "fisico" },
      { texto: "El tiempo dedicado exclusivamente a ti", tipo: "tiempo" },
      { texto: "Que cuiden de ti y te faciliten la vida", tipo: "actos" },
    ],
  },
  {
    id: 4,
    texto: "¿Cómo expresas tu amor hacia los demás?",
    opciones: [
      { texto: "Con abrazos, besos y caricias", tipo: "fisico" },
      { texto: "Diciéndoles cuánto los quiero", tipo: "palabras" },
      { texto: "Organizando planes especiales juntos", tipo: "tiempo" },
      { texto: "Haciendo tareas o favores por ellos", tipo: "actos" },
      { texto: "Comprando detalles que sé que les gustan", tipo: "regalos" },
    ],
  },
  {
    id: 5,
    texto: "Cuando alguien te regala algo, lo que más te importa es...",
    opciones: [
      { texto: "El tiempo que dedicó a elegirlo", tipo: "tiempo" },
      { texto: "Que sea un objeto significativo", tipo: "regalos" },
      { texto: "Las palabras que acompañan el regalo", tipo: "palabras" },
      { texto: "El gesto de pensar en ti", tipo: "actos" },
      { texto: "El abrazo que viene con él", tipo: "fisico" },
    ],
  },
  {
    id: 6,
    texto: "¿Qué te molesta más en una relación?",
    opciones: [
      { texto: "Que no te digan 'te quiero' o no te halaguen", tipo: "palabras" },
      { texto: "Que no haya contacto físico frecuente", tipo: "fisico" },
      { texto: "Que no compartan tiempo contigo", tipo: "tiempo" },
      { texto: "Que no hagan nada especial por ti", tipo: "actos" },
      { texto: "Que se olviden de fechas o detalles", tipo: "regalos" },
    ],
  },
  {
    id: 7,
    texto: "Cuando quieres reconectar con alguien, prefieres...",
    opciones: [
      { texto: "Hacer una actividad juntos sin distracciones", tipo: "tiempo" },
      { texto: "Escribirle un mensaje bonito", tipo: "palabras" },
      { texto: "Darle un abrazo largo", tipo: "fisico" },
      { texto: "Llevarle su comida o cosa favorita", tipo: "regalos" },
      { texto: "Ayudarle con algo que necesite", tipo: "actos" },
    ],
  },
  {
    id: 8,
    texto: "Sientes que una relación va bien cuando...",
    opciones: [
      { texto: "Hay mucho contacto físico y afecto", tipo: "fisico" },
      { texto: "Pasan tiempo de calidad regularmente", tipo: "tiempo" },
      { texto: "Te dicen cosas lindas y te valoran con palabras", tipo: "palabras" },
      { texto: "La otra persona hace cosas por ti sin que se las pidas", tipo: "actos" },
      { texto: "Hay detalles y pequeñas sorpresas frecuentes", tipo: "regalos" },
    ],
  },
  {
    id: 9,
    texto: "Tu forma favorita de celebrar un logro de alguien querido es...",
    opciones: [
      { texto: "Felicitarle con palabras llenas de emoción", tipo: "palabras" },
      { texto: "Organizarle una celebración especial", tipo: "tiempo" },
      { texto: "Darle un gran abrazo de felicitación", tipo: "fisico" },
      { texto: "Comprarle algo para recordar el momento", tipo: "regalos" },
      { texto: "Encargarte de algo que le quite un peso", tipo: "actos" },
    ],
  },
  {
    id: 10,
    texto: "Al final del día, te sientes más conectado/a cuando...",
    opciones: [
      { texto: "Alguien se acurruca contigo o te da la mano", tipo: "fisico" },
      { texto: "Alguien te dice que le alegra tenerte en su vida", tipo: "palabras" },
      { texto: "Pasas una tarde tranquila juntos sin teléfonos", tipo: "tiempo" },
      { texto: "Alguien prepara la cena o te ayuda en casa", tipo: "actos" },
      { texto: "Recibes un pequeño detalle inesperado", tipo: "regalos" },
    ],
  },
];

const tiposAmor = {
  palabras: {
    nombre: "Palabras de afirmación",
    emoji: "💬",
    color: "#9B59B6",
    descripcion:
      "Te nutres del amor que se expresa con palabras. Los cumplidos sinceros, los 'te quiero', los mensajes de apoyo y el reconocimiento verbal son tu lenguaje del corazón. Las palabras tienen un poder enorme sobre ti y pueden hacerte sentir en las nubes o en el suelo.",
    consejos: [
      "Comunica a tu pareja o seres queridos que las palabras son importantes para ti.",
      "Practica decir afirmaciones positivas también a ti mismo/a.",
      "Aprecia los mensajes escritos; guárdalos cuando te hagan sentir bien.",
    ],
  },
  tiempo: {
    nombre: "Tiempo de calidad",
    emoji: "⏰",
    color: "#E91E8C",
    descripcion:
      "Tu amor se alimenta de presencia real. No necesitas actividades elaboradas; lo que más valoras es la atención plena de las personas que amas. Una conversación profunda, una tarde sin pantallas o un paseo juntos significan más para ti que cualquier regalo.",
    consejos: [
      "Propón momentos sin distracciones con las personas que amas.",
      "Establece rituales regulares: una cena semanal, una llamada fija.",
      "Comunica que el tiempo compartido es tu forma de sentirte amado/a.",
    ],
  },
  regalos: {
    nombre: "Recibir regalos",
    emoji: "🎁",
    color: "#FF6B9D",
    descripcion:
      "Para ti, los regalos son símbolos tangibles de amor y consideración. No se trata del valor económico, sino del pensamiento detrás del detalle. Un pequeño gesto que demuestre que alguien pensó en ti puede llenar tu corazón de alegría.",
    consejos: [
      "Recuerda que el valor está en el gesto, no en el precio.",
      "Comunica a tus seres queridos qué tipo de detalles te gustan.",
      "Celebra también el proceso de dar regalos como expresión de amor.",
    ],
  },
  fisico: {
    nombre: "Contacto físico",
    emoji: "🤗",
    color: "#FF8C42",
    descripcion:
      "El contacto físico es tu idioma nativo del amor. Un abrazo, una caricia, tomarse de la mano o simplemente estar cerca físicamente te hace sentir seguro/a, querido/a y conectado/a. Para ti, el cuerpo habla más que mil palabras.",
    consejos: [
      "Comunica tu necesidad de contacto físico de forma clara y amorosa.",
      "El contacto físico no siempre debe ser romántico; abraza a tus amigos y familia.",
      "Si estás lejos de seres queridos, busca formas alternativas de conexión.",
    ],
  },
  actos: {
    nombre: "Actos de servicio",
    emoji: "🛠️",
    color: "#27AE60",
    descripcion:
      "Tu lema es 'las acciones valen más que las palabras'. Te sientes profundamente amado/a cuando alguien hace algo por ti: cocina, arregla algo, te ayuda sin que se lo pidas. Ver a alguien esforzarse para hacerte la vida más fácil es la mayor muestra de amor para ti.",
    consejos: [
      "Aprecia los pequeños actos cotidianos como expresiones genuinas de amor.",
      "Pide ayuda cuando la necesitas; no lo veas como debilidad.",
      "Comparte con otros cómo expresas amor para que lo reconozcan.",
    ],
  },
};

function BarraResultado({ tipo, valor, total }) {
  const porcentaje = total > 0 ? Math.round((valor / total) * 100) : 0;
  const info = tiposAmor[tipo];
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.3rem",
        }}
      >
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#333" }}>
          {info.emoji} {info.nombre}
        </span>
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: info.color,
          }}
        >
          {porcentaje}%
        </span>
      </div>
      <div
        style={{
          background: "#f0f0f0",
          borderRadius: "50px",
          height: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${porcentaje}%`,
            background: `linear-gradient(90deg, ${info.color}99, ${info.color})`,
            borderRadius: "50px",
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [pantalla, setPantalla] = useState("inicio"); // inicio | quiz | resultado
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({
    palabras: 0,
    tiempo: 0,
    regalos: 0,
    fisico: 0,
    actos: 0,
  });
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [animando, setAnimando] = useState(false);
  const [nombre, setNombre] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(false);

  const totalRespuestas = Object.values(respuestas).reduce((a, b) => a + b, 0);

  const tiposPorcentaje = Object.entries(respuestas)
    .map(([tipo, val]) => ({
      tipo,
      val,
      pct: totalRespuestas > 0 ? (val / totalRespuestas) * 100 : 0,
    }))
    .sort((a, b) => b.val - a.val);

  const tipoPrincipal = tiposPorcentaje[0]?.tipo;

  const seleccionarOpcion = (opcion) => {
    if (animando) return;
    setOpcionSeleccionada(opcion.tipo);
    setTimeout(() => {
      const nuevasRespuestas = {
        ...respuestas,
        [opcion.tipo]: respuestas[opcion.tipo] + 1,
      };
      setRespuestas(nuevasRespuestas);
      setAnimando(true);
      setTimeout(() => {
        if (preguntaActual + 1 < preguntas.length) {
          setPreguntaActual(preguntaActual + 1);
          setOpcionSeleccionada(null);
          setAnimando(false);
        } else {
          setMostrarNombre(true);
          setAnimando(false);
        }
      }, 350);
    }, 400);
  };

  const reiniciar = () => {
    setPantalla("inicio");
    setPreguntaActual(0);
    setRespuestas({ palabras: 0, tiempo: 0, regalos: 0, fisico: 0, actos: 0 });
    setOpcionSeleccionada(null);
    setAnimando(false);
    setNombre("");
    setMostrarNombre(false);
  };

  const progreso = ((preguntaActual) / preguntas.length) * 100;

  // PANTALLA INICIO
  if (pantalla === "inicio") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #ede7f6 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo / Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "4rem",
              marginBottom: "0.5rem",
              filter: "drop-shadow(0 4px 8px rgba(233,30,140,0.3))",
            }}
          >
            💕
          </div>
          <h1
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#9B2C6E",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {BRAND}
          </h1>
        </div>

        {/* Card principal */}
        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "2.5rem 2rem",
            maxWidth: "440px",
            width: "100%",
            boxShadow: "0 20px 60px rgba(155,44,110,0.15)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Descubre tu{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E91E8C, #9B59B6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              lenguaje del amor
            </span>
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "1rem",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            Responde 10 preguntas sencillas y descubre cuál de los 5 estilos de amor domina en ti. Conocerte mejor transforma tus relaciones.
          </p>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {["10 preguntas", "2 minutos", "100% gratis"].map((b) => (
              <span
                key={b}
                style={{
                  background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
                  color: "#9B2C6E",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "0.35rem 0.85rem",
                  borderRadius: "50px",
                  border: "1px solid #f8bbd0",
                }}
              >
                ✨ {b}
              </span>
            ))}
          </div>

          <button
            onClick={() => setPantalla("quiz")}
            style={{
              width: "100%",
              padding: "1rem",
              background: "linear-gradient(135deg, #E91E8C, #9B59B6)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(233,30,140,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 32px rgba(233,30,140,0.45)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 24px rgba(233,30,140,0.35)";
            }}
          >
            Comenzar el test 💖
          </button>
        </div>

        {/* Tipos preview */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "2rem",
            maxWidth: "440px",
          }}
        >
          {Object.values(tiposAmor).map((t) => (
            <div
              key={t.nombre}
              style={{
                background: "rgba(255,255,255,0.8)",
                borderRadius: "12px",
                padding: "0.6rem 0.9rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: t.color,
                backdropFilter: "blur(10px)",
                border: `1px solid ${t.color}33`,
              }}
            >
              {t.emoji} {t.nombre}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // PANTALLA QUIZ
  if (pantalla === "quiz") {
    const pregunta = preguntas[preguntaActual];

    if (mostrarNombre) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #ede7f6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              maxWidth: "440px",
              width: "100%",
              boxShadow: "0 20px 60px rgba(155,44,110,0.15)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#1a1a2e",
                marginBottom: "0.75rem",
              }}
            >
              ¡Test completado!
            </h2>
            <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              ¿Cómo te llamas? Personalizaremos tu resultado.
            </p>
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: "100%",
                padding: "0.9rem 1.2rem",
                borderRadius: "50px",
                border: "2px solid #f8bbd0",
                fontSize: "1rem",
                marginBottom: "1.25rem",
                outline: "none",
                textAlign: "center",
                fontFamily: "inherit",
                color: "#333",
              }}
            />
            <button
              onClick={() => setPantalla("resultado")}
              style={{
                width: "100%",
                padding: "1rem",
                background: "linear-gradient(135deg, #E91E8C, #9B59B6)",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                fontSize: "1.05rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(233,30,140,0.35)",
              }}
            >
              Ver mi resultado ✨
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #ede7f6 100%)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.25rem 1.5rem 0",
            maxWidth: "520px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#9B2C6E",
              }}
            >
              💕 {BRAND}
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#999",
                fontWeight: 600,
              }}
            >
              {preguntaActual + 1} / {preguntas.length}
            </span>
          </div>
          {/* Barra de progreso */}
          <div
            style={{
              background: "#f0e0e8",
              borderRadius: "50px",
              height: "8px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progreso}%`,
                background: "linear-gradient(90deg, #E91E8C, #9B59B6)",
                borderRadius: "50px",
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>

        {/* Pregunta */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "520px", width: "100%" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "2rem 1.75rem",
                marginBottom: "1rem",
                boxShadow: "0 8px 32px rgba(155,44,110,0.12)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
                  color: "#9B2C6E",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "50px",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Pregunta {preguntaActual + 1}
              </div>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.4,
                }}
              >
                {pregunta.texto}
              </h2>
            </div>

            {/* Opciones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {pregunta.opciones.map((opcion, idx) => {
                const seleccionada = opcionSeleccionada === opcion.tipo && idx === pregunta.opciones.findIndex(o => o.tipo === opcionSeleccionada && o.texto === opcion.texto);
                const esSeleccionada = opcionSeleccionada !== null && opcion.texto === pregunta.opciones.find(o => o.tipo === opcionSeleccionada)?.texto && opcionSeleccionada === opcion.tipo;
                return (
                  <button
                    key={idx}
                    onClick={() => seleccionarOpcion(opcion)}
                    disabled={opcionSeleccionada !== null}
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      background: opcionSeleccionada === opcion.tipo && pregunta.opciones.filter(o => o.tipo === opcionSeleccionada).indexOf(opcion) === 0
                        ? `linear-gradient(135deg, ${tiposAmor[opcion.tipo].color}22, ${tiposAmor[opcion.tipo].color}11)`
                        : "#fff",
                      border: opcionSeleccionada === opcion.tipo && pregunta.opciones.filter(o => o.tipo === opcionSeleccionada).indexOf(opcion) === 0
                        ? `2px solid ${tiposAmor[opcion.tipo].color}`
                        : "2px solid transparent",
                      borderRadius: "16px",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#333",
                      cursor: opcionSeleccionada ? "default" : "pointer",
                      textAlign: "left",
                      boxShadow: "0 4px 16px rgba(155,44,110,0.08)",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                      lineHeight: 1.4,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                    onMouseEnter={(e) => {
                      if (!opcionSeleccionada) {
                        e.currentTarget.style.transform = "translateX(4px)";
                        e.currentTarget.style.boxShadow = "0 6px 24px rgba(233,30,140,0.15)";
                        e.currentTarget.style.borderColor = "#E91E8C44";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!opcionSeleccionada) {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(155,44,110,0.08)";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                  >
                    <span
                      style={{
                        minWidth: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#9B2C6E",
                        flexShrink: 0,
                      }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opcion.texto}
                  </button>
                );
              })}
            </div>

            {/* Botón volver */}
            {preguntaActual > 0 && !opcionSeleccionada && (
              <button
                onClick={() => setPreguntaActual(preguntaActual - 1)}
                style={{
                  marginTop: "1.25rem",
                  background: "transparent",
                  border: "none",
                  color: "#999",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "inherit",
                  padding: "0.5rem 0",
                }}
              >
                ← Pregunta anterior
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // PANTALLA RESULTADO
  if (pantalla === "resultado" && tipoPrincipal) {
    const infoTipo = tiposAmor[tipoPrincipal];
    const segundoTipo = tiposPorcentaje[1]?.tipo;
    const infoSegundo = tiposAmor[segundoTipo];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #ede7f6 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          {/* Header resultado */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem", paddingTop: "1rem" }}>
            <p style={{ color: "#9B2C6E", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {SERVICE}
            </p>
          </div>

          {/* Card principal del resultado */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              marginBottom: "1.25rem",
              boxShadow: "0 20px 60px rgba(155,44,110,0.15)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Fondo decorativo */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: `${infoTipo.color}11`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: `${infoTipo.color}0a`,
              }}
            />

            <div style={{ fontSize: "4rem", marginBottom: "0.75rem" }}>{infoTipo.emoji}</div>
            {nombre && (
              <p style={{ color: "#999", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                {nombre}, tu lenguaje del amor es...
              </p>
            )}
            {!nombre && (
              <p style={{ color: "#999", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                Tu lenguaje del amor es...
              </p>
            )}
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: infoTipo.color,
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {infoTipo.nombre}
            </h1>
            <p
              style={{
                color: "#555",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                textAlign: "left",
              }}
            >
              {infoTipo.descripcion}
            </p>
          </div>

          {/* Segundo tipo */}
          {infoSegundo && (
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "1.5rem",
                marginBottom: "1.25rem",
                boxShadow: "0 8px 24px rgba(155,44,110,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#999",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.5rem",
                }}
              >
                Tu segundo lenguaje
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>{infoSegundo.emoji}</span>
                <div>
                  <p style={{ fontWeight: 700, color: infoSegundo.color, fontSize: "1rem" }}>
                    {infoSegundo.nombre}
                  </p>
                  <p style={{ color: "#777", fontSize: "0.85rem" }}>
                    También influye mucho en cómo das y recibes amor
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Gráfico de barras */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.75rem",
              marginBottom: "1.25rem",
              boxShadow: "0 8px 24px rgba(155,44,110,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "1.25rem",
              }}
            >
              📊 Tu distribución de amor
            </h3>
            {tiposPorcentaje.map(({ tipo, val }) => (
              <BarraResultado key={tipo} tipo={tipo} valor={val} total={totalRespuestas} />
            ))}
          </div>

          {/* Consejos */}
          <div
            style={{
              background: `linear-gradient(135deg, ${infoTipo.color}15, ${infoTipo.color}08)`,
              borderRadius: "20px",
              padding: "1.75rem",
              marginBottom: "1.25rem",
              border: `1px solid ${infoTipo.color}22`,
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: infoTipo.color,
                marginBottom: "1rem",
              }}
            >
              💡 Consejos para ti
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {infoTipo.consejos.map((consejo, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      minWidth: "24px",
                      height: "24px",
                      background: infoTipo.color,
                      color: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {consejo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Todos los tipos */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.75rem",
              marginBottom: "1.5rem",
              boxShadow: "0 8px 24px rgba(155,44,110,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "1rem",
              }}
            >
              🌈 Los 5 lenguajes del amor
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {Object.entries(tiposAmor).map(([key, t]) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    background: key === tipoPrincipal ? `${t.color}0f` : "transparent",
                    border: key === tipoPrincipal ? `1px solid ${t.color}33` : "1px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{t.emoji}</span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: t.color,
                        fontSize: "0.9rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {t.nombre}
                      {key === tipoPrincipal && (
                        <span
                          style={{
                            marginLeft: "0.5rem",
                            background: t.color,
                            color: "#fff",
                            fontSize: "0.65rem",
                            padding: "0.1rem 0.4rem",
                            borderRadius: "50px",
                            fontWeight: 600,
                          }}
                        >
                          Tu principal
                        </span>
                      )}
                    </p>
                    <p style={{ color: "#777", fontSize: "0.8rem", lineHeight: 1.4 }}>
                      {t.descripcion.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingBottom: "2rem" }}>
            <button
              onClick={reiniciar}
              style={{
                width: "100%",
                padding: "1rem",
                background: "linear-gradient(135deg, #E91E8C, #9B59B6)",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(233,30,140,0.3)",
                fontFamily: "inherit",
              }}
            >
              🔄 Repetir el test
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `Mi lenguaje del amor: ${infoTipo.nombre}`,
                    text: `Descubrí que mi principal lenguaje del amor es "${infoTipo.nombre}" ${infoTipo.emoji}. ¿Cuál es el tuyo? Haz el test en Tipos de amor.`,
                  });
                }
              }}
              style={{
                width: "100%",
                padding: "1rem",
                background: "#fff",
                color: "#9B2C6E",
                border: "2px solid #f8bbd0",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              💌 Compartir mi resultado
            </button>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <p style={{ color: "#bbb", fontSize: "0.8rem" }}>
              💕 {BRAND} · {SERVICE}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}