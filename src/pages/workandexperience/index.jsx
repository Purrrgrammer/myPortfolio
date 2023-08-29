import React from 'react'
import { experience } from '../../resource/index'
import WorkCard from '../../components/cards/card1'
import { tuImages, threeddesign, threeddesign2 } from '../../resource/tuwork/index'
function WorkandExperiencePage() {
    return (
        <React.Fragment>
            {/* <div className='m-4'>
            </div> */}
            <div className='pt-16'>

                <section className='experience my-4'>
                    <h1 className='text-3xl ml-2'>
                        Experience
                    </h1>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
                        {experience.map((exp, index) => {
                            return (
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.period}</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{exp.position} | @ {exp.place}</h3>
                                    <ul>
                                        {exp.work.map((w, index) => <li key={index}>- {w}</li>)}
                                    </ul>
                                </li>
                            )
                        }
                        )
                        }
                    </ol>
                </section>

                <section className='work mb-4'>
                    <h1 className='text-3xl ml-2'>Inter-CollaboNature</h1>
                    <div className='flex items-center max-w-none gap-x-4'>
                        {threeddesign.map((el, index) => {
                            return (
                                <WorkCard src={el.src} key={index} />
                            )
                        })}
                    </div>
                </section>

                <section className='3d'>
                    <h1 className='text-3xl ml-2'>Inter-CollaboNature(2)</h1>
                    <div className='flex items-center max-w-none gap-x-4'>
                        {threeddesign2.map((el, index) => {
                            return (
                                <img key={index} src={el.src} className='transition ease-in-out duration-700 hover:duration-700 hover:ease-in-out
                        flex-1 h-80 object-cover overflow-hidden object-center cursor-pointer hover:object-center hover:overflow-hidden hover:flex-auto' />
                            )
                        })}
                    </div>
                </section>

                <section className='work'>
                    <h1 className='text-3xl ml-2'>etc.</h1>
                    <div className='flex items-center max-w-none gap-x-4'>
                        {tuImages.map((el, index) => {
                            return (
                                <img key={index} src={el.src} className='transition ease-in-out duration-700 hover:duration-700 hover:ease-in-out
                        flex-1 h-80 object-cover overflow-hidden object-center cursor-pointer hover:object-center hover:overflow-hidden hover:flex-auto' />
                            )
                        })}
                    </div>
                </section>

                {/* <section className='artwork'>
                <h1 className='text-3xl ml-2'>artwork</h1>
                <div className='flex items-center max-w-none gap-x-4'>
                    {tuImages.map((el, index) => {
                        return (
                            <img key={index} src={el.src} className='transition ease-in-out duration-700 hover:duration-700 hover:ease-in-out
                        flex-1 h-80 object-cover overflow-hidden object-center cursor-pointer hover:object-center hover:overflow-hidden hover:flex-auto' />
                        )
                    })}
                </div>
            </section> */}





                <section className='project'>


                </section>


            </div>

        </React.Fragment>)
}

export default WorkandExperiencePage