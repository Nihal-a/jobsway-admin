import React from 'react'

function PageHeader({name,desc}) {
    return (
        <div className="pt-8 pl-8">
            <h4 className="font-semibold text-2xl">Hello, <span className="text-primary">{name}</span></h4>
            <p className="text-md text-secondary">{desc}</p>
        </div>
    )
}

export default PageHeader
