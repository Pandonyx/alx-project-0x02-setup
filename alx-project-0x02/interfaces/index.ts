export interface CardProps {
  title: string;
  content: string | React.ReactNode;
}

export interface Post {
  title: string;
  content: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
}

export interface PostProps {
  title: string;
  content: string;
  userId: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };

}