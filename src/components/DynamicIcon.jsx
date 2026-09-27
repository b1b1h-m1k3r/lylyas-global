import React from 'react';
import {
  TrendingUp,
  Monitor,
  ShoppingCart,
  Briefcase,
  Globe,
  Shield,
  Users,
  Gem,
  Lightbulb,
  Handshake,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  TrendingUp,
  Monitor,
  ShoppingCart,
  Briefcase,
  Globe,
  Shield,
  Users,
  Gem,
  Lightbulb,
  Handshake,
  CheckCircle2,
};

export default function DynamicIcon({ name, className = 'w-5 h-5', strokeWidth = 1.5 }) {
  const IconComponent = iconMap[name] || CheckCircle2;
  return <IconComponent className={className} strokeWidth={strokeWidth} />;
}
