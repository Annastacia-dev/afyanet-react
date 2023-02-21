import image from "../../../assets/images/about/nurse2.jpg"



const About = () => {
  return (
    <>
    <div id='about' className='sm:grid grid-cols-4  mx-auto sm:px-10 sm:py-10 about h-screen'>
    <div className='relative col-span-2'>
                <img src={image} className='w-72 absolute sm:left-8' alt='nurse'/>
            </div>
        <div  className='col-span-2 '>
          <div className='flex flex-col justify-center items-center sm:mt-14'>
            <h1 className='text-3xl font-bold tracking-wide capitalize'>about us</h1>
            <p className='text-black text-md mt-3 leading-3 sm:leading-10 text-left'>
              At Afyanet, our mission is to make it easy for patients to find and connect with the right healthcare providers.
              We understand that navigating the healthcare system can be overwhelming,which is why we've developed a platform that makes it simple and convenient for patients to access the care they need.
            </p>
            <p className='text-black text-md mt-3 leading-3 sm:leading-10 text-left'>
              Afyanet is a platform that connects patients to healthcare providers in a simple and convenient way.
              We are a team of passionate individuals who are committed to making healthcare more accessible and affordable for all.
            </p>
            </div>
        </div>
 
    </div>
   </>
  )
}

export default About