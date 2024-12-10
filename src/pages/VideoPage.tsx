import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const videos = useStore(state => state.videos);
  const video = videos.find(v => v.id === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="aspect-video w-full bg-black">
        <iframe
          src={video.videoUrl}
          className="w-full h-full"
          allowFullScreen
          title={video.title}
        />
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <div className="flex items-center mt-2 text-gray-600">
          <span>{video.views} views</span>
          <span className="mx-2">•</span>
          <span>{new Date(video.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="mt-4">
          <h2 className="font-semibold text-lg">
            {video.channelId ? 'Channel: ' : 'Uploaded by: '}
            {video.uploaderName}
          </h2>
          <p className="mt-2 whitespace-pre-wrap">{video.description}</p>
        </div>
      </div>
    </div>
  );
};