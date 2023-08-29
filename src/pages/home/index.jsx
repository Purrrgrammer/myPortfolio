import React from 'react'
import { programmingLanguage, JSframework, cssFramwork } from '../../programminglanguage/index'
function HomePage() {
    return (
        <React.Fragment>
            <div className='pt-16'>
                <div className='bg-[url("https://e1.pxfuel.com/desktop-wallpaper/18/270/desktop-wallpaper-1-batcave-batman-cave.jpg")] bg-cover h-full   '>
                    <div className='flex flex-row justify-between items-center ml-14 md:ml-28 lg:ml-28'>
                        <div>
                            <h1 className=' text-white text-5xl '>Hello, World !</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-white xl:text-5xl'>I'm Woramongkol Vichayaworanan</h1>
                            <p className='text-white text-lg'>a frontend developer based in Thailand.</p>
                        </div>
                        <div className=''>
                            <img className='max-h-screen' src='/resources/Pictures/fotor-ai-2023082910571-removebg.png' alt="profilepic" />
                        </div>
                    </div>
                </div>

                <section className='softwareskill my-5'>
                    <div className='my-7'>
                        <h1 className='text-center text-lg lg:text-3xl xl:text-5xl'>
                            Programming Language
                        </h1>
                    </div>
                    <div className='flex flex-row items-center justify-around mt-2'>
                        {programmingLanguage.map((language, index) =>
                            <div key={index} className='mx-2'>
                                <img src={language.url} alt={language.name} className='h-20' />
                            </div>
                        )}
                    </div>

                    <div className='my-7'>
                        <h1 className='text-center text-lg lg:text-3xl xl:text-5xl'>
                            Library
                        </h1>
                    </div>
                    <div className='flex flex-row items-center justify-around mt-2 xl:mx-96 2xl:mx-96'>
                        {JSframework.map((el, index) =>
                            <div key={index} className='mx-2'>
                                <img src={el.url} alt={el.name} className='h-20' />
                            </div>
                        )}
                    </div>

                    <div className='my-7'>
                        <h1 className='text-center text-lg lg:text-3xl xl:text-5xl'>
                            cssFramwork
                        </h1>
                    </div>
                    <div className='flex flex-row items-center justify-around mt-2'>
                        {cssFramwork.map((el, index) =>
                            <div key={index} className='mx-2'>
                                <img src={el.url} alt={el.name} className='h-20' />
                            </div>
                        )}
                    </div>
                </section>

            </div>


        </React.Fragment >
    )
}

export default HomePage