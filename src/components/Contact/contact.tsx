import MyMap from "../Map/map";

function Contact() {
  return (
    <div className="grid-container mx-auto flex flex-col flex items-center flex justify-center mt-8">
      <h1 className="text-3xl font-bold text-black border-b-4 border-indigo-500 pb-6">
        CONTACT
      </h1>
      <h2>
        UNE IDÉE ? UN PROJET ? N'HÉSITEZ PAS À DEMANDER UN DEVIS ! [GRATUIT]
      </h2>
      <div className="grid grid-cols-2">
            <div className="grid justify-items-center">
                <h2>Adresse</h2>
                <p className="text-1xl font-bold">
                    25 avenue d'évian, 74200, Thonon les bains
                </p>
                <h2>Téléphone</h2>
                <p>0613406237</p>
                <h2>horaires</h2>
                <p>
                  Lundi - Vendredi
                  09h00 - 18h00
                </p>
            </div>
            <div className="grid justify-items-center">
                <MyMap />
            </div>
        </div>
    </div>
  )
}

export default Contact