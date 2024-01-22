import { UploadResumeButton } from "../Buttons/uploadResumeButton";
import constance from "../../assets/photovconstance.png"; 

function About() {
    return (
      <div className="grid-container mx-auto grid grid-cols-2 h-screen place-items-center">
        <div className="image-constance w-5/6 bg-yellow rounded-full">
          <img src={ constance } alt="img" className='portfolio-photocv' />
        </div>
        <div className="text">
          <div className="about text-blue my-12 text-center">
            <h1>
              A propos
            </h1>
          </div>
          <div className="my-12">
            <p>
              Bonjour et bienvenue sur mon site internet. Je suis développeuse web spécialisée PHP et JS et passionnée.
            </p>
          </div>
          <div className="border-solid border-2 border-gray p-5 my-12 bg-gray">
            <p>
              Motivée, enthousiaste et dotée d’une grande capacité d’adaptation et d’apprentissage, je sais me montrer proactive et digne de confiance dans la réalisation de mes missions. Je suis autonome mais j’aime également travailler en équipe
            </p>
          </div>
          <div className="my-12 border-solid border-2 border-gray p-5 bg-gray">
            <p>
              Je bénéficie d’une expérience pratique dans la réalisation de divers projets web, de l’idée à la conception, en passant par les tests et la mise en oeuvre acquise au cours de mes formations et de mon expérience professionnelle.
            </p>
          </div>
          <div className="grid justify-items-center">
            < UploadResumeButton />
          </div>
        </div>
      </div>
    )
}

export default About