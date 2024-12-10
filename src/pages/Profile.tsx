import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { VideoCard } from '../components/VideoCard';

export const Profile: React.FC = () => {
  const { currentUser, videos, createChannel } = useStore();
  const [showChannelForm, setShowChannelForm] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');

  const userVideos = videos.filter(v => v.uploaderId === currentUser?.id);

  const handleCreateChannel = (e: React.FormEvent) => {
    e.preventDefault();
    createChannel(channelName, channelDescription);
    setShowChannelForm(false);
  };

  if (!currentUser) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{currentUser.name}'s Profile</h1>
        {!currentUser.hasChannel && !showChannelForm && (
          <button
            onClick={() => setShowChannelForm(true)}
            className="text-blue-600 hover:text-blue-500"
          >
            Create a Channel
          </button>
        )}

        {showChannelForm && (
          <form onSubmit={handleCreateChannel} className="max-w-md space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Channel Name
              </label>
              <input
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Channel Description
              </label>
              <textarea
                value={channelDescription}
                onChange={(e) => setChannelDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Channel
            </button>
          </form>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Your Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};