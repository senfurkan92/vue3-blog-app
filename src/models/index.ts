/* eslint-disable no-use-before-define */
export interface Profile {
    id: number,
    bio: string,
    user: User,
    userId: number,
}

export interface User {
    id: number,
    createAt: Date,
    updateAt: Date,
    isActive: boolean,
    emailConfirmed: boolean,
    email: string,
    posts: Post[],
    profile: Profile,
}

export interface Post {
    id: number,
    createAt: Date,
    updateAt: Date,
    isActive: boolean,
    title: string,
    caption: string,
    content: string,
    imgPath: string,
    published: boolean,
    author: User,
    authorId: number,
    category: Category,
    categoryId: number,
  }

export interface Category {
    id: number,
    createAt: Date,
    updateAt: Date,
    isActive: boolean,
    name: string,
    posts: Post,
}
