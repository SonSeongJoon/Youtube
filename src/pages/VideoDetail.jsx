import React from 'react';
import {useLocation} from "react-router-dom";
import {ChannelInfo} from "../components/ChannelInfo";
import {ReletedVideos} from "../components/ReletedVideos";

export function VideoDetail() {
    const {
        state: {video},
    } = useLocation();
    const {title, channelId, channelTitle, description} = video.snippet;
    return (
        <section>
            <article>
                <iframe
                    className='w-full h-72 md:w-full md:h-[640px]'
                    style={{
                        border: 'none',
                    }}
                    id="player"
                    type="text/html"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={title}
                >
                </iframe>

                <div>
                    <h2>{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle}/>
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                </div>
            </article>
            <section>
                <ReletedVideos id={video.id}/>
            </section>

        </section>

    )
}