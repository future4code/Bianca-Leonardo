import React from 'react'

export default function TelaPlaylists(props) {

    let playLists = props.playLists

    return (
        <div>
            {playLists.map((playlist) => {
                <p>{playlist.name}</p>
            })}
        </div>
    )

}