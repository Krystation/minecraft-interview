import React from 'react'

const MinecraftInfo = (props) => {
    const Style = {
        marginTop: '0',
        marginBottom: '0'
    }

    return(
        <section style={Style} className="minecraft-intro">
            {props.children}
        </section>
    )
}

export default MinecraftInfo