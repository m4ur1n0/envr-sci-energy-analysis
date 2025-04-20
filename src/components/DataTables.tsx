"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';



const DataTables = () => {
    const [tableState, setTableState] = useState<"production" | "area" | "usage">("production");

  return (
    <div className='data-tables-section w-full flex flex-col items-center mt-10'>
        <h1>
            Data Tables by Focus
        </h1>

        <div className='selector-buttons flex w-full items-center justify-center gap-4'>
            <Button
                onClick={() => setTableState("production")}
                disabled={tableState==="production"}
                variant="outline"
            >
                Production
            </Button>

            <Button
                onClick={() => setTableState("area")}
                disabled={tableState==="area"}
                variant="outline"

            >
                Type of Use
            </Button>

            <Button
                onClick={() => setTableState("usage")}
                disabled={tableState==="usage"}
                variant="outline"

            >
                Usage and Waste
            </Button>

        </div>


    </div>
  )
}

export default DataTables