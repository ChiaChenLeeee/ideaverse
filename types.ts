
export interface NavItem {
  id: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
