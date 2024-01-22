import { MyButton } from "../Buttons/callToAction";
import { ourServices } from "../../datas/ourServicesList";


function OurServices() {
  const listItems = ourServices.map((service) => (
    <li key={service.id}>
      <div className="grid grid-cols-2">
        {service.id % 2 === 0 ? (
          <>
            <div className="text-center grid grid-cols-1 content-center justify-items-center">
              <h3 className="text-3xl p-5">{service.title}</h3>
              <p className="text-gray-dark p-5 text-2xl">{service.text}</p>
              < MyButton />
            </div>
            <div className="grid place-content-center">
              <img src={service.imageUrl} alt='img' className='hover:scale-125 Product screenshot' />
            </div>
          </>
        ) : (
          <>
            <div className="grid place-content-center">
              <img src={service.imageUrl}  alt='img' className='hover:scale-125 Product screenshot' />
            </div>
            <div className="text-center grid grid-cols-1 content-center justify-items-center">
              <h3 className="text-3xl p-5">{service.title}</h3>
              <p className="text-gray-dark p-5 text-2xl">{service.text}</p>
              < MyButton />
            </div>
          </>
        )}
      </div>
    </li>
  ));

  return(
    <div className="bg-pink grid-container mx-auto flex flex-col flex items-center flex justify-center">
      <h2 className="p-5 text-3xl font-bold text-black border-b-4 border-indigo-500 pb-6">
        MES SERVICES
      </h2>
      <p className="p-5 text-2xl">
        N’hésitez pas à me contacter pour en savoir plus sur la façon dont je peux répondre à vos besoins.
      </p>
      < MyButton />
      <ul className="p-5 grid grid-cols-1">{listItems}</ul>
    </div>
  )
}

export default OurServices