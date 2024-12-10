import { create } from 'zustand';
import { User, Channel, Video } from '../types';

interface Store {
  currentUser: User | null;
  videos: Video[];
  channels: Channel[];
  users: User[];
  login: (name: string, password: string) => boolean;
  register: (name: string, password: string) => void;
  createChannel: (name: string, description: string) => void;
  uploadVideo: (video: Omit<Video, 'id' | 'views' | 'createdAt'>) => void;
}

export const useStore = create<Store>((set, get) => ({
  currentUser: null,
  videos: [],
  channels: [],
  users: [],

  login: (name, password) => {
    const user = get().users.find(u => u.name === name && u.password === password);
    if (user) {
      set({ currentUser: user });
      return true;
    }
    return false;
  },

  register: (name, password) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      password,
      hasChannel: false,
    };
    set(state => ({ users: [...state.users, newUser] }));
  },

  createChannel: (name, description) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const newChannel: Channel = {
      id: crypto.randomUUID(),
      name,
      userId: currentUser.id,
      description,
      createdAt: new Date().toISOString(),
    };

    set(state => ({
      channels: [...state.channels, newChannel],
      users: state.users.map(u =>
        u.id === currentUser.id ? { ...u, hasChannel: true } : u
      ),
    }));
  },

  uploadVideo: (videoData) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const newVideo: Video = {
      ...videoData,
      id: crypto.randomUUID(),
      views: 0,
      createdAt: new Date().toISOString(),
    };

    set(state => ({ videos: [...state.videos, newVideo] }));
  },
}));