import NavBar from "../NavBar/NavBar";
import jorgeImage from '../../assets/fotoJorge.jpeg';
import claudioImage from '../../assets/fotoClaudio.jpeg';
import nicolasImage from '../../assets/fotoNico.jpeg';
import fotoPablo from '../../assets/fotoPablo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const people = [
  {
    name: 'Claudio',
    role: 'Scrum Master',
    imageUrl: claudioImage,
    github: 'https://github.com/ClaudioRojasVergara', 
    linkedin: 'https://linkedin.com/in/ClaudioRojasVergara' 
  },
  {
    name: 'Jorge',
    role: 'Product Owner',
    imageUrl: jorgeImage,
    github: 'https://github.com/Hyperion79',
    linkedin: 'https://linkedin.com/in/Hyperion79'
  },
  {
    name: 'Pablo Vásquez',
    role: 'Programador Backend',
    imageUrl: fotoPablo,
    github: 'https://github.com/PabloVasquezC',
    linkedin: 'https://linkedin.com/in/pablovasquez'
  },
  {
    name: 'Nicolas',
    role: 'Programador Frontend',
    imageUrl: nicolasImage,
    github: 'https://github.com/nicolas290',
    linkedin: 'https://linkedin.com/in/nicolas'
  },
];

function OurTeam() {
  return (
    <>
      <NavBar /> 
      <div className="py-24 sm:py-32 container h-[100vh]">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nosotros!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos los creadores de GameWorld, un grupo de estudiantes de INACAP apasionados por la tecnología, los videojuegos y los completos.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="imagenes-de-miebros-del-equipo" src={person.imageUrl} className="h-20 w-20 rounded-full object-cover shadow-md shadow-black" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <div className="flex space-x-3 mt-2">
                      <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FaGithub size={20} />
                      </a>
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
