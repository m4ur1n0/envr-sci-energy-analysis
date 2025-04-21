import React from 'react'

const FigureCaption = () => {

  const figureCaptionText =  `Data are reported in quadrillion British thermal units (quads). Some gaps (shown as overly-smooth lines) in the time series reflect estimations for missing or unavailable data, denoted as 'x' in the table below. Prior to 1995, residential and commercial consumption were reported jointly; to preserve continuity, both categories display this combined value until 1995, after which separate values are shown. Values for 2010 were reported in thousands of BTUs and converted to quads using the relation 1 quad = 10¹⁵ BTUs. Before 1994, geothermal data appeared under the aggregate category "Geothermal and Other," and in 1995, biomass data were listed as "Biomass and Other"; values in these years may include additional sources. Data were compiled from multiple sources, and inconsistencies in reporting methods across years—especially in earlier datasets—may contribute to the observed variability or omissions in the production data. Data collected from The U.S. Energy Information Administration (EIA), Lawrence Livermore National Laboratory (LLNL), and The U.S. Department of Energy (DOE).`

  return (
    <div className='figure-caption mb-10'>
        <p className=' text-align-center text-gray-400 mb-1'>
            <span className='font-bold text-black'>Figure 1:  </span>
            <span className='italic'>Trends in U.S. energy data from 1980 to 2023, categorized by (A) energy production by source, (B) used vs. wasted energy, and (C) energy consumption by use type.</span>
        </p>
        <p className='text-xs text-gray-400 mt-2 text-center text-justify'>
          {figureCaptionText}
        </p>

        <p className='w-full text-xs text-gray-400 mt-2 text-center text-justify'>You can click keys in the legend to toggle lines in the graph.</p>
    </div>
  )
}

export default FigureCaption