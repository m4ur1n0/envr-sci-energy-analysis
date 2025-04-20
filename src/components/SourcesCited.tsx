import React from 'react'

const SourcesCited = () => {
  return (
    <div className='sources-cited-section flex flex-col gap-10 my-10'>
        <hr className='w-[80%] ml-[10%] mb-10' />

        <h1 className='text-3xl'>Sources Cited</h1>

        <div className='sources-cited-list flex flex-col gap-5 items-center'>
            <a className='text-gray-500 indent-5' href={"https://www.osti.gov/servlets/purl/6952982"} target={"_blank"}>
                Borg, I. Y. and C. K. Briggs (1982) U.S. Energy Flow, 1981, Technical Report UCID-19227-81, Lawrence Livermore National Laboratory, Livermore, California, USA. 19 pp. 
            </a>

            <a className='text-gray-500 indent-5' href={"https://www.osti.gov/servlets/purl/10193434"} target={"_blank"}>
                Borg, I. Y. and C. K. Briggs (1993) U.S. Energy Flow, 1992, Technical Report UCID-19227-92, Lawrence Livermore National Laboratory, Livermore, California, USA. 26 pp. 
            </a>

            <a className='text-gray-500 indent-5' href={"https://www.osti.gov/servlets/purl/10121961"} target={"_blank"}>
                Borg, I. Y. and C. K. Briggs (1994) U.S. Energy Flow, 1993, Technical Report UCID-19227-93, Lawrence Livermore National Laboratory, Livermore, California, USA. 24 pp. 
            </a>

            <a className='text-gray-500 indent-5' href={"https://www.osti.gov/servlets/purl/179236"} target={"_blank"}>
                Borg, I. Y. and C. K. Briggs (1995) U.S. Energy Flow, 1994, Technical Report UCID-19227-94, Lawrence Livermore National Laboratory, Livermore, California, USA. 22 pp.
            </a>

            <a className='text-gray-500 indent-5' href={"https://flowcharts.llnl.gov/commodities/energy"} target={"_blank"}>
                Lawrence Livermore National Laboratory (2024) U.S. Energy Flow Charts, Lawrence Livermore National Laboratory, Livermore, California, USA. Accessed April 18, 2025. 
            </a>

            <a className='text-gray-500 indent-5' href={"https://www.osti.gov/servlets/purl/3400"} target={"_blank"}>
                Miller, H., N. Mui, and A. Pasternak (1997) U.S. Energy Flow, 1995, Technical Report UCRL-ID-129990-95, Lawrence Livermore National Laboratory, Livermore, California, USA. 35 pp.
            </a>

            <a className='text-gray-500 indent-5' href={"https://www.nei.org/resources/statistics/us-nuclear-plant-license-information"} target={"_blank"}>
                Nuclear Energy Institute (2024) U.S. Nuclear Plant License Information, Nuclear Energy Institute, Washington, D.C., USA. Accessed April 18, 2025. 
            </a>
        </div>
    </div>
  )
}

export default SourcesCited