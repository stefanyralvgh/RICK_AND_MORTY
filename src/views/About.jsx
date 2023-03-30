import { AboutContainer, AboutTitle, AboutSpan } from "../components/Styles";

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>ABOUT ME</AboutTitle>
      <p>
        ¡Hola! Soy <b>Stefany</b>, una odontóloga graduada de la Universidad de
        Antioquia que decidió darle una oportunidad a la programación. Aunque
        estuve trabajando en el campo de la odontología durante algunos años, me
        di cuenta de que no era mi pasion, pero por suerte la encontré en el
        mundo de la tecnología.
      </p>
      <p>
        Desde entonces, me he dedicado a estudiar programación y puedo decir con
        seguridad que disfruto mucho lo que hago. Me encanta aprender cosas
        nuevas y enfrentar desafíos que me permitan seguir creciendo en mi
        carrera.
      </p>
      <p>
        Además de la programación, tengo un gran amor por los animales y la
        naturaleza, y disfruto pasando tiempo al aire libre. Creo que mi pasión
        por la naturaleza me da una perspectiva única y me ayuda a pensar de
        manera creativa en la solución de problemas.
      </p>
      <p>
        Mis habilidades como odontóloga también me han sido útiles en mi carrera
        como programadora. Soy responsable y detallista, lo que me permite crear
        código preciso y eficiente. Además, mi experiencia en el trato con
        pacientes me ha enseñado la importancia de la empatía y la comunicación
        efectiva, habilidades que son cruciales para trabajar en equipo y
        colaborar en proyectos de programación.
      </p>
      <p>
        Estoy emocionada por las oportunidades que el mundo de la tecnología me
        ofrece y estoy ansiosa por seguir creciendo en mi carrera.
      </p>
      <div>
      <AboutSpan>
        Mira mi trabajo <a href="https://github.com/Stefanyralvgh" target="_blank" rel="noopener noreferrer">aquí</a> <b>↵</b>
      </AboutSpan>

      </div>
    </AboutContainer>
  );
}
