export interface SignUpDto {
  email: string,
  password: string,
  repassword: string,
}

export interface SignInDto {
  email: string,
  password: string,
}

export interface AddPost {
  title: string,
  caption: string,
  description: string,
  content: string,
  image: string,
  authorId: number,
  categoryId: number,
}

export interface AddCategory {
  name: string,
}
