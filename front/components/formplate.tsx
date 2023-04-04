'use client'
import FeedbackForm from "./form"
// import Countdown from "./timer"
import { ReCaptchaProvider } from "next-recaptcha-v3";

function Formplate() {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-200 py-12">
        <div className="md:flex h-full md:h-2/3 w-4/5 justify-center">
            <div className="md:w-7/12 pt-6 px-2 w-full">
                <h2 className="text-start text-5xl font-bold">Запишитесь на первое занятия</h2>
                <p className="text-start text-2xl font-thin py-4">Открыт набор в детскую группу от 4-6 лет. <br /> Успейте на запись!</p>
            {/* <Countdown /> */}
            </div>
            <ReCaptchaProvider reCaptchaKey = {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
              <FeedbackForm />
            </ReCaptchaProvider>
            
        </div>
    </div>
  )
}

export default Formplate