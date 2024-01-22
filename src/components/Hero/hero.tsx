import { MyButton } from "../Buttons/callToAction";
//import TypeWriter from "../Typewriter/typewriter";
import spinImage from '../../assets/spin.png'

export default function Hero() {
    return (
        <div className="grid-container text-white w-full h-screen p-12 flex justify-start bg-purple bg-no-repeat bg-cover bg-center">
            <button type="button" disabled>
                <img src={spinImage} className="animate-spin h-5 w-5 mr-3" alt="Spin" />
            </button>
            <div className="basis-3/4 grid place-items-center">
                <div className="font-bold text-4xl flex flex-col flex justify-center text-center">
                    <h1>Vous avez un projet ?</h1>
                    <p>Discutons en !</p>
                </div>
                <div className="p-5 text-4xl flex flex-col flex justify-center text-center">
                    <h2>Développement de solutions digitales sur mesure</h2>
                </div>
                <div className="p-5 text-4xl text-yellow flex flex-col flex justify-center text-center">
                    <h3>
                        Création de sites internet
                    </h3>
                </div>
                <div className="grid justify-items-center">
                    <MyButton />
                </div>
            </div>
        </div>
    );
}

/** bg-black border-solid border-2 border-black p-5 flex flex-col flex w-1/3 flex justify-center text-center **/
/**<TypeWriter text="Sites internet" delay={100} infinite /> */