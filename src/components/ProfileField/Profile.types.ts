export interface ProfileFieldProps {
  label: string;
  value: string;
}

export interface StatusBadgeProps {
  status: "Approved" | "Pending" | "Rejected";
}

export interface ProfileHeaderProps {
  title: string;
  subtitle: string;
  status: "Approved" | "Pending" | "Rejected";
}

export interface ProfileInfoCardProps {
  profileImage: string;
  fullName: string;
  designation: string;
  email: string;
  phone: string;
  ibu: string;
  location: string;
}