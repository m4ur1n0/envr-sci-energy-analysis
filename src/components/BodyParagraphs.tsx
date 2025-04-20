import React from 'react'

const BodyParagraphs = () => {
  return (
    <div className='body-paragraphs flex flex-col gap-10 my-10 text-gray-500'>

        <p className='indent-5'>
        Over the 43-year period of 1980-2023, U.S. energy production and consumption have undergone notable shifts in both source composition and efficiency. In the two decades preceding the 21st century, renewable energy sources like biomass, solar, and wind were completely unused, or were used so negligibly as to not warrant measurement. In this 20-year span, coal, natural gases, and petroleum dominated the energy mix. While the 21st century saw consistency in these factors regarding natural gas and petroleum, coal as an energy source has dropped significantly in absolute value of quads produced per year (hovering around 20 quads in the 80s and 90s, and halving by the 2020s). By the 2010s and 2020s, the landscape began to shift: as coal declined, we saw significant growth in wind and solar, rising from nearly zero in 2010 to 0.89 quads of solar energy and 1.5 quads of wind energy by 2023. Biomass maintained a modest but steady presence, while nuclear and hydro remained relatively stable. On the consumption side, total energy use peaked around 2010 and has since fluctuated slightly, with increased efficiency evident in the growing proportion of useful energy. We’re watching production from renewable energy rise gradually, but we still need significant improvements if we hope to offset our carbon emissions as a nation.
        </p>

        <p className='indent-5'>
        With knowledge of recent history, it is fascinating to look at certain measurements. A primary example is the use of energy for transportation, which took a significant dip in 2020, as a result of remote work during the COVID-19 pandemic. I personally recall the decrease gas prices took in 2019-2021 as a result of lower usage rates. In 2021 and 2022, respectively, the New York-based Indian Point Unit 3 nuclear reactor, and the Michigan-based Palisades reactor were both retired, explaining the significant dip we see in nuclear power generation in the early 2020s. In 2021, likewise Excelon retired the Byron and Dresden nuclear plants based in Illinois. A guess here is that these plants were retired for economic reasons. The relative decrease in GDP as a result of the COVID-19 pandemic may have inspired a desire for cheaper forms of energy production. Coal might be the most dramatic change in energy production sources over the time period I measured. We can see that from 1995 to 2023, energy produced by coal dropped more than 10 quads (almost 50% of its peak in 1995). This could be for several reasons: growing competition from other sources like natural gas (which demonstrates a level of growth nearly parallel to coal’s decrease in the same time period), or an increase in environmental regulations regarding coal-based energy production.

        </p>
        
    </div>
  )
}

export default BodyParagraphs