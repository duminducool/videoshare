import React from 'react';
import { Link } from 'react-router-dom';
import { Play, User } from 'lucide-react';
import { Video } from '../types';
import { formatViews, formatDate } from '../utils/formatters';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Play size={48} className="text-white" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
            {video.title}
          </h3>
          <div className="mt-2 flex items-center space-x-2 text-gray-600">
            <User size={16} />
            <span className="text-sm">{video.uploaderName}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <span>{formatViews(video.views)} views</span>
            <span className="mx-2">•</span>
            <span>{formatDate(video.createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};