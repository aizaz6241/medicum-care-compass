import {
  Stethoscope,
  HandHeart,
  Droplets,
  Utensils,
  Footprints,
  Home,
  Users,
  CalendarClock,
  MessageCircle,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/data/services";

export const serviceIcons: Record<IconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  handHeart: HandHeart,
  droplets: Droplets,
  utensils: Utensils,
  footprints: Footprints,
  home: Home,
  users: Users,
  calendarClock: CalendarClock,
  messageCircle: MessageCircle,
  flower: Flower2,
};
