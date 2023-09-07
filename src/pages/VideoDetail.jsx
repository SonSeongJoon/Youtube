import React from 'react';
import {useLocation} from "react-router-dom";
import {ChannelInfo} from "../components/ChannelInfo";
import {ReletedVideos} from "../components/ReletedVideos";

const isSmallScreen = window.innerWidth <= 768;

export function VideoDetail() {
    const {
        state: {video},
    } = useLocation();
    const {title, channelId, channelTitle, description} = video.snippet;
    return (
        <section>
            <article>
                <iframe
                    style={{
                        border: 'none',
                        height: isSmallScreen ? '360px' : '640px',
                        width: isSmallScreen ? '360px' : '100%',
                    }}
                    id="player"
                    type="text/html"
                    width="100%"
                    height="640"
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