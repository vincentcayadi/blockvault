import React from 'react'
import creditCard from './creditcard.svg'

export const Hero = () => {
    return (
        <section class="relative select-none">
            <div class="containter flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div class='flex flex-1 flex-col items-center ig:items-start'>
                    <h2 class='text-nord5 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
                        Keep your data secure
                    </h2>
                    <p className="text-lg text-center lg:text-left mb-6">
                        Store your data securely on the decentralised Blockchain network using Blockvault.
                    </p>
                    <button>
                        Enter App
                    </button>
                </div>
                <div class="flex flex-2 flex-col items-center ig:items-start">
                    <img src={creditCard} alt="credit card" class="w-full h-auto mb-6" />
                </div>
            </div>
        </section>
    )
}

export default Hero