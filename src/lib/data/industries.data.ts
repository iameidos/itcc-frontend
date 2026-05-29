import { Factory, Car, Utensils, Zap, Flame, Truck, Pill, Cpu } from 'lucide-react';

export interface IndustryItem {
  name: string;
  icon: React.ElementType;
}

export const industriesData: IndustryItem[] = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Automotive', icon: Car },
  { name: 'Food & Beverage', icon: Utensils },
  { name: 'Energy', icon: Zap },
  { name: 'Oil & Gas', icon: Flame },
  { name: 'Logistics', icon: Truck },
  { name: 'Pharmaceutical', icon: Pill },
  { name: 'Electronics', icon: Cpu },
];
