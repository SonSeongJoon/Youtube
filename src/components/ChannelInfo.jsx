import React from 'react';
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export function ChannelInfo({id, name}) {
    const {youtube} = useYoutubeApi();
    const {
        data: url,
    } = useQuery(['channel', id], () => youtube.channelImageURL(id),
        {staleTime: 600000});
    return (
        <>
            {url && <img src={url} alt={name}/>}
            <p className='text-lg font-medium ml-2'>{name}</p>
        </>
    )
}