import NavBar from "../NavBar/NavBar"
import jorgeImage from '../../assets/fotoJorge.jpeg'
import claudioImage from '../../assets/fotoClaudio.jpeg'
import nicolasImage from '../../assets/fotoNico.jpeg'


const people = [
    {
      name: 'Claudio',
      role: 'Scrum Master',
      imageUrl: claudioImage,
    },
    {
        name: 'Jorge',
        role: 'Product Owner',
        imageUrl: jorgeImage
      },
      {
        name: 'Pablo Vásquez',
        role: 'Programador',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Nicolas',
        role: 'Programador',
        imageUrl: nicolasImage
      },
    // More people...
  ]
  
  function OurTeam() {
    return (
      <>
      <NavBar /> 
        <div className="py-24 sm:py-32 container h-[100vh]">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nosotros!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Los creadores de GameWorld son un grupo de estudiantes de INACAP apasionados por la tecnología y los videojuegos.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
}
  
export default OurTeam