export interface User {
  id: string;
  name: string;
  password: string;
  hasChannel: boolean;
}

export interface Channel {
  id: string;
  name: string;
  userId: string;
  description: string;
  createdAt: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  uploaderId: string;
  uploaderName: string;
  channelId?: string;
  views: number;
  createdAt: string;
}